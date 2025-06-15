-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Complete RLS setup for CMS and public access
-- =====================================================

-- =====================================================
-- 1. ENABLE RLS ON ALL TABLES
-- =====================================================

-- Core tables
ALTER TABLE school_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE school_statistics ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE school_address ENABLE ROW LEVEL SECURITY;
ALTER TABLE operational_hours ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_media ENABLE ROW LEVEL SECURITY;

-- Academic tables
ALTER TABLE academic_curriculum ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_facilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_advantages ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_career_paths ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_software_skills ENABLE ROW LEVEL SECURITY;

-- Extracurricular tables
ALTER TABLE extracurricular_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE extracurricular_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE school_features ENABLE ROW LEVEL SECURITY;

-- People tables
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Facilities tables
ALTER TABLE facilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE infrastructures ENABLE ROW LEVEL SECURITY;

-- Content tables
ALTER TABLE news_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

-- Admission tables
ALTER TABLE admission_timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE admission_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE admission_fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE admission_discounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE registration_flow ENABLE ROW LEVEL SECURITY;
ALTER TABLE admission_faq ENABLE ROW LEVEL SECURITY;

-- Media tables
ALTER TABLE photo_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE photo_albums ENABLE ROW LEVEL SECURITY;
ALTER TABLE album_photos ENABLE ROW LEVEL SECURITY;

-- Homepage tables
ALTER TABLE hero_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_buttons ENABLE ROW LEVEL SECURITY;
ALTER TABLE quick_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE homepage_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE call_to_action ENABLE ROW LEVEL SECURITY;

