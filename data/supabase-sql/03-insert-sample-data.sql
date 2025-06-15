-- =====================================================
-- SAMPLE DATA INSERTION
-- Complete sample data for SMK Setia Karya website
-- =====================================================

-- =====================================================
-- 1. CORE DATA
-- =====================================================

-- School Profile
INSERT INTO school_profile (
  name, short_name, logo, tagline, welcome_message, description, 
  established_year, accreditation, npsn, school_type, vision, motto, history
) VALUES (
  'SMK Setia Karya',
  'Setia Karya',
  '/images/logo.png',
  'Cerdas • Berkarakter • Berprestasi',
  'Selamat Datang di Website Resmi SMK Setia Karya',
  'SMK Setia Karya - Sekolah Menengah Kejuruan terbaik dengan kurikulum merdeka, fasilitas modern, dan pendidikan karakter berbasis nilai-nilai Pancasila',
  1995,
  'A',
  '20228461',
  'Swasta',
  'Menjadi SMK unggul yang menghasilkan lulusan berkualitas, berkarakter, dan siap bersaing di dunia kerja maupun kewirausahaan',
  'Cerdas, Berkarakter, Berprestasi',
  'SMK Setia Karya didirikan pada tahun 1995 dengan visi menjadi lembaga pendidikan kejuruan yang unggul. Berawal dari 2 program keahlian, kini telah berkembang menjadi sekolah dengan berbagai program keahlian yang sesuai dengan kebutuhan industri modern.'
);

-- Contact Information
INSERT INTO contact_info (
  phone, whatsapp, whatsapp_message, fax, email, website
) VALUES (
  '(021) 7654321',
  '081234567890',
  'Halo, saya ingin mengetahui informasi lebih lanjut tentang SMK Setia Karya',
  '(021) 7654322',
  'info@smksetiakarya.sch.id',
  'https://smksetiakarya.sch.id'
);

-- School Address
INSERT INTO school_address (
  full_address, street, sub_district, district, city, state, postal_code, 
  country, latitude, longitude, zoom_level
) VALUES (
  'Jl. Pendidikan No. 123, Abadijaya, Sukmajaya, Depok 12345',
  'Jl. Pendidikan No. 123',
  'Abadijaya',
  'Sukmajaya',
  'Depok',
  'Jawa Barat',
  '12345',
  'Indonesia',
  -6.2088,
  106.8456,
  15
);

-- Operational Hours
INSERT INTO operational_hours (day_of_week, opening_time, closing_time, is_closed, note) VALUES
('Senin', '07:00', '16:00', false, 'Kegiatan pembelajaran normal'),
('Selasa', '07:00', '16:00', false, 'Kegiatan pembelajaran normal'),
('Rabu', '07:00', '16:00', false, 'Kegiatan pembelajaran normal'),
('Kamis', '07:00', '16:00', false, 'Kegiatan pembelajaran normal'),
('Jumat', '07:00', '15:00', false, 'Pulang lebih awal untuk sholat Jumat'),
('Sabtu', '07:00', '12:00', false, 'Kegiatan ekstrakurikuler dan konsultasi'),
('Minggu', null, null, true, 'Libur mingguan');

-- Social Media
INSERT INTO social_media (platform, url, username, is_active, followers, display_order) VALUES
('Facebook', 'https://facebook.com/smksetiakarya', '@smksetiakarya', true, 5420, 1),
('Instagram', 'https://instagram.com/smksetiakarya', '@smksetiakarya', true, 8930, 2),
('YouTube', 'https://youtube.com/@smksetiakarya', '@smksetiakarya', true, 2150, 3),
('TikTok', 'https://tiktok.com/@smksetiakarya', '@smksetiakarya', true, 12400, 4),
('Twitter', 'https://twitter.com/smksetiakarya', '@smksetiakarya', false, 890, 5);

