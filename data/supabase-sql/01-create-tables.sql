-- =====================================================
-- SMK SETIA KARYA DATABASE SCHEMA
-- Complete table creation script for Supabase
-- =====================================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- 1. CORE TABLES
-- =====================================================

-- School Profile Table
CREATE TABLE school_profile (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    short_name text,
    logo text,
    tagline text,
    welcome_message text,
    description text,
    established_year integer,
    accreditation text,
    npsn text,
    school_type text,
    vision text,
    motto text,
    history text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- School Statistics (Shared across pages)
CREATE TABLE school_statistics (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    label text NOT NULL,
    value text NOT NULL,
    icon text,
    page text NOT NULL,
    category text,
    description text,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Contact Information
CREATE TABLE contact_info (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    phone text,
    whatsapp text,
    whatsapp_message text,
    fax text,
    email text,
    website text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- School Address
CREATE TABLE school_address (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    full_address text NOT NULL,
    street text,
    sub_district text,
    district text,
    city text,
    state text,
    postal_code text,
    country text DEFAULT 'Indonesia',
    latitude decimal(10,8),
    longitude decimal(11,8),
    zoom_level integer DEFAULT 15,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Operational Hours
CREATE TABLE operational_hours (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    day_of_week text NOT NULL,
    opening_time time,
    closing_time time,
    is_closed boolean DEFAULT false,
    note text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Social Media
CREATE TABLE social_media (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    platform text NOT NULL,
    url text NOT NULL,
    username text,
    is_active boolean DEFAULT true,
    followers integer DEFAULT 0,
    display_order integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- =====================================================
-- 2. ACADEMIC TABLES
-- =====================================================

-- Academic Curriculum
CREATE TABLE academic_curriculum (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text,
    features jsonb,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Study Programs (TKRO, OTKP, etc.)
CREATE TABLE study_programs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    code text NOT NULL UNIQUE,
    name text NOT NULL,
    short_name text,
    description text,
    image text,
    href text,
    active_students integer DEFAULT 0,
    quota_per_year integer DEFAULT 0,
    duration_years integer DEFAULT 3,
    employment_rate text,
    is_active boolean DEFAULT true,
    display_order integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Program Subjects
CREATE TABLE program_subjects (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    program_id uuid REFERENCES study_programs(id) ON DELETE CASCADE,
    name text NOT NULL,
    description text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Program Facilities
CREATE TABLE program_facilities (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    program_id uuid REFERENCES study_programs(id) ON DELETE CASCADE,
    name text NOT NULL,
    description text,
    image_url text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Program Advantages
CREATE TABLE program_advantages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    program_id uuid REFERENCES study_programs(id) ON DELETE CASCADE,
    advantage text NOT NULL,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Program Career Paths
CREATE TABLE program_career_paths (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    program_id uuid REFERENCES study_programs(id) ON DELETE CASCADE,
    career_path text NOT NULL,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Program Certifications
CREATE TABLE program_certifications (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    program_id uuid REFERENCES study_programs(id) ON DELETE CASCADE,
    certification text NOT NULL,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Program Software Skills
CREATE TABLE program_software_skills (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    program_id uuid REFERENCES study_programs(id) ON DELETE CASCADE,
    skill text NOT NULL,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- =====================================================
-- 3. EXTRACURRICULAR TABLES
-- =====================================================

-- Extracurricular Categories
CREATE TABLE extracurricular_categories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    icon text,
    description text,
    display_order integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Extracurricular Activities
CREATE TABLE extracurricular_activities (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id uuid REFERENCES extracurricular_categories(id) ON DELETE CASCADE,
    name text NOT NULL,
    schedule text,
    achievements text,
    description text,
    instructor text,
    location text,
    max_participants integer,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Achievements
CREATE TABLE achievements (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    category text NOT NULL,
    year text NOT NULL,
    organizer text,
    level text,
    position text,
    participants text,
    description text,
    image text,
    certificate_url text,
    activity_id uuid REFERENCES extracurricular_activities(id) ON DELETE SET NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- School Features (Shared across pages)
CREATE TABLE school_features (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text,
    icon text,
    page text NOT NULL,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- =====================================================
-- 4. PEOPLE TABLES
-- =====================================================

-- Teachers and Staff
CREATE TABLE teachers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    position text NOT NULL,
    education text,
    image_url text,
    email text,
    phone text,
    experience_years integer,
    specialization text,
    quote text,
    is_active boolean DEFAULT true,
    employee_type text DEFAULT 'teacher',
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Teacher Certifications
CREATE TABLE teacher_certifications (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    teacher_id uuid REFERENCES teachers(id) ON DELETE CASCADE,
    certification text NOT NULL,
    issuer text,
    year_obtained integer,
    expiry_date date,
    certificate_url text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Teacher Achievements
CREATE TABLE teacher_achievements (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    teacher_id uuid REFERENCES teachers(id) ON DELETE CASCADE,
    achievement text NOT NULL,
    year integer,
    category text,
    description text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Testimonials
CREATE TABLE testimonials (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    role text NOT NULL,
    content text NOT NULL,
    image text,
    rating integer DEFAULT 5,
    category text,
    is_featured boolean DEFAULT false,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- =====================================================
-- 5. FACILITIES TABLES
-- =====================================================

-- Facilities
CREATE TABLE facilities (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    category text NOT NULL,
    name text NOT NULL,
    description text,
    capacity text,
    total text,
    features jsonb,
    image text,
    location text,
    is_available boolean DEFAULT true,
    maintenance_schedule text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Infrastructures
CREATE TABLE infrastructures (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    description text,
    details text,
    icon text,
    status text DEFAULT 'operational',
    last_maintenance date,
    next_maintenance date,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- =====================================================
-- 6. CONTENT TABLES
-- =====================================================

-- News Categories
CREATE TABLE news_categories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL UNIQUE,
    description text,
    color text,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- News Articles
CREATE TABLE news (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    slug text NOT NULL UNIQUE,
    title text NOT NULL,
    category_id uuid REFERENCES news_categories(id) ON DELETE SET NULL,
    date date NOT NULL,
    excerpt text,
    content text,
    author text,
    image text,
    tags jsonb,
    is_featured boolean DEFAULT false,
    is_published boolean DEFAULT true,
    views integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Announcements
CREATE TABLE announcements (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    content text NOT NULL,
    date date NOT NULL,
    type text,
    is_important boolean DEFAULT false,
    is_active boolean DEFAULT true,
    valid_until date,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- =====================================================
-- 7. ADMISSION TABLES
-- =====================================================

-- Admission Timeline
CREATE TABLE admission_timeline (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    wave integer NOT NULL,
    name text NOT NULL,
    period text NOT NULL,
    status text NOT NULL,
    discount text,
    quota integer,
    registered integer DEFAULT 0,
    start_date date,
    end_date date,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Admission Requirements
CREATE TABLE admission_requirements (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    type text NOT NULL,
    requirement text NOT NULL,
    order_index integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Admission Fees
CREATE TABLE admission_fees (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    category text NOT NULL,
    subcategory text,
    amount decimal(10,2) NOT NULL,
    note text,
    is_active boolean DEFAULT true,
    academic_year text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Admission Discounts
CREATE TABLE admission_discounts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    percentage decimal(5,2) NOT NULL,
    applies_to text NOT NULL,
    conditions text,
    is_active boolean DEFAULT true,
    valid_from date,
    valid_until date,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Registration Flow
CREATE TABLE registration_flow (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    step integer NOT NULL,
    title text NOT NULL,
    description text,
    duration text,
    requirements text,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Admission FAQ
CREATE TABLE admission_faq (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    question text NOT NULL,
    answer text NOT NULL,
    category text,
    order_index integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- =====================================================
-- 8. MEDIA TABLES
-- =====================================================

-- Photo Categories
CREATE TABLE photo_categories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    description text,
    total_photos integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Photos
CREATE TABLE photos (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    category_id uuid REFERENCES photo_categories(id) ON DELETE SET NULL,
    date date NOT NULL,
    image text NOT NULL,
    thumbnail text,
    description text,
    photographer text,
    tags jsonb,
    is_featured boolean DEFAULT false,
    is_active boolean DEFAULT true,
    views integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Videos
CREATE TABLE videos (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    category text NOT NULL,
    date date NOT NULL,
    thumbnail text NOT NULL,
    duration text,
    video text NOT NULL,
    description text,
    tags jsonb,
    views integer DEFAULT 0,
    is_featured boolean DEFAULT false,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Photo Albums
CREATE TABLE photo_albums (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text,
    date date NOT NULL,
    cover_image text,
    photo_count integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Album Photos (Many-to-Many)
CREATE TABLE album_photos (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    album_id uuid REFERENCES photo_albums(id) ON DELETE CASCADE,
    photo_id uuid REFERENCES photos(id) ON DELETE CASCADE,
    order_index integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now()
);

-- =====================================================
-- 9. HOMEPAGE TABLES
-- =====================================================

-- Hero Content
CREATE TABLE hero_content (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    tagline text,
    subtitle jsonb,
    description text,
    background_image text,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Hero Buttons
CREATE TABLE hero_buttons (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    hero_id uuid REFERENCES hero_content(id) ON DELETE CASCADE,
    text text NOT NULL,
    href text NOT NULL,
    variant text DEFAULT 'primary',
    order_index integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Quick Info
CREATE TABLE quick_info (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    info_text text NOT NULL,
    link text,
    link_text text,
    is_urgent boolean DEFAULT false,
    valid_until date,
    is_active boolean DEFAULT true,
    display_order integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Homepage Sections
CREATE TABLE homepage_sections (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    section_name text NOT NULL,
    title text,
    subtitle text,
    description text,
    is_enabled boolean DEFAULT true,
    display_order integer DEFAULT 0,
    background_image text,
    background_color text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Call to Action
CREATE TABLE call_to_action (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text,
    primary_button_text text,
    primary_button_href text,
    secondary_button_text text,
    secondary_button_href text,
    background_image text,
    page text,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- =====================================================
-- 10. SHARED TABLES
-- =====================================================

-- Missions
CREATE TABLE missions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text,
    icon text,
    order_index integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Navigation Menu
CREATE TABLE navigation_menu (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    href text NOT NULL,
    description text,
    icon text,
    page text,
    parent_id uuid REFERENCES navigation_menu(id) ON DELETE CASCADE,
    display_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Contact Departments
CREATE TABLE contact_departments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    department text NOT NULL,
    email text,
    phone text,
    whatsapp text,
    contact_person text,
    description text,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Emergency Contacts
CREATE TABLE emergency_contacts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    phone text NOT NULL,
    available text,
    description text,
    priority integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Form Configurations
CREATE TABLE form_configurations (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    form_name text NOT NULL,
    fields jsonb NOT NULL,
    success_message text,
    auto_reply boolean DEFAULT false,
    is_enabled boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Visitor Information
CREATE TABLE visitor_information (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    visiting_hours text,
    requirements jsonb,
    parking_info jsonb,
    contact_before_visit text,
    additional_notes text,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Global Tags System
CREATE TABLE tags (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL UNIQUE,
    color text,
    description text,
    usage_count integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- =====================================================
-- CREATE INDEXES FOR PERFORMANCE
-- =====================================================

-- Statistics indexes
CREATE INDEX idx_school_statistics_page ON school_statistics(page, display_order);
CREATE INDEX idx_school_statistics_active ON school_statistics(is_active);

-- Program related indexes
CREATE INDEX idx_program_subjects_program ON program_subjects(program_id, order_index);
CREATE INDEX idx_program_facilities_program ON program_facilities(program_id, order_index);
CREATE INDEX idx_program_advantages_program ON program_advantages(program_id, order_index);
CREATE INDEX idx_program_career_paths_program ON program_career_paths(program_id, order_index);
CREATE INDEX idx_program_certifications_program ON program_certifications(program_id, order_index);
CREATE INDEX idx_program_software_skills_program ON program_software_skills(program_id, order_index);

-- Extracurricular indexes
CREATE INDEX idx_extracurricular_activities_category ON extracurricular_activities(category_id, is_active);
CREATE INDEX idx_achievements_category_year ON achievements(category, year);

-- Features indexes
CREATE INDEX idx_school_features_page ON school_features(page, display_order);

-- Teachers indexes
CREATE INDEX idx_teachers_position ON teachers(position, is_active);
CREATE INDEX idx_teacher_certifications_teacher ON teacher_certifications(teacher_id);
CREATE INDEX idx_teacher_achievements_teacher ON teacher_achievements(teacher_id, year);

-- Testimonials indexes
CREATE INDEX idx_testimonials_featured ON testimonials(is_featured, is_active);

-- Facilities indexes
CREATE INDEX idx_facilities_category ON facilities(category, is_available);

-- News indexes
CREATE INDEX idx_news_slug ON news(slug);
CREATE INDEX idx_news_category_date ON news(category_id, date DESC);
CREATE INDEX idx_news_featured ON news(is_featured, is_published);
CREATE INDEX idx_news_published ON news(is_published, date DESC);

-- Announcements indexes
CREATE INDEX idx_announcements_active ON announcements(is_active, date DESC);
CREATE INDEX idx_announcements_important ON announcements(is_important, is_active);

-- Admission indexes
CREATE INDEX idx_admission_timeline_wave ON admission_timeline(wave, status);
CREATE INDEX idx_admission_requirements_type ON admission_requirements(type, order_index);
CREATE INDEX idx_admission_fees_category ON admission_fees(category, academic_year);

-- Media indexes
CREATE INDEX idx_photos_category_date ON photos(category_id, date DESC);
CREATE INDEX idx_photos_featured ON photos(is_featured, is_active);
CREATE INDEX idx_videos_category_date ON videos(category, date DESC);
CREATE INDEX idx_album_photos_album ON album_photos(album_id, order_index);

-- Homepage indexes
CREATE INDEX idx_hero_buttons_hero ON hero_buttons(hero_id, order_index);
CREATE INDEX idx_quick_info_active ON quick_info(is_active, display_order);
CREATE INDEX idx_homepage_sections_order ON homepage_sections(display_order);

-- Shared tables indexes
CREATE INDEX idx_missions_order ON missions(order_index, is_active);
CREATE INDEX idx_navigation_menu_parent ON navigation_menu(parent_id, display_order);
CREATE INDEX idx_tags_name ON tags(name);
CREATE INDEX idx_tags_usage ON tags(usage_count DESC);

-- =====================================================
-- CREATE UPDATED_AT TRIGGERS
-- =====================================================

-- Function to update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for all tables with updated_at column
CREATE TRIGGER update_school_profile_updated_at BEFORE UPDATE ON school_profile FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_school_statistics_updated_at BEFORE UPDATE ON school_statistics FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_info_updated_at BEFORE UPDATE ON contact_info FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_school_address_updated_at BEFORE UPDATE ON school_address FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_operational_hours_updated_at BEFORE UPDATE ON operational_hours FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_social_media_updated_at BEFORE UPDATE ON social_media FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_academic_curriculum_updated_at BEFORE UPDATE ON academic_curriculum FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_study_programs_updated_at BEFORE UPDATE ON study_programs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_program_subjects_updated_at BEFORE UPDATE ON program_subjects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_program_facilities_updated_at BEFORE UPDATE ON program_facilities FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_program_advantages_updated_at BEFORE UPDATE ON program_advantages FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_program_career_paths_updated_at BEFORE UPDATE ON program_career_paths FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_program_certifications_updated_at BEFORE UPDATE ON program_certifications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_program_software_skills_updated_at BEFORE UPDATE ON program_software_skills FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_extracurricular_categories_updated_at BEFORE UPDATE ON extracurricular_categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_extracurricular_activities_updated_at BEFORE UPDATE ON extracurricular_activities FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_achievements_updated_at BEFORE UPDATE ON achievements FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_school_features_updated_at BEFORE UPDATE ON school_features FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_teachers_updated_at BEFORE UPDATE ON teachers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_teacher_certifications_updated_at BEFORE UPDATE ON teacher_certifications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_teacher_achievements_updated_at BEFORE UPDATE ON teacher_achievements FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_facilities_updated_at BEFORE UPDATE ON facilities FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_infrastructures_updated_at BEFORE UPDATE ON infrastructures FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_categories_updated_at BEFORE UPDATE ON news_categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_announcements_updated_at BEFORE UPDATE ON announcements FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admission_timeline_updated_at BEFORE UPDATE ON admission_timeline FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admission_requirements_updated_at BEFORE UPDATE ON admission_requirements FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admission_fees_updated_at BEFORE UPDATE ON admission_fees FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admission_discounts_updated_at BEFORE UPDATE ON admission_discounts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_registration_flow_updated_at BEFORE UPDATE ON registration_flow FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admission_faq_updated_at BEFORE UPDATE ON admission_faq FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_photo_categories_updated_at BEFORE UPDATE ON photo_categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_photos_updated_at BEFORE UPDATE ON photos FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_videos_updated_at BEFORE UPDATE ON videos FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_photo_albums_updated_at BEFORE UPDATE ON photo_albums FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_hero_content_updated_at BEFORE UPDATE ON hero_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_hero_buttons_updated_at BEFORE UPDATE ON hero_buttons FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_quick_info_updated_at BEFORE UPDATE ON quick_info FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_homepage_sections_updated_at BEFORE UPDATE ON homepage_sections FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_call_to_action_updated_at BEFORE UPDATE ON call_to_action FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_missions_updated_at BEFORE UPDATE ON missions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_navigation_menu_updated_at BEFORE UPDATE ON navigation_menu FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_departments_updated_at BEFORE UPDATE ON contact_departments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_emergency_contacts_updated_at BEFORE UPDATE ON emergency_contacts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_form_configurations_updated_at BEFORE UPDATE ON form_configurations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_visitor_information_updated_at BEFORE UPDATE ON visitor_information FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_tags_updated_at BEFORE UPDATE ON tags FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- TABLE CREATION COMPLETE
-- =====================================================