-- Shared tables
ALTER TABLE missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_menu ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE emergency_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_configurations ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_information ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- 2. CREATE HELPER FUNCTIONS FOR RLS
-- =====================================================

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION auth.is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN (
    SELECT COALESCE(
      auth.jwt() ->> 'user_role' = 'admin' OR
      auth.jwt() ->> 'role' = 'admin' OR
      (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin' OR
      (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin',
      false
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check if user is editor
CREATE OR REPLACE FUNCTION auth.is_editor()
RETURNS boolean AS $$
BEGIN
  RETURN (
    SELECT COALESCE(
      auth.jwt() ->> 'user_role' IN ('admin', 'editor') OR
      auth.jwt() ->> 'role' IN ('admin', 'editor') OR
      (auth.jwt() -> 'user_metadata' ->> 'role') IN ('admin', 'editor') OR
      (auth.jwt() -> 'app_metadata' ->> 'role') IN ('admin', 'editor'),
      false
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to check if user is authenticated
CREATE OR REPLACE FUNCTION auth.is_authenticated()
RETURNS boolean AS $$
BEGIN
  RETURN auth.uid() IS NOT NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 3. PUBLIC READ POLICIES
-- =====================================================

-- Core tables - Public read access
CREATE POLICY "Public read access for school_profile" ON school_profile FOR SELECT USING (true);
CREATE POLICY "Public read access for school_statistics" ON school_statistics FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for contact_info" ON contact_info FOR SELECT USING (true);
CREATE POLICY "Public read access for school_address" ON school_address FOR SELECT USING (true);
CREATE POLICY "Public read access for operational_hours" ON operational_hours FOR SELECT USING (true);
CREATE POLICY "Public read access for social_media" ON social_media FOR SELECT USING (is_active = true);

-- Academic tables - Public read access
CREATE POLICY "Public read access for academic_curriculum" ON academic_curriculum FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for study_programs" ON study_programs FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for program_subjects" ON program_subjects FOR SELECT USING (true);
CREATE POLICY "Public read access for program_facilities" ON program_facilities FOR SELECT USING (true);
CREATE POLICY "Public read access for program_advantages" ON program_advantages FOR SELECT USING (true);
CREATE POLICY "Public read access for program_career_paths" ON program_career_paths FOR SELECT USING (true);
CREATE POLICY "Public read access for program_certifications" ON program_certifications FOR SELECT USING (true);
CREATE POLICY "Public read access for program_software_skills" ON program_software_skills FOR SELECT USING (true);

-- Extracurricular tables - Public read access
CREATE POLICY "Public read access for extracurricular_categories" ON extracurricular_categories FOR SELECT USING (true);
CREATE POLICY "Public read access for extracurricular_activities" ON extracurricular_activities FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for achievements" ON achievements FOR SELECT USING (true);
CREATE POLICY "Public read access for school_features" ON school_features FOR SELECT USING (is_active = true);

-- People tables - Public read access
CREATE POLICY "Public read access for teachers" ON teachers FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for teacher_certifications" ON teacher_certifications FOR SELECT USING (true);
CREATE POLICY "Public read access for teacher_achievements" ON teacher_achievements FOR SELECT USING (true);
CREATE POLICY "Public read access for testimonials" ON testimonials FOR SELECT USING (is_active = true);

-- Facilities tables - Public read access
CREATE POLICY "Public read access for facilities" ON facilities FOR SELECT USING (is_available = true);
CREATE POLICY "Public read access for infrastructures" ON infrastructures FOR SELECT USING (true);

-- Content tables - Public read access
CREATE POLICY "Public read access for news_categories" ON news_categories FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for news" ON news FOR SELECT USING (is_published = true);
CREATE POLICY "Public read access for announcements" ON announcements FOR SELECT USING (is_active = true);

-- Admission tables - Public read access
CREATE POLICY "Public read access for admission_timeline" ON admission_timeline FOR SELECT USING (true);
CREATE POLICY "Public read access for admission_requirements" ON admission_requirements FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for admission_fees" ON admission_fees FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for admission_discounts" ON admission_discounts FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for registration_flow" ON registration_flow FOR SELECT USING (true);
CREATE POLICY "Public read access for admission_faq" ON admission_faq FOR SELECT USING (is_active = true);

-- Media tables - Public read access
CREATE POLICY "Public read access for photo_categories" ON photo_categories FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for photos" ON photos FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for videos" ON videos FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for photo_albums" ON photo_albums FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for album_photos" ON album_photos FOR SELECT USING (true);

-- Homepage tables - Public read access
CREATE POLICY "Public read access for hero_content" ON hero_content FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for hero_buttons" ON hero_buttons FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for quick_info" ON quick_info FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for homepage_sections" ON homepage_sections FOR SELECT USING (is_enabled = true);
CREATE POLICY "Public read access for call_to_action" ON call_to_action FOR SELECT USING (is_active = true);

-- Shared tables - Public read access
CREATE POLICY "Public read access for missions" ON missions FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for navigation_menu" ON navigation_menu FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for contact_departments" ON contact_departments FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for emergency_contacts" ON emergency_contacts FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for form_configurations" ON form_configurations FOR SELECT USING (is_enabled = true);
CREATE POLICY "Public read access for visitor_information" ON visitor_information FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for tags" ON tags FOR SELECT USING (true);

-- =====================================================
-- 4. ADMIN FULL ACCESS POLICIES
-- =====================================================

-- Core tables - Admin full access
CREATE POLICY "Admin full access for school_profile" ON school_profile FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for school_statistics" ON school_statistics FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for contact_info" ON contact_info FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for school_address" ON school_address FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for operational_hours" ON operational_hours FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for social_media" ON social_media FOR ALL USING (auth.is_admin());

-- Academic tables - Admin full access
CREATE POLICY "Admin full access for academic_curriculum" ON academic_curriculum FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for study_programs" ON study_programs FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for program_subjects" ON program_subjects FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for program_facilities" ON program_facilities FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for program_advantages" ON program_advantages FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for program_career_paths" ON program_career_paths FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for program_certifications" ON program_certifications FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for program_software_skills" ON program_software_skills FOR ALL USING (auth.is_admin());

-- Extracurricular tables - Admin full access
CREATE POLICY "Admin full access for extracurricular_categories" ON extracurricular_categories FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for extracurricular_activities" ON extracurricular_activities FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for achievements" ON achievements FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for school_features" ON school_features FOR ALL USING (auth.is_admin());

-- People tables - Admin full access
CREATE POLICY "Admin full access for teachers" ON teachers FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for teacher_certifications" ON teacher_certifications FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for teacher_achievements" ON teacher_achievements FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for testimonials" ON testimonials FOR ALL USING (auth.is_admin());

-- Facilities tables - Admin full access
CREATE POLICY "Admin full access for facilities" ON facilities FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for infrastructures" ON infrastructures FOR ALL USING (auth.is_admin());

-- Content tables - Admin full access
CREATE POLICY "Admin full access for news_categories" ON news_categories FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for news" ON news FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for announcements" ON announcements FOR ALL USING (auth.is_admin());

-- Admission tables - Admin full access
CREATE POLICY "Admin full access for admission_timeline" ON admission_timeline FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for admission_requirements" ON admission_requirements FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for admission_fees" ON admission_fees FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for admission_discounts" ON admission_discounts FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for registration_flow" ON registration_flow FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for admission_faq" ON admission_faq FOR ALL USING (auth.is_admin());

-- Media tables - Admin full access
CREATE POLICY "Admin full access for photo_categories" ON photo_categories FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for photos" ON photos FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for videos" ON videos FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for photo_albums" ON photo_albums FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for album_photos" ON album_photos FOR ALL USING (auth.is_admin());

-- Homepage tables - Admin full access
CREATE POLICY "Admin full access for hero_content" ON hero_content FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for hero_buttons" ON hero_buttons FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for quick_info" ON quick_info FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for homepage_sections" ON homepage_sections FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for call_to_action" ON call_to_action FOR ALL USING (auth.is_admin());

-- Shared tables - Admin full access
CREATE POLICY "Admin full access for missions" ON missions FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for navigation_menu" ON navigation_menu FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for contact_departments" ON contact_departments FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for emergency_contacts" ON emergency_contacts FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for form_configurations" ON form_configurations FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for visitor_information" ON visitor_information FOR ALL USING (auth.is_admin());
CREATE POLICY "Admin full access for tags" ON tags FOR ALL USING (auth.is_admin());

-- =====================================================
-- 5. EDITOR ACCESS POLICIES (READ + LIMITED WRITE)
-- =====================================================

-- Content tables - Editor can manage news and announcements
CREATE POLICY "Editor manage news" ON news FOR INSERT WITH CHECK (auth.is_editor());
CREATE POLICY "Editor update news" ON news FOR UPDATE USING (auth.is_editor());
CREATE POLICY "Editor read all news" ON news FOR SELECT USING (auth.is_editor());

CREATE POLICY "Editor manage announcements" ON announcements FOR INSERT WITH CHECK (auth.is_editor());
CREATE POLICY "Editor update announcements" ON announcements FOR UPDATE USING (auth.is_editor());
CREATE POLICY "Editor read all announcements" ON announcements FOR SELECT USING (auth.is_editor());

-- Media tables - Editor can manage photos and videos
CREATE POLICY "Editor manage photos" ON photos FOR INSERT WITH CHECK (auth.is_editor());
CREATE POLICY "Editor update photos" ON photos FOR UPDATE USING (auth.is_editor());
CREATE POLICY "Editor read all photos" ON photos FOR SELECT USING (auth.is_editor());

CREATE POLICY "Editor manage videos" ON videos FOR INSERT WITH CHECK (auth.is_editor());
CREATE POLICY "Editor update videos" ON videos FOR UPDATE USING (auth.is_editor());
CREATE POLICY "Editor read all videos" ON videos FOR SELECT USING (auth.is_editor());

CREATE POLICY "Editor manage photo_albums" ON photo_albums FOR INSERT WITH CHECK (auth.is_editor());
CREATE POLICY "Editor update photo_albums" ON photo_albums FOR UPDATE USING (auth.is_editor());
CREATE POLICY "Editor read all photo_albums" ON photo_albums FOR SELECT USING (auth.is_editor());

CREATE POLICY "Editor manage album_photos" ON album_photos FOR INSERT WITH CHECK (auth.is_editor());
CREATE POLICY "Editor update album_photos" ON album_photos FOR UPDATE USING (auth.is_editor());
CREATE POLICY "Editor read all album_photos" ON album_photos FOR SELECT USING (auth.is_editor());

-- Editor can manage achievements
CREATE POLICY "Editor manage achievements" ON achievements FOR INSERT WITH CHECK (auth.is_editor());
CREATE POLICY "Editor update achievements" ON achievements FOR UPDATE USING (auth.is_editor());
CREATE POLICY "Editor read all achievements" ON achievements FOR SELECT USING (auth.is_editor());

-- Editor can read all for CMS display purposes
CREATE POLICY "Editor read all school_statistics" ON school_statistics FOR SELECT USING (auth.is_editor());
CREATE POLICY "Editor read all school_features" ON school_features FOR SELECT USING (auth.is_editor());
CREATE POLICY "Editor read all teachers" ON teachers FOR SELECT USING (auth.is_editor());
CREATE POLICY "Editor read all testimonials" ON testimonials FOR SELECT USING (auth.is_editor());
CREATE POLICY "Editor read all facilities" ON facilities FOR SELECT USING (auth.is_editor());
CREATE POLICY "Editor read all study_programs" ON study_programs FOR SELECT USING (auth.is_editor());

-- =====================================================
-- 6. SPECIAL POLICIES FOR VIEWS TRACKING
-- =====================================================

-- Allow anonymous users to update view counts
CREATE POLICY "Anyone can update news views" ON news FOR UPDATE 
USING (true) 
WITH CHECK (
  -- Only allow updating the views column
  OLD.id = NEW.id AND
  OLD.slug = NEW.slug AND
  OLD.title = NEW.title AND
  OLD.category_id = NEW.category_id AND
  OLD.date = NEW.date AND
  OLD.excerpt = NEW.excerpt AND
  OLD.content = NEW.content AND
  OLD.author = NEW.author AND
  OLD.image = NEW.image AND
  OLD.tags = NEW.tags AND
  OLD.is_featured = NEW.is_featured AND
  OLD.is_published = NEW.is_published AND
  NEW.views = OLD.views + 1
);

CREATE POLICY "Anyone can update photo views" ON photos FOR UPDATE 
USING (true) 
WITH CHECK (
  -- Only allow updating the views column
  OLD.id = NEW.id AND
  OLD.title = NEW.title AND
  OLD.category_id = NEW.category_id AND
  OLD.date = NEW.date AND
  OLD.image = NEW.image AND
  OLD.thumbnail = NEW.thumbnail AND
  OLD.description = NEW.description AND
  OLD.photographer = NEW.photographer AND
  OLD.tags = NEW.tags AND
  OLD.is_featured = NEW.is_featured AND
  OLD.is_active = NEW.is_active AND
  NEW.views = OLD.views + 1
);

CREATE POLICY "Anyone can update video views" ON videos FOR UPDATE 
USING (true) 
WITH CHECK (
  -- Only allow updating the views column
  OLD.id = NEW.id AND
  OLD.title = NEW.title AND
  OLD.category = NEW.category AND
  OLD.date = NEW.date AND
  OLD.thumbnail = NEW.thumbnail AND
  OLD.duration = NEW.duration AND
  OLD.video = NEW.video AND
  OLD.description = NEW.description AND
  OLD.tags = NEW.tags AND
  OLD.is_featured = NEW.is_featured AND
  OLD.is_active = NEW.is_active AND
  NEW.views = OLD.views + 1
);

-- =====================================================
-- 7. CREATE UTILITY FUNCTIONS FOR CMS
-- =====================================================

-- Function to get all content for CMS dashboard
CREATE OR REPLACE FUNCTION get_cms_dashboard_stats()
RETURNS jsonb AS $$
DECLARE
  result jsonb;
BEGIN
  SELECT jsonb_build_object(
    'total_news', (SELECT COUNT(*) FROM news),
    'published_news', (SELECT COUNT(*) FROM news WHERE is_published = true),
    'total_photos', (SELECT COUNT(*) FROM photos),
    'total_videos', (SELECT COUNT(*) FROM videos),
    'total_teachers', (SELECT COUNT(*) FROM teachers WHERE is_active = true),
    'total_programs', (SELECT COUNT(*) FROM study_programs WHERE is_active = true),
    'total_activities', (SELECT COUNT(*) FROM extracurricular_activities WHERE is_active = true),
    'recent_views_news', (SELECT COALESCE(SUM(views), 0) FROM news WHERE created_at > NOW() - INTERVAL '30 days'),
    'recent_views_photos', (SELECT COALESCE(SUM(views), 0) FROM photos WHERE created_at > NOW() - INTERVAL '30 days'),
    'recent_views_videos', (SELECT COALESCE(SUM(views), 0) FROM videos WHERE created_at > NOW() - INTERVAL '30 days')
  ) INTO result;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_cms_dashboard_stats() TO authenticated;

-- Function to search across all content
CREATE OR REPLACE FUNCTION search_content(search_term text)
RETURNS TABLE (
  content_type text,
  id uuid,
  title text,
  excerpt text,
  created_at timestamp with time zone
) AS $$
BEGIN
  RETURN QUERY
  SELECT 'news'::text, n.id, n.title, n.excerpt, n.created_at
  FROM news n
  WHERE n.title ILIKE '%' || search_term || '%' 
     OR n.content ILIKE '%' || search_term || '%'
     OR n.excerpt ILIKE '%' || search_term || '%'
  
  UNION ALL
  
  SELECT 'photo'::text, p.id, p.title, p.description, p.created_at
  FROM photos p
  WHERE p.title ILIKE '%' || search_term || '%' 
     OR p.description ILIKE '%' || search_term || '%'
  
  UNION ALL
  
  SELECT 'video'::text, v.id, v.title, v.description, v.created_at
  FROM videos v
  WHERE v.title ILIKE '%' || search_term || '%' 
     OR v.description ILIKE '%' || search_term || '%'
  
  UNION ALL
  
  SELECT 'teacher'::text, t.id, t.name, t.position, t.created_at
  FROM teachers t
  WHERE t.name ILIKE '%' || search_term || '%' 
     OR t.position ILIKE '%' || search_term || '%'
     OR t.specialization ILIKE '%' || search_term || '%'
  
  ORDER BY created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to editors and admins
GRANT EXECUTE ON FUNCTION search_content(text) TO authenticated;

-- =====================================================
-- RLS POLICIES SETUP COMPLETE
-- =====================================================