-- School Statistics
INSERT INTO school_statistics (label, value, icon, page, category, description, display_order) VALUES
('Siswa Aktif', '650+', 'users', 'home', 'student', 'Siswa aktif dari berbagai daerah', 1),
('Tingkat Kelulusan', '98%', 'graduation-cap', 'home', 'academic', 'Tingkat kelulusan 3 tahun terakhir', 2),
('Lulusan Terserap Kerja', '95%', 'briefcase', 'home', 'career', 'Lulusan langsung bekerja atau wirausaha', 3),
('Mitra Industri', '50+', 'handshake', 'home', 'partnership', 'Perusahaan mitra untuk magang dan kerja', 4),
('Total Guru & Staff', '85', 'users', 'teacher', 'staff', 'Total tenaga pendidik dan kependidikan', 1),
('Guru S2/S3', '65%', 'graduation-cap', 'teacher', 'education', 'Persentase guru berpendidikan S2/S3', 2),
('Guru Bersertifikat', '100%', 'award', 'teacher', 'certification', 'Guru yang memiliki sertifikat pendidik', 3),
('Rasio Guru:Siswa', '1:20', 'users', 'teacher', 'ratio', 'Rasio ideal guru dan siswa', 4),
('Total Ruang Kelas', '24', 'home', 'facility', 'classroom', 'Ruang kelas yang tersedia', 1),
('Laboratorium', '12', 'flask', 'facility', 'laboratory', 'Laboratorium untuk praktikum', 2),
('Workshop', '8', 'wrench', 'facility', 'workshop', 'Workshop untuk praktik kejuruan', 3),
('Lapangan Olahraga', '3', 'target', 'facility', 'sports', 'Fasilitas olahraga', 4);

-- =====================================================
-- 2. ACADEMIC DATA
-- =====================================================

-- Academic Curriculum
INSERT INTO academic_curriculum (title, description, features, is_active) VALUES (
  'Kurikulum Merdeka Belajar',
  'Kurikulum yang fleksibel dan berpusat pada siswa untuk mengembangkan potensi dan karakter',
  '["Pembelajaran berbasis proyek", "Kolaborasi dengan industri", "Pengembangan soft skills", "Sertifikasi kompetensi"]',
  true
);

-- Study Programs
INSERT INTO study_programs (
  code, name, short_name, description, image, href, 
  active_students, quota_per_year, duration_years, employment_rate, is_active, display_order
) VALUES
('TKRO', 'Teknik Kendaraan Ringan Otomotif', 'TKRO', 
 'Program keahlian yang mempersiapkan teknisi otomotif profesional dengan standar industri terkini',
 '/images/programs/tkro.jpg', '/akademik/tkro', 240, 80, 3, '98%', true, 1),
('OTKP', 'Otomatisasi dan Tata Kelola Perkantoran', 'OTKP',
 'Program keahlian administrasi perkantoran modern dengan teknologi terdepan',
 '/images/programs/otkp.jpg', '/akademik/otkp', 180, 60, 3, '96%', true, 2);

-- Get program IDs for foreign key references
DO $$
DECLARE
    tkro_id uuid;
    otkp_id uuid;
