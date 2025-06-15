# Supabase Database Schema for SMK Setia Karya Website

This directory contains the complete normalized database schema designed for Supabase migration, addressing the data organization issues in the original project.

## 🏗️ Schema Structure

### Core Principles
- **Normalized data structure** - Eliminates duplication and ensures data consistency
- **Proper foreign key relationships** - Maintains data integrity
- **Shared data separation** - Statistics, features, and other reusable content in dedicated tables
- **Scalable design** - Easy to extend and maintain

## 📋 Table Categories

### 1. Core Tables (`01-core-tables.json`)
- `school_profile` - Basic school information
- `school_statistics` - **Shared statistics across multiple pages**
- `contact_info` - Main contact information
- `school_address` - Address and location data
- `operational_hours` - School operating hours
- `social_media` - Social media accounts

### 2. Academic Tables (`02-academic-tables.json`)
- `academic_curriculum` - Curriculum information
- `study_programs` - TKRO, OTKP programs
- `program_subjects` - Subjects per program
- `program_facilities` - Facilities per program
- `program_advantages` - Program benefits
- `program_career_paths` - Career opportunities
- `program_certifications` - Available certifications
- `program_software_skills` - Software skills taught

### 3. Extracurricular Tables (`03-extracurricular-tables.json`)
- `extracurricular_categories` - Activity categories
- `extracurricular_activities` - Individual activities
- `achievements` - School and student achievements
- `school_features` - **Shared feature highlights**

### 4. People Tables (`04-people-tables.json`)
- `teachers` - Teachers and staff
- `teacher_certifications` - Teacher certifications
- `teacher_achievements` - Teacher achievements
- `testimonials` - Testimonials from stakeholders

### 5. Facilities Tables (`05-facilities-tables.json`)
- `facilities` - School facilities
- `infrastructures` - Infrastructure systems

### 6. Content Tables (`06-content-tables.json`)
- `news_categories` - News categories
- `news` - News articles
- `announcements` - School announcements

### 7. Admission Tables (`07-admission-tables.json`)
- `admission_timeline` - PPDB timeline
- `admission_requirements` - Requirements
- `admission_fees` - Fee structure
- `admission_discounts` - Available discounts
- `registration_flow` - Registration steps
- `admission_faq` - FAQ

### 8. Media Tables (`08-media-tables.json`)
- `photo_categories` - Photo categories
- `photos` - Photo gallery
- `videos` - Video gallery
- `photo_albums` - Photo albums
- `album_photos` - Album-photo relationships

### 9. Homepage Tables (`09-homepage-tables.json`)
- `hero_content` - Hero section content
- `hero_buttons` - Hero CTA buttons
- `quick_info` - Quick info banners
- `homepage_sections` - Dynamic sections
- `call_to_action` - CTA sections

### 10. Shared Tables (`10-shared-tables.json`)
- `missions` - School missions
- `navigation_menu` - Dynamic navigation
- `contact_departments` - Department contacts
- `emergency_contacts` - Emergency contacts
- `form_configurations` - Dynamic forms
- `visitor_information` - Visitor info
- `tags` - Global tagging system

## 🔄 Key Relationships

### Statistics Usage
The `school_statistics` table is used across multiple pages:
- Homepage: Student count, employment rate, etc.
- Teacher page: Staff statistics
- Facility page: Facility counts
- Academic page: Program statistics

Filter by `page` column to get page-specific statistics.

### Shared Features
The `school_features` table contains feature highlights used on:
- Homepage
- About page
- Academic page
- Extracurricular page

Filter by `page` column to get page-specific features.

### Foreign Key Relationships
- Programs → Subjects, Facilities, Advantages, etc.
- Categories → Activities
- Albums → Photos (many-to-many)
- Teachers → Certifications, Achievements

## 🚀 Migration Benefits

1. **Eliminates Data Duplication**
   - Statistics appear once, used everywhere
   - Features shared across pages
   - Contact info centralized

2. **Maintains Data Integrity**
   - Foreign key constraints
   - Consistent data types
   - Proper indexing

3. **Improves Performance**
   - Optimized queries
   - Proper indexes
   - Normalized structure

4. **Enhances Maintainability**
   - Single source of truth
   - Easy updates
   - Clear relationships

## 📝 Implementation Notes

1. **UUID Primary Keys** - Better for distributed systems
2. **Timestamps** - Track creation and updates
3. **Soft Deletes** - Use `is_active` flags instead of hard deletes
4. **JSONB Fields** - For flexible array/object data
5. **Proper Indexing** - On commonly queried fields

## 🔧 Usage Examples

### Get Homepage Statistics
```sql
SELECT * FROM school_statistics 
WHERE page = 'home' 
ORDER BY display_order;
```

### Get TKRO Program Details
```sql
SELECT 
  p.*,
  ps.name as subject_name,
  pf.name as facility_name
FROM study_programs p
LEFT JOIN program_subjects ps ON p.id = ps.program_id
LEFT JOIN program_facilities pf ON p.id = pf.program_id
WHERE p.code = 'TKRO';
```

### Get Featured News with Categories
```sql
SELECT 
  n.*,
  nc.name as category_name
FROM news n
JOIN news_categories nc ON n.category_id = nc.id
WHERE n.is_featured = true
ORDER BY n.date DESC;
```

This schema provides a solid foundation for the SMK Setia Karya website with proper data organization and relationships.