-- =====================================================
-- USER MANAGEMENT AND AUTHENTICATION
-- Admin users, roles, and authentication setup
-- =====================================================

-- =====================================================
-- 1. CREATE CUSTOM USER PROFILES TABLE
-- =====================================================

-- User Profiles for CMS access
CREATE TABLE user_profiles (
    id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email text UNIQUE NOT NULL,
    full_name text,
    role text NOT NULL DEFAULT 'viewer' CHECK (role IN ('admin', 'editor', 'viewer')),
    avatar_url text,
    department text,
    is_active boolean DEFAULT true,
    last_login timestamp with time zone,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on user_profiles
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- User profiles policies
CREATE POLICY "Users can view own profile" ON user_profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON user_profiles
    FOR SELECT USING (auth.is_admin());

CREATE POLICY "Admins can manage all profiles" ON user_profiles
    FOR ALL USING (auth.is_admin());

-- =====================================================
-- 2. CREATE ACTIVITY LOG TABLE
-- =====================================================

-- Activity log for CMS actions
CREATE TABLE activity_logs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    action text NOT NULL,
    table_name text,
    record_id uuid,
    old_values jsonb,
    new_values jsonb,
    ip_address inet,
    user_agent text,
    created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on activity_logs
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

-- Activity logs policies
CREATE POLICY "Admins can view all activity logs" ON activity_logs
    FOR SELECT USING (auth.is_admin());

CREATE POLICY "Users can view own activity logs" ON activity_logs
    FOR SELECT USING (auth.uid() = user_id);

-- =====================================================
-- 3. CREATE TRIGGERS FOR USER MANAGEMENT
-- =====================================================

-- Function to create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
    INSERT INTO public.user_profiles (id, email, full_name, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
        COALESCE(NEW.raw_user_meta_data->>'role', 'viewer')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update user profile on auth user update
CREATE OR REPLACE FUNCTION public.handle_user_update()
RETURNS trigger AS $$
BEGIN
    UPDATE public.user_profiles
    SET
        email = NEW.email,
        full_name = COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
        updated_at = now()
    WHERE id = NEW.id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to update profile on auth user update
CREATE TRIGGER on_auth_user_updated
    AFTER UPDATE ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_user_update();

-- Function to log user activities
CREATE OR REPLACE FUNCTION log_activity()
RETURNS trigger AS $$
BEGIN
    -- Only log if user is authenticated
    IF auth.uid() IS NOT NULL THEN
        INSERT INTO activity_logs (
            user_id,
            action,
            table_name,
            record_id,
            old_values,
            new_values
        ) VALUES (
            auth.uid(),
            TG_OP,
            TG_TABLE_NAME,
            COALESCE(NEW.id, OLD.id),
            CASE WHEN TG_OP = 'DELETE' THEN to_jsonb(OLD) ELSE NULL END,
            CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN to_jsonb(NEW) ELSE NULL END
        );
    END IF;
    
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create activity log triggers for important tables
CREATE TRIGGER log_news_activity AFTER INSERT OR UPDATE OR DELETE ON news FOR EACH ROW EXECUTE FUNCTION log_activity();
CREATE TRIGGER log_photos_activity AFTER INSERT OR UPDATE OR DELETE ON photos FOR EACH ROW EXECUTE FUNCTION log_activity();
CREATE TRIGGER log_videos_activity AFTER INSERT OR UPDATE OR DELETE ON videos FOR EACH ROW EXECUTE FUNCTION log_activity();
CREATE TRIGGER log_teachers_activity AFTER INSERT OR UPDATE OR DELETE ON teachers FOR EACH ROW EXECUTE FUNCTION log_activity();
CREATE TRIGGER log_achievements_activity AFTER INSERT OR UPDATE OR DELETE ON achievements FOR EACH ROW EXECUTE FUNCTION log_activity();
CREATE TRIGGER log_announcements_activity AFTER INSERT OR UPDATE OR DELETE ON announcements FOR EACH ROW EXECUTE FUNCTION log_activity();

-- =====================================================
-- 4. CREATE CMS UTILITY FUNCTIONS
-- =====================================================

-- Function to get user role
CREATE OR REPLACE FUNCTION get_user_role(user_id uuid DEFAULT auth.uid())
RETURNS text AS $$
BEGIN
    RETURN (SELECT role FROM user_profiles WHERE id = user_id);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check if user can perform action
CREATE OR REPLACE FUNCTION can_user_perform_action(action_type text, user_id uuid DEFAULT auth.uid())
RETURNS boolean AS $$
DECLARE
    user_role text;
BEGIN
    SELECT role INTO user_role FROM user_profiles WHERE id = user_id AND is_active = true;
    
    CASE action_type
        WHEN 'read' THEN
            RETURN user_role IN ('admin', 'editor', 'viewer');
        WHEN 'write' THEN
            RETURN user_role IN ('admin', 'editor');
        WHEN 'delete' THEN
            RETURN user_role = 'admin';
        WHEN 'manage_users' THEN
            RETURN user_role = 'admin';
        ELSE
            RETURN false;
    END CASE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update last login
CREATE OR REPLACE FUNCTION update_last_login(user_id uuid DEFAULT auth.uid())
RETURNS void AS $$
BEGIN
    UPDATE user_profiles 
    SET last_login = now() 
    WHERE id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION get_user_role(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION can_user_perform_action(text, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION update_last_login(uuid) TO authenticated;

-- =====================================================
-- 5. CREATE INITIAL ADMIN USER
-- =====================================================

-- Function to create admin user (run this manually after setup)
CREATE OR REPLACE FUNCTION create_admin_user(
    admin_email text,
    admin_password text,
    admin_name text DEFAULT 'Administrator'
)
RETURNS uuid AS $$
DECLARE
    new_user_id uuid;
BEGIN
    -- This function should be used carefully and ideally through Supabase Auth
    -- For security, this is just a template - use Supabase Dashboard to create actual users
    
    -- Insert into user_profiles directly (admin will be created via Supabase Auth)
    INSERT INTO user_profiles (id, email, full_name, role, is_active)
    VALUES (
        gen_random_uuid(), -- This should be the actual auth.users.id
        admin_email,
        admin_name,
        'admin',
        true
    ) RETURNING id INTO new_user_id;
    
    RETURN new_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 6. CREATE SESSION MANAGEMENT
-- =====================================================

-- Function to get current user info
CREATE OR REPLACE FUNCTION get_current_user_info()
RETURNS jsonb AS $$
DECLARE
    result jsonb;
BEGIN
    SELECT jsonb_build_object(
        'id', up.id,
        'email', up.email,
        'full_name', up.full_name,
        'role', up.role,
        'avatar_url', up.avatar_url,
        'department', up.department,
        'is_active', up.is_active,
        'last_login', up.last_login,
        'created_at', up.created_at
    ) INTO result
    FROM user_profiles up
    WHERE up.id = auth.uid();
    
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION get_current_user_info() TO authenticated;

-- =====================================================
-- 7. CREATE CONTENT MODERATION FUNCTIONS
-- =====================================================

-- Function to publish/unpublish content
CREATE OR REPLACE FUNCTION toggle_content_status(
    table_name text,
    record_id uuid,
    status_field text DEFAULT 'is_published'
)
RETURNS boolean AS $$
DECLARE
    current_status boolean;
    sql_query text;
BEGIN
    -- Check if user can perform this action
    IF NOT can_user_perform_action('write') THEN
        RAISE EXCEPTION 'Insufficient permissions to modify content status';
    END IF;
    
    -- Build dynamic query to toggle status
    sql_query := format('UPDATE %I SET %I = NOT %I WHERE id = $1 RETURNING %I', 
                       table_name, status_field, status_field, status_field);
    
    EXECUTE sql_query USING record_id INTO current_status;
    
    RETURN current_status;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION toggle_content_status(text, uuid, text) TO authenticated;

-- =====================================================
-- 8. CREATE BACKUP AND MAINTENANCE FUNCTIONS
-- =====================================================

-- Function to get database statistics
CREATE OR REPLACE FUNCTION get_database_stats()
RETURNS jsonb AS $$
DECLARE
    result jsonb;
BEGIN
    -- Check if user is admin
    IF NOT auth.is_admin() THEN
        RAISE EXCEPTION 'Only admins can view database statistics';
    END IF;
    
    SELECT jsonb_build_object(
        'total_news', (SELECT COUNT(*) FROM news),
        'published_news', (SELECT COUNT(*) FROM news WHERE is_published = true),
        'total_photos', (SELECT COUNT(*) FROM photos),
        'total_videos', (SELECT COUNT(*) FROM videos),
        'total_teachers', (SELECT COUNT(*) FROM teachers WHERE is_active = true),
        'total_users', (SELECT COUNT(*) FROM user_profiles WHERE is_active = true),
        'recent_activities', (SELECT COUNT(*) FROM activity_logs WHERE created_at > NOW() - INTERVAL '24 hours'),
        'storage_usage', jsonb_build_object(
            'news_with_images', (SELECT COUNT(*) FROM news WHERE image IS NOT NULL),
            'photos_count', (SELECT COUNT(*) FROM photos),
            'videos_count', (SELECT COUNT(*) FROM videos)
        )
    ) INTO result;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION get_database_stats() TO authenticated;

-- =====================================================
-- 9. CREATE CONTENT SEARCH FUNCTIONS
-- =====================================================

-- Enhanced search function with user permissions
CREATE OR REPLACE FUNCTION search_all_content(
    search_term text,
    content_types text[] DEFAULT ARRAY['news', 'photos', 'videos', 'teachers'],
    limit_results integer DEFAULT 50
)
RETURNS TABLE (
    content_type text,
    id uuid,
    title text,
    excerpt text,
    image_url text,
    created_at timestamp with time zone,
    is_published boolean
) AS $$
BEGIN
    -- Check if user can search (basic permission check)
    IF NOT can_user_perform_action('read') THEN
        RAISE EXCEPTION 'Insufficient permissions to search content';
    END IF;
    
    RETURN QUERY
    SELECT 'news'::text, n.id, n.title, n.excerpt, n.image, n.created_at, n.is_published
    FROM news n
    WHERE 'news' = ANY(content_types)
      AND (n.title ILIKE '%' || search_term || '%' 
           OR n.content ILIKE '%' || search_term || '%'
           OR n.excerpt ILIKE '%' || search_term || '%')
      AND (get_user_role() = 'admin' OR n.is_published = true)
    
    UNION ALL
    
    SELECT 'photo'::text, p.id, p.title, p.description, p.image, p.created_at, p.is_active
    FROM photos p
    WHERE 'photos' = ANY(content_types)
      AND (p.title ILIKE '%' || search_term || '%' 
           OR p.description ILIKE '%' || search_term || '%')
      AND (get_user_role() = 'admin' OR p.is_active = true)
    
    UNION ALL
    
    SELECT 'video'::text, v.id, v.title, v.description, v.thumbnail, v.created_at, v.is_active
    FROM videos v
    WHERE 'videos' = ANY(content_types)
      AND (v.title ILIKE '%' || search_term || '%' 
           OR v.description ILIKE '%' || search_term || '%')
      AND (get_user_role() = 'admin' OR v.is_active = true)
    
    UNION ALL
    
    SELECT 'teacher'::text, t.id, t.name, t.position, t.image_url, t.created_at, t.is_active
    FROM teachers t
    WHERE 'teachers' = ANY(content_types)
      AND (t.name ILIKE '%' || search_term || '%' 
           OR t.position ILIKE '%' || search_term || '%'
           OR t.specialization ILIKE '%' || search_term || '%')
      AND (get_user_role() = 'admin' OR t.is_active = true)
    
    ORDER BY created_at DESC
    LIMIT limit_results;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION search_all_content(text, text[], integer) TO authenticated;

-- =====================================================
-- 10. UPDATE EXISTING FUNCTIONS WITH PERMISSIONS
-- =====================================================

-- Update the existing search function to include permissions
DROP FUNCTION IF EXISTS search_content(text);

-- Update the CMS dashboard function with permissions
CREATE OR REPLACE FUNCTION get_cms_dashboard_stats()
RETURNS jsonb AS $$
DECLARE
    result jsonb;
BEGIN
    -- Check if user can access dashboard
    IF NOT can_user_perform_action('read') THEN
        RAISE EXCEPTION 'Insufficient permissions to access dashboard';
    END IF;
    
    SELECT jsonb_build_object(
        'content_stats', jsonb_build_object(
            'total_news', (SELECT COUNT(*) FROM news),
            'published_news', (SELECT COUNT(*) FROM news WHERE is_published = true),
            'total_photos', (SELECT COUNT(*) FROM photos),
            'total_videos', (SELECT COUNT(*) FROM videos),
            'total_teachers', (SELECT COUNT(*) FROM teachers WHERE is_active = true),
            'total_programs', (SELECT COUNT(*) FROM study_programs WHERE is_active = true),
            'total_activities', (SELECT COUNT(*) FROM extracurricular_activities WHERE is_active = true)
        ),
        'recent_activity', jsonb_build_object(
            'recent_views_news', (SELECT COALESCE(SUM(views), 0) FROM news WHERE created_at > NOW() - INTERVAL '30 days'),
            'recent_views_photos', (SELECT COALESCE(SUM(views), 0) FROM photos WHERE created_at > NOW() - INTERVAL '30 days'),
            'recent_views_videos', (SELECT COALESCE(SUM(views), 0) FROM videos WHERE created_at > NOW() - INTERVAL '30 days'),
            'recent_logins', (SELECT COUNT(*) FROM user_profiles WHERE last_login > NOW() - INTERVAL '24 hours')
        ),
        'user_info', get_current_user_info()
    ) INTO result;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 11. CREATE INDEXES FOR PERFORMANCE
-- =====================================================

-- Indexes for user management
CREATE INDEX idx_user_profiles_role ON user_profiles(role);
CREATE INDEX idx_user_profiles_active ON user_profiles(is_active);
CREATE INDEX idx_activity_logs_user_id ON activity_logs(user_id);
CREATE INDEX idx_activity_logs_created_at ON activity_logs(created_at DESC);
CREATE INDEX idx_activity_logs_table_name ON activity_logs(table_name);

-- =====================================================
-- 12. SECURITY NOTES AND INITIAL SETUP
-- =====================================================

-- IMPORTANT SECURITY NOTES:
-- 1. Change default passwords immediately after setup
-- 2. Use strong passwords for admin accounts
-- 3. Regularly review user permissions and activity logs
-- 4. Enable 2FA for admin accounts through Supabase Dashboard
-- 5. Monitor activity logs for suspicious activities

-- INITIAL SETUP STEPS:
-- 1. Run all SQL scripts in order
-- 2. Create admin user through Supabase Auth Dashboard
-- 3. Update user_profiles table with correct role for admin
-- 4. Test all permissions and functions
-- 5. Configure email templates in Supabase Dashboard

COMMENT ON TABLE user_profiles IS 'User profiles for CMS access with role-based permissions';
COMMENT ON TABLE activity_logs IS 'Activity logging for content management actions';
COMMENT ON FUNCTION get_user_role(uuid) IS 'Get user role for permission checking';
COMMENT ON FUNCTION can_user_perform_action(text, uuid) IS 'Check if user can perform specific action';
COMMENT ON FUNCTION get_cms_dashboard_stats() IS 'Get comprehensive dashboard statistics for CMS';

-- =====================================================
-- USER MANAGEMENT SETUP COMPLETE
-- =====================================================