BEGIN
    SELECT id INTO tkro_id FROM study_programs WHERE code = 'TKRO';
    SELECT id INTO otkp_id FROM study_programs WHERE code = 'OTKP';

    -- Program Subjects for TKRO
    INSERT INTO program_subjects (program_id, name, description, order_index) VALUES
    (tkro_id, 'Teknologi Dasar Otomotif', 'Pengenalan dasar-dasar teknologi otomotif', 1),
    (tkro_id, 'Pemeliharaan Mesin Kendaraan Ringan', 'Teknik perawatan dan perbaikan mesin kendaraan', 2),
    (tkro_id, 'Pemeliharaan Sasis dan Pemindah Tenaga', 'Sistem transmisi dan kemudi kendaraan', 3),
    (tkro_id, 'Pemeliharaan Kelistrikan Kendaraan Ringan', 'Sistem kelistrikan dan elektronik kendaraan', 4);

    -- Program Subjects for OTKP
    INSERT INTO program_subjects (program_id, name, description, order_index) VALUES
    (otkp_id, 'Teknologi Perkantoran', 'Penguasaan teknologi modern dalam administrasi', 1),
    (otkp_id, 'Korespondensi', 'Teknik komunikasi tertulis dan digital', 2),
    (otkp_id, 'Kearsipan', 'Sistem pengelolaan dokumen dan arsip', 3),
    (otkp_id, 'Administrasi Keuangan', 'Pengelolaan keuangan dan akuntansi dasar', 4);

    -- Program Facilities for TKRO
    INSERT INTO program_facilities (program_id, name, description, image_url, order_index) VALUES
    (tkro_id, 'Workshop Otomotif', 'Bengkel praktik dengan peralatan modern', '/images/facilities/workshop-otomotif.jpg', 1),
    (tkro_id, 'Engine Stand Training Unit', 'Unit pelatihan mesin kendaraan', '/images/facilities/engine-stand.jpg', 2);

    -- Program Facilities for OTKP
    INSERT INTO program_facilities (program_id, name, description, image_url, order_index) VALUES
    (otkp_id, 'Lab Komputer', 'Laboratorium komputer dengan software terkini', '/images/facilities/lab-komputer.jpg', 1),
    (otkp_id, 'Ruang Praktik Perkantoran', 'Simulasi kantor modern', '/images/facilities/praktik-kantor.jpg', 2);

    -- Program Advantages for TKRO
    INSERT INTO program_advantages (program_id, advantage, order_index) VALUES
    (tkro_id, 'Kerjasama dengan dealer resmi Honda, Toyota, Suzuki', 1),
    (tkro_id, 'Sertifikasi kompetensi dari LSP Otomotif', 2),
    (tkro_id, 'Peralatan praktik sesuai standar industri', 3);

    -- Program Advantages for OTKP
    INSERT INTO program_advantages (program_id, advantage, order_index) VALUES
    (otkp_id, 'Magang di perusahaan multinasional', 1),
    (otkp_id, 'Sertifikasi Microsoft Office Specialist', 2),
    (otkp_id, 'Pelatihan customer service excellence', 3);

    -- Program Career Paths for TKRO
    INSERT INTO program_career_paths (program_id, career_path, order_index) VALUES
    (tkro_id, 'Teknisi Otomotif', 1),
    (tkro_id, 'Mekanik Kendaraan', 2),
    (tkro_id, 'Supervisor Workshop', 3),
    (tkro_id, 'Wirausaha Bengkel', 4);

    -- Program Career Paths for OTKP
    INSERT INTO program_career_paths (program_id, career_path, order_index) VALUES
    (otkp_id, 'Staff Administrasi', 1),
    (otkp_id, 'Sekretaris', 2),
    (otkp_id, 'Customer Service', 3),
    (otkp_id, 'Event Organizer', 4);

    -- Program Certifications for TKRO
    INSERT INTO program_certifications (program_id, certification, order_index) VALUES
    (tkro_id, 'Sertifikat Kompetensi LSP Otomotif', 1),
    (tkro_id, 'Honda Technical Education Program', 2);

    -- Program Certifications for OTKP
    INSERT INTO program_certifications (program_id, certification, order_index) VALUES
    (otkp_id, 'Microsoft Office Specialist', 1),
    (otkp_id, 'Sertifikat Kompetensi Administrasi', 2);

    -- Program Software Skills for TKRO
    INSERT INTO program_software_skills (program_id, skill, order_index) VALUES
    (tkro_id, 'Automotive Diagnostic Software', 1),
    (tkro_id, 'AutoCAD Mechanical', 2);

    -- Program Software Skills for OTKP
    INSERT INTO program_software_skills (program_id, skill, order_index) VALUES
    (otkp_id, 'Microsoft Office Suite', 1),
    (otkp_id, 'Sistem Informasi Manajemen', 2);
END $$;

-- =====================================================
-- 3. EXTRACURRICULAR DATA
-- =====================================================

-- Extracurricular Categories
INSERT INTO extracurricular_categories (name, icon, description, display_order) VALUES
('Olahraga', 'trophy', 'Mengembangkan kebugaran jasmani dan sportivitas', 1),
('Seni & Budaya', 'music', 'Mengembangkan kreativitas dan apresiasi seni budaya', 2),
('Teknologi & Sains', 'cpu', 'Mengembangkan kemampuan teknologi dan penelitian', 3),
('Keagamaan & Sosial', 'heart', 'Mengembangkan spiritualitas dan kepedulian sosial', 4),
('Kepemimpinan', 'users', 'Mengembangkan jiwa kepemimpinan dan organisasi', 5);

