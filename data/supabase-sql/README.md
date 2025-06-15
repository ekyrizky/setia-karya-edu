# SMK Setia Karya Database Setup for Supabase

This directory contains complete SQL scripts to set up a production-ready database for SMK Setia Karya website with CMS capabilities.

## 🚀 Quick Setup

Run these scripts in order in your Supabase SQL Editor:

1. **`01-create-tables.sql`** - Creates all database tables with proper constraints
2. **`02-enable-rls-policies.sql`** - Sets up Row Level Security for public/CMS access
3. **`03-insert-sample-data.sql`** - Inserts core sample data
4. **`04-insert-content-data.sql`** - Inserts content data (news, media, etc.)
5. **`05-user-management.sql`** - Sets up user roles and CMS permissions

## 📊 Database Features

### ✅ **Production Ready**
- **40+ Tables** with proper relationships
- **Comprehensive RLS policies** for security
- **Automatic timestamps** with triggers
- **Performance indexes** on key fields
- **Data validation** with constraints

### 🔐 **Security Features**
- **Row Level Security (RLS)** enabled on all tables
- **Role-based access control** (Admin, Editor, Viewer)
- **Activity logging** for all CMS actions
- **Public read access** for website content
- **Admin-only access** for sensitive operations

### 🛠️ **CMS Ready**
- **User management** with roles and permissions
- **Content moderation** workflows
- **Search functionality** across all content
- **Dashboard statistics** and analytics
- **Activity monitoring** and logging

## 👥 User Roles

### **Admin** 👑
- Full access to all data
- User management capabilities
- System configuration
- Activity monitoring

### **Editor** ✏️
- Create/edit news articles
- Manage photos and videos
- Update achievements
- Limited read access to other data

### **Viewer** 👀
- Read-only access to published content
- Cannot modify any data
- Perfect for stakeholders/reviewers

### **Public** 🌐
- Read access to published content only
- No authentication required
- Automatic filtering of inactive content

## 🗂️ Table Categories

### **Core Tables**
- `school_profile` - Basic school information
- `school_statistics` - Shared statistics across pages
- `contact_info` - Contact information
- `school_address` - Address and location
- `operational_hours` - School hours
- `social_media` - Social media accounts

### **Academic Tables**
- `study_programs` - TKRO, OTKP programs
- `program_subjects` - Subjects per program
- `program_facilities` - Facilities per program
- `program_advantages` - Program benefits
- `program_career_paths` - Career opportunities
- `program_certifications` - Available certifications

### **Content Tables**
- `news` - News articles with categories
- `announcements` - School announcements
- `photos` - Photo gallery with categories
- `videos` - Video content
- `photo_albums` - Photo collections

### **People Tables**
- `teachers` - Teachers and staff
- `teacher_certifications` - Teacher credentials
- `testimonials` - Testimonials and reviews

### **CMS Tables**
- `user_profiles` - CMS user management
- `activity_logs` - Action logging
- `form_configurations` - Dynamic forms

## 🔧 Key Features

### **Shared Data Normalization**
Statistics, features, and contact info are centralized:

```sql
-- Get homepage statistics
SELECT * FROM school_statistics WHERE page = 'home' ORDER BY display_order;

-- Get teacher page statistics  
SELECT * FROM school_statistics WHERE page = 'teacher' ORDER BY display_order;
```

### **Automatic View Tracking**
```sql
-- Views are automatically tracked for analytics
-- Special RLS policies allow anonymous view updates
```

### **Content Search**
```sql
-- Search across all content with permissions
SELECT * FROM search_all_content('robotika', ARRAY['news', 'photos']);
```

### **Activity Monitoring**
```sql
-- All CMS actions are automatically logged
SELECT * FROM activity_logs WHERE user_id = auth.uid() ORDER BY created_at DESC;
```

## 🚀 Setup Instructions

### 1. **Create Supabase Project**
- Go to [Supabase Dashboard](https://app.supabase.com)
- Create new project
- Note down your project URL and anon key

### 2. **Run SQL Scripts**
Execute in Supabase SQL Editor in this exact order:
```bash
01-create-tables.sql      # Tables and indexes
02-enable-rls-policies.sql # Security policies  
03-insert-sample-data.sql  # Core data
04-insert-content-data.sql # Content data
05-user-management.sql    # User roles and CMS
```

### 3. **Create Admin User**
1. Go to Authentication → Users in Supabase Dashboard
2. Click "Add user"
3. Email: `admin@smksetiakarya.sch.id`
4. Password: Generate strong password
5. User Metadata:
```json
{
  "role": "admin",
  "full_name": "Administrator"
}
```

### 4. **Update User Profile**
```sql
UPDATE user_profiles 
SET role = 'admin', full_name = 'Administrator'
WHERE email = 'admin@smksetiakarya.sch.id';
```

### 5. **Test Permissions**
- Login as admin → should have full access
- Test public access → should see published content only
- Create editor user → should have limited access

## 📈 Performance Optimizations

### **Indexes Created**
- Foreign key relationships
- Frequently queried fields
- Sort and filter columns
- Full-text search fields

### **Query Optimization**
```sql
-- Optimized queries with proper indexes
-- Page-specific statistics
-- Category-based filtering
-- Date-based sorting
```

### **Caching Strategy**
- Statistics updated via triggers
- View counts batched
- Frequent queries indexed

## 🔒 Security Best Practices

### **Implemented**
✅ Row Level Security on all tables  
✅ Role-based access control  
✅ Input validation and constraints  
✅ Activity logging and monitoring  
✅ Secure function execution  

### **Recommended**
- Enable 2FA for admin accounts
- Regular security audits
- Monitor activity logs
- Use strong passwords
- Regular backups

## 🛠️ Maintenance

### **Regular Tasks**
- Monitor activity logs
- Review user permissions
- Clean old activity logs
- Update statistics if needed
- Backup database regularly

### **Useful Queries**
```sql
-- Get dashboard statistics
SELECT get_cms_dashboard_stats();

-- Check user activities
SELECT * FROM activity_logs WHERE created_at > NOW() - INTERVAL '24 hours';

-- Find content needing moderation
SELECT * FROM news WHERE is_published = false;
```

## 🆘 Troubleshooting

### **Common Issues**

**RLS Blocking Queries?**
```sql
-- Check user role
SELECT get_user_role();

-- Verify permissions
SELECT can_user_perform_action('read');
```

**Missing Data?**
- Check `is_active` and `is_published` flags
- Verify RLS policies
- Confirm user permissions

**Performance Issues?**
- Check if indexes are being used
- Monitor query execution plans
- Consider adding specific indexes

## 📞 Support

For technical support:
- Check Supabase documentation
- Review activity logs for errors
- Test permissions with different user roles
- Verify RLS policies are working correctly

---

**🎉 You now have a complete, production-ready database for SMK Setia Karya website with full CMS capabilities!**