-- Extracurricular Activities
DO $$
DECLARE
    olahraga_id uuid;
    seni_id uuid;
    teknologi_id uuid;
    keagamaan_id uuid;
    kepemimpinan_id uuid;
BEGIN
    SELECT id INTO olahraga_id FROM extracurricular_categories WHERE name = 'Olahraga';
    SELECT id INTO seni_id FROM extracurricular_categories WHERE name = 'Seni & Budaya';
    SELECT id INTO teknologi_id FROM extracurricular_categories WHERE name = 'Teknologi & Sains';
    SELECT id INTO keagamaan_id FROM extracurricular_categories WHERE name = 'Keagamaan & Sosial';
    SELECT id INTO kepemimpinan_id FROM extracurricular_categories WHERE name = 'Kepemimpinan';

    -- Olahraga Activities
    INSERT INTO extracurricular_activities (category_id, name, schedule, achievements, is_active) VALUES
    (olahraga_id, 'Sepak Bola', 'Selasa & Kamis, 15:00-17:00', 'Juara 2 Piala Walikota 2023', true),
    (olahraga_id, 'Bola Voli', 'Senin & Rabu, 15:00-17:00', 'Juara 1 Liga Pelajar Depok 2023', true),
    (olahraga_id, 'Bulu Tangkis', 'Sabtu, 08:00-10:00', 'Juara 3 Kejuaraan Antar SMK 2023', true),
    (olahraga_id, 'Futsal', 'Jumat, 15:00-17:00', 'Semifinalis Piala Gubernur 2023', true);

    -- Seni & Budaya Activities
    INSERT INTO extracurricular_activities (category_id, name, schedule, achievements, is_active) VALUES
    (seni_id, 'Band', 'Rabu & Jumat, 15:00-17:00', 'Juara 1 Festival Band Pelajar 2023', true),
    (seni_id, 'Tari Tradisional', 'Selasa & Kamis, 15:00-17:00', 'Juara 2 Lomba Tari Nusantara 2023', true),
    (seni_id, 'Teater', 'Sabtu, 09:00-12:00', 'Juara 3 Festival Teater Remaja 2023', true),
    (seni_id, 'Paduan Suara', 'Senin & Rabu, 15:00-17:00', 'Juara 1 Lomba Paduan Suara Kota 2023', true);

    -- Teknologi & Sains Activities
    INSERT INTO extracurricular_activities (category_id, name, schedule, achievements, is_active) VALUES
    (teknologi_id, 'Robotika', 'Selasa & Kamis, 15:00-17:00', 'Juara 1 Kontes Robot Indonesia 2023', true),
    (teknologi_id, 'Programming Club', 'Senin & Rabu, 15:00-17:00', 'Finalis Hackathon Nasional 2023', true),
    (teknologi_id, 'Karya Ilmiah Remaja', 'Sabtu, 08:00-11:00', 'Juara 2 LKIR Tingkat Provinsi 2023', true),
    (teknologi_id, 'Multimedia', 'Jumat, 15:00-17:00', 'Juara 3 Lomba Video Kreatif 2023', true);

    -- Keagamaan & Sosial Activities
    INSERT INTO extracurricular_activities (category_id, name, schedule, achievements, is_active) VALUES
    (keagamaan_id, 'Rohis (Rohani Islam)', 'Jumat, 11:30-12:30', 'Juara 1 MTQ Pelajar Tingkat Kota 2023', true),
    (keagamaan_id, 'PMR (Palang Merah Remaja)', 'Sabtu, 08:00-11:00', 'Juara 2 Lomba PMR Se-Jabodetabek 2023', true),
    (keagamaan_id, 'Pramuka', 'Sabtu, 14:00-17:00', 'Juara 1 Jambore Daerah 2023', true),
    (keagamaan_id, 'Pecinta Alam', 'Minggu, 06:00-12:00', 'Juara 3 Lomba Hiking Se-Jabar 2023', true);

    -- Kepemimpinan Activities
    INSERT INTO extracurricular_activities (category_id, name, schedule, achievements, is_active) VALUES
    (kepemimpinan_id, 'OSIS', 'Setiap hari, sesuai kebutuhan', 'Sekolah Adiwiyata Tingkat Nasional 2023', true),
    (kepemimpinan_id, 'MPK (Majelis Perwakilan Kelas)', 'Kamis, 15:00-16:00', 'Best Practice Student Government 2023', true),
    (kepemimpinan_id, 'PKS (Patroli Keamanan Sekolah)', 'Senin-Jumat, 06:30-07:30', 'Sekolah Ramah Anak Tingkat Provinsi 2023', true),
    (kepemimpinan_id, 'English Club', 'Rabu & Jumat, 15:00-17:00', 'Juara 2 English Speech Contest 2023', true);
END $$;

-- Achievements
INSERT INTO achievements (name, category, year, organizer, level, position, description) VALUES
('Kontes Robot Indonesia', 'Teknologi', '2023', 'Kemendikbudristek', 'Nasional', 'Juara 1', 'Prestasi terbaik tim robotika dalam kompetisi nasional'),
('Festival Band Pelajar', 'Seni', '2023', 'Dinas Pendidikan Provinsi', 'Provinsi', 'Juara 1', 'Menampilkan kreativitas musik siswa'),
('Liga Pelajar Bola Voli', 'Olahraga', '2023', 'KONI Kota Depok', 'Kota', 'Juara 1', 'Prestasi membanggakan tim bola voli'),
('Jambore Daerah Pramuka', 'Kepramukaan', '2023', 'Kwarda Jawa Barat', 'Provinsi', 'Juara 1', 'Kegiatan kepramukaan tingkat provinsi');

-- School Features (Shared across pages)
INSERT INTO school_features (title, description, icon, page, display_order, is_active) VALUES
('Kurikulum Merdeka', 'Implementasi kurikulum merdeka yang fleksibel dan berpusat pada siswa', 'book-open', 'home', 1, true),
('Fasilitas Modern', 'Workshop, laboratorium, dan ruang kelas dengan teknologi terkini', 'settings', 'home', 2, true),
('Kemitraan Industri', 'Kerjasama dengan 50+ perusahaan untuk magang dan penempatan kerja', 'users-2', 'home', 3, true),
('Sertifikasi Kompetensi', 'Program sertifikasi profesi yang diakui industri', 'award', 'home', 4, true),
('Prestasi Tingkat Nasional', 'Berbagai prestasi dalam kompetisi tingkat nasional', 'trophy', 'extracurricular', 1, true),
('Pengembangan Soft Skills', 'Melatih kepemimpinan, kerjasama, dan komunikasi', 'users', 'extracurricular', 2, true),
('Pembinaan Karakter', 'Membentuk karakter positif dan nilai-nilai luhur', 'heart', 'extracurricular', 3, true),
('Persiapan Karir', 'Mengasah kemampuan untuk dunia kerja', 'briefcase', 'extracurricular', 4, true);

-- =====================================================
-- 4. PEOPLE DATA
-- =====================================================

-- Teachers and Staff
INSERT INTO teachers (
  name, position, education, image_url, email, phone, experience_years, 
  specialization, quote, is_active, employee_type
) VALUES
('Drs. H. Yusup, M.Pd.', 'Kepala Sekolah', 'S3 Administrasi Pendidikan - UNJ', 
 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300&h=300&fit=crop&crop=face',
 'kepsek@smksetiakarya.sch.id', '(021) 7654321', 25, 'Manajemen Pendidikan',
 'Pendidikan bukan hanya tentang transfer ilmu, tetapi juga pembentukan karakter yang akan membawa perubahan positif bagi bangsa. Di SMK Setia Karya, kami berkomitmen membentuk pemimpin masa depan yang berintegritas tinggi.',
 true, 'principal'),

('Dra. Sri Wahyuni, M.M.', 'Wakil Kepala Sekolah Bidang Kurikulum', 'S2 Manajemen Pendidikan - UI',
 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face',
 'wakakur@smksetiakarya.sch.id', '(021) 7654323', 20, 'Kurikulum & Pembelajaran',
 null, true, 'leadership'),

('Ahmad Fauzi, S.Pd., M.Pd.', 'Wakil Kepala Sekolah Bidang Kesiswaan', 'S2 Manajemen Pendidikan - UNY',
 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop&crop=face',
 'wakasis@smksetiakarya.sch.id', '(021) 7654324', 18, 'Manajemen Kesiswaan',
 null, true, 'leadership'),

('Ir. Hendra Kusuma, M.T.', 'Wakil Kepala Sekolah Bidang Sarana Prasarana', 'S2 Teknik Sipil - ITB',
 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
 'wakasarpras@smksetiakarya.sch.id', '(021) 7654325', 22, 'Manajemen Sarana Prasarana',
 null, true, 'leadership'),

('Dr. Siti Nurhaliza, M.Si.', 'Guru Matematika', 'S3 Pendidikan Matematika - UPI',
 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
 'siti.nurhaliza@smksetiakarya.sch.id', '(021) 7654326', 15, 'Matematika & Statistika',
 null, true, 'teacher'),

('Bambang Wijaya, S.T., M.T.', 'Guru Produktif TKRO', 'S2 Teknik Mesin - UI',
 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
 'bambang.wijaya@smksetiakarya.sch.id', '(021) 7654327', 12, 'Teknik Otomotif',
 null, true, 'teacher'),

('Rina Kusumawati, S.E., M.M.', 'Guru Produktif OTKP', 'S2 Manajemen - UGM',
 'https://images.unsplash.com/photo-1494790108755-2616b612b8e5?w=300&h=300&fit=crop&crop=face',
 'rina.kusumawati@smksetiakarya.sch.id', '(021) 7654328', 10, 'Administrasi Perkantoran',
 null, true, 'teacher'),

('Diana Sari, S.Pd., M.Pd.', 'Guru Bahasa Inggris', 'S2 Pendidikan Bahasa Inggris - UNJ',
 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
 'diana.sari@smksetiakarya.sch.id', '(021) 7654329', 8, 'Bahasa Inggris Komunikatif',
 null, true, 'teacher'),

('Dr. Agus Pratama, M.Si.', 'Guru IPA', 'S3 Fisika - ITB',
 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
 'agus.pratama@smksetiakarya.sch.id', '(021) 7654330', 20, 'Fisika Terapan',
 null, true, 'teacher'),

('Novi Andriani, S.E.', 'Kepala Tata Usaha', 'S1 Ekonomi - UPN',
 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
 'novi.andriani@smksetiakarya.sch.id', '(021) 7654331', 15, 'Administrasi Sekolah',
 null, true, 'staff'),

('Sari Indah, S.I.Pust.', 'Kepala Perpustakaan', 'S1 Ilmu Perpustakaan - UNPAD',
 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
 'sari.indah@smksetiakarya.sch.id', '(021) 7654332', 12, 'Manajemen Perpustakaan Digital',
 null, true, 'staff'),

('Andi Kurniawan, S.T.', 'Laboran Komputer', 'S1 Teknik Informatika - Binus',
 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
 'andi.kurniawan@smksetiakarya.sch.id', '(021) 7654333', 7, 'Teknologi Informasi',
 null, true, 'staff');

-- Testimonials
INSERT INTO testimonials (name, role, content, image, rating, category, is_featured, is_active) VALUES
('Drs. H. Yusup, M.Pd.', 'Kepala Sekolah', 
 'SMK Setia Karya berkomitmen mencetak lulusan yang tidak hanya kompeten secara teknis, tetapi juga berkarakter kuat dan siap menghadapi tantangan dunia kerja modern.',
 '/images/testimonials/kepala-sekolah.jpg', 5, 'leadership', true, true),

('Ahmad Rizki', 'Alumni 2023 - Teknisi Honda',
 'Pendidikan di SMK Setia Karya sangat membantu saya dalam berkarir. Ilmu yang didapat sangat aplikatif dan sesuai dengan kebutuhan industri.',
 '/images/testimonials/alumni-1.jpg', 5, 'alumni', true, true),

('Sari Indah', 'Alumni 2022 - Admin Manager',
 'Program OTKP memberikan bekal yang sangat baik. Sertifikasi Microsoft Office yang saya dapatkan membantu saya meraih posisi yang diinginkan.',
 '/images/testimonials/alumni-2.jpg', 5, 'alumni', true, true);

-- =====================================================
-- 5. FACILITIES DATA
-- =====================================================

-- Facilities
INSERT INTO facilities (category, name, description, capacity, total, features, image, is_available) VALUES
('Ruang Kelas', 'Ruang Kelas Ber-AC', 'Ruang kelas yang nyaman dengan fasilitas AC, proyektor, dan sound system', 
 '32 siswa', '24 ruang', '["Air Conditioner", "Proyektor LCD", "Sound System", "Whiteboard Digital", "WiFi Coverage"]',
 '/images/facilities/ruang-kelas.jpg', true),

('Laboratorium', 'Laboratorium Komputer', 'Lab komputer dengan perangkat terkini untuk pembelajaran teknologi informasi',
 '40 unit komputer', '3 laboratorium', '["PC Intel Core i5 Gen 12", "Monitor LED 21 inch", "Software Original", "Internet High Speed", "Server Pembelajaran"]',
 '/images/facilities/lab-komputer.jpg', true),

('Workshop', 'Workshop Otomotif', 'Workshop lengkap untuk praktik teknik kendaraan ringan otomotif',
 '20 siswa', '2 workshop', '["Engine Stand Training Unit", "Diagnostic Tools", "Lift Kendaraan Hidrolik", "Tool Set Lengkap", "Parts Storage System"]',
 '/images/facilities/workshop-otomotif.jpg', true),

('Laboratorium', 'Lab Bahasa', 'Laboratorium bahasa modern untuk pembelajaran komunikasi',
 '36 booth', '2 laboratorium', '["Digital Language Learning System", "Individual Booth", "Wireless Headset", "Recording System", "Multimedia Content"]',
 '/images/facilities/lab-bahasa.jpg', true),

('Perpustakaan', 'Perpustakaan Digital', 'Perpustakaan modern dengan koleksi buku fisik dan digital',
 '100 pengunjung', '1 perpustakaan', '["15.000+ Buku Koleksi", "E-Library Access", "Reading Corner", "Discussion Room", "Multimedia Station"]',
 '/images/facilities/perpustakaan.jpg', true),

('Olahraga', 'Lapangan Basket/Voli', 'Lapangan outdoor untuk kegiatan olahraga basket dan bola voli',
 '200 penonton', '2 lapangan', '["Standar Kompetisi", "Lighting System", "Tribun Penonton", "Sound System", "Scoreboard Digital"]',
 '/images/facilities/lapangan-basket.jpg', true),

('Ibadah', 'Masjid Al-Ikhlas', 'Masjid sekolah untuk kegiatan ibadah dan rohani',
 '300 jamaah', '1 masjid', '["Sound System", "AC Central", "Tempat Wudhu", "Perpustakaan Islam", "Ruang Diskusi"]',
 '/images/facilities/masjid.jpg', true),

('Kantin', 'Kantin Sekolah', 'Kantin dengan beragam menu makanan sehat dan bergizi',
 '150 pengunjung', '1 kantin', '["Food Court Modern", "Hygiene Standard", "Cashless Payment", "Outdoor Seating", "Nutrition Program"]',
 '/images/facilities/kantin.jpg', true);

-- Infrastructures
INSERT INTO infrastructures (name, description, details, icon, status) VALUES
('Jaringan Internet High Speed', 'Koneksi internet fiber optic untuk seluruh area sekolah',
 'Bandwidth 100 Mbps dengan backup connection, WiFi coverage 100%', 'wifi', 'operational'),

('Sistem Keamanan CCTV', 'Sistem keamanan 24 jam dengan monitoring CCTV',
 '50+ CCTV camera, recording system, access control', 'shield', 'operational'),

('Sistem Informasi Akademik', 'Platform digital untuk manajemen akademik',
 'LMS, e-learning platform, student portal, parent portal', 'database', 'operational'),

('Sistem Audio Visual', 'Sistem audio visual terintegrasi di seluruh ruangan',
 'Digital sound system, projector installation, video conferencing', 'volume-2', 'operational'),

('Parking Area', 'Area parkir luas untuk siswa, guru, dan tamu',
 'Capacity 200+ vehicles, security guard, organized layout', 'car', 'operational'),

('Green Environment', 'Lingkungan hijau dan ramah lingkungan',
 'Taman sekolah, vertical garden, eco-friendly program', 'leaf', 'operational');

-- =====================================================
-- Insert more data in next part due to length...
-- =====================================================