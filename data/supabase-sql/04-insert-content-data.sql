-- =====================================================
-- CONTENT DATA INSERTION (Part 2)
-- News, Media, Admission, and Homepage content
-- =====================================================

-- =====================================================
-- 6. CONTENT DATA
-- =====================================================

-- News Categories
INSERT INTO news_categories (name, description, color, is_active) VALUES
('Prestasi', 'Berita tentang prestasi siswa dan sekolah', '#FFD700', true),
('Kegiatan Sekolah', 'Informasi kegiatan dan acara sekolah', '#4CAF50', true),
('Akademik', 'Berita terkait kegiatan akademik', '#2196F3', true),
('Kemitraan', 'Berita kerjasama dengan industri', '#FF9800', true),
('Pengumuman', 'Pengumuman resmi sekolah', '#9C27B0', true);

-- Get category IDs for foreign key references
DO $$
DECLARE
    prestasi_cat_id uuid;
    kegiatan_cat_id uuid;
    akademik_cat_id uuid;
    kemitraan_cat_id uuid;
    pengumuman_cat_id uuid;
BEGIN
    SELECT id INTO prestasi_cat_id FROM news_categories WHERE name = 'Prestasi';
    SELECT id INTO kegiatan_cat_id FROM news_categories WHERE name = 'Kegiatan Sekolah';
    SELECT id INTO akademik_cat_id FROM news_categories WHERE name = 'Akademik';
    SELECT id INTO kemitraan_cat_id FROM news_categories WHERE name = 'Kemitraan';
    SELECT id INTO pengumuman_cat_id FROM news_categories WHERE name = 'Pengumuman';

    -- News Articles
    INSERT INTO news (slug, title, category_id, date, excerpt, content, author, image, tags, is_featured, is_published) VALUES
    ('juara-1-kontes-robot-indonesia-2024', 'Tim Robotika SMK Setia Karya Raih Juara 1 Kontes Robot Indonesia 2024', 
     prestasi_cat_id, '2024-03-15',
     'Tim robotika SMK Setia Karya berhasil meraih juara 1 dalam Kontes Robot Indonesia 2024 kategori robot pemadam api dengan inovasi teknologi terdepan.',
     'Tim robotika SMK Setia Karya kembali mengukir prestasi membanggakan dengan meraih juara 1 dalam Kontes Robot Indonesia (KRI) 2024 kategori robot pemadam api. Kompetisi yang diselenggarakan oleh Kemendikbudristek ini diikuti oleh lebih dari 200 tim dari seluruh Indonesia.

Tim yang terdiri dari Ahmad Rizki (XII TKRO), Sari Indah (XII OTKP), dan Budi Santoso (XI TKRO) berhasil menciptakan robot inovatif dengan kemampuan navigasi otomatis dan sistem pemadam api yang efisien. Robot mereka mampu menyelesaikan misi dalam waktu tercepat dengan tingkat akurasi 98%.

"Ini adalah hasil kerja keras selama 8 bulan. Kami bangga bisa mengharumkan nama sekolah dan membuktikan bahwa siswa SMK mampu bersaing di tingkat nasional," ungkap Ahmad Rizki, ketua tim.

Kepala Sekolah, Drs. H. Yusup, M.Pd., menyampaikan apresiasi tinggi atas prestasi ini. "Prestasi ini membuktikan bahwa pendidikan kejuruan di SMK Setia Karya mampu menghasilkan lulusan yang inovatif dan siap menghadapi tantangan teknologi masa depan," katanya.

Tim akan mewakili Indonesia dalam World Robot Olympiad yang akan diselenggarakan di Singapura pada November 2024.',
     'Tim Redaksi', '/images/news/robot-juara-1.jpg', '["robotika", "prestasi", "teknologi", "nasional"]', true, true),

    ('kunjungan-industri-honda-training-center', 'Kunjungan Industri ke Honda Training Center Sunter',
     kemitraan_cat_id, '2024-03-10',
     'Siswa TKRO kelas XI mengikuti kunjungan industri ke Honda Training Center untuk mempelajari teknologi otomotif terkini.',
     'Sebanyak 40 siswa program keahlian Teknik Kendaraan Ringan Otomotif (TKRO) kelas XI mengikuti kunjungan industri ke Honda Training Center Sunter, Jakarta Utara. Kegiatan ini merupakan bagian dari program pembelajaran berbasis industri yang rutin dilaksanakan sekolah.

Selama kunjungan, siswa mendapat kesempatan untuk melihat langsung proses pelatihan teknisi Honda, teknologi terbaru dalam dunia otomotif, serta berbagai peralatan canggih yang digunakan dalam maintenance kendaraan Honda.

"Kunjungan ini sangat bermanfaat untuk memberikan gambaran nyata kepada siswa tentang standar industri yang harus mereka kuasai," ungkap Bambang Wijaya, S.T., M.T., guru produktif TKRO.

Siswa juga mendapat kesempatan untuk mengikuti workshop mini tentang sistem injeksi elektronik dan diagnostic tools modern. Beberapa siswa terpilih akan mendapat kesempatan untuk mengikuti program magang di Honda selama liburan semester.',
     'Bambang Wijaya', '/images/news/kunjungan-honda.jpg', '["kunjungan industri", "honda", "tkro", "otomotif"]', false, true),

    ('pelatihan-microsoft-office-specialist', 'Siswa OTKP Ikuti Pelatihan Microsoft Office Specialist',
     akademik_cat_id, '2024-03-08',
     'Program sertifikasi Microsoft Office Specialist digelar untuk meningkatkan kompetensi siswa OTKP dalam teknologi perkantoran.',
     'SMK Setia Karya menggelar program pelatihan dan sertifikasi Microsoft Office Specialist (MOS) untuk seluruh siswa program keahlian Otomatisasi dan Tata Kelola Perkantoran (OTKP). Program ini berlangsung selama dua minggu dengan instruktur bersertifikat dari Microsoft.

Pelatihan mencakup penguasaan Microsoft Word, Excel, PowerPoint, dan Outlook sesuai standar internasional. Siswa akan diuji kemampuannya dalam menggunakan fitur-fitur advanced dari setiap aplikasi.

"Sertifikasi MOS sangat penting untuk meningkatkan daya saing lulusan kami di dunia kerja. Banyak perusahaan yang mensyaratkan keterampilan office suite yang mumpuni," jelas Rina Kusumawati, S.E., M.M., ketua program keahlian OTKP.

Target sekolah adalah 100% siswa OTKP lulus sertifikasi MOS sebelum mereka lulus. Sertifikat ini diakui secara internasional dan menjadi nilai tambah dalam mencari pekerjaan.',
     'Rina Kusumawati', '/images/news/pelatihan-mos.jpg', '["pelatihan", "microsoft", "otkp", "sertifikasi"]', false, true),

    ('job-fair-2024-ratusan-lowongan-kerja', 'Job Fair 2024: Ratusan Lowongan Kerja untuk Lulusan SMK',
     kegiatan_cat_id, '2024-03-05',
     'SMK Setia Karya menyelenggarakan job fair dengan partisipasi 50+ perusahaan menawarkan ratusan lowongan kerja.',
     'SMK Setia Karya sukses menyelenggarakan Job Fair 2024 yang diikuti oleh lebih dari 50 perusahaan dari berbagai sektor industri. Acara yang berlangsung di aula sekolah ini menawarkan ratusan lowongan kerja khusus untuk lulusan SMK.

Beberapa perusahaan besar yang berpartisipasi antara lain PT Astra International, PT Toyota Motor Manufacturing Indonesia, PT Bank Mandiri, PT Telkom Indonesia, dan puluhan perusahaan multinasional lainnya.

"Respons dari industri sangat positif. Mereka mengapresiasi kualitas lulusan SMK Setia Karya yang siap kerja dan memiliki etos kerja tinggi," ungkap Ahmad Fauzi, S.Pd., M.Pd., Wakil Kepala Sekolah Bidang Kesiswaan.

Dalam job fair ini, 127 siswa kelas XII langsung mendapat job offer on the spot, sementara 89 siswa lainnya akan mengikuti tahap seleksi lanjutan. Tingkat penyerapan lulusan tahun ini diprediksi mencapai 95%.

Sekolah juga mengundang alumni yang sudah sukses berkarir untuk berbagi pengalaman dan memberikan motivasi kepada adik-adik kelasnya.',
     'Ahmad Fauzi', '/images/news/job-fair-2024.jpg', '["job fair", "lowongan kerja", "karir", "lulusan"]', true, true),

    ('pembukaan-pendaftaran-ppdb-2024', 'Pembukaan Pendaftaran PPDB 2024 SMK Setia Karya',
     pengumuman_cat_id, '2024-02-20',
     'Pendaftaran Penerimaan Peserta Didik Baru (PPDB) tahun ajaran 2024/2025 dibuka dengan berbagai program unggulan.',
     'SMK Setia Karya membuka pendaftaran Penerimaan Peserta Didik Baru (PPDB) untuk tahun ajaran 2024/2025. Pendaftaran dibuka dalam tiga gelombang dengan kuota total 140 siswa untuk dua program keahlian.

Program keahlian yang tersedia:
1. Teknik Kendaraan Ringan Otomotif (TKRO) - 80 siswa
2. Otomatisasi dan Tata Kelola Perkantoran (OTKP) - 60 siswa

Pendaftaran dilakukan secara online melalui website resmi sekolah dengan persyaratan:
- Lulusan SMP/MTs dengan nilai rata-rata minimal 7.0
- Lulus tes seleksi akademik dan wawancara
- Sehat jasmani dan rohani

"Kami menawarkan pendidikan berkualitas dengan fasilitas modern dan kerjasama industri yang kuat. Target kami adalah 100% lulusan terserap di dunia kerja atau melanjutkan ke perguruan tinggi," jelas Drs. H. Yusup, M.Pd., Kepala Sekolah.

Calon siswa yang daftar di gelombang pertama mendapat potongan biaya pendidikan hingga 50%. Informasi lengkap dapat diakses di website resmi atau datang langsung ke sekolah.',
     'Tim PPDB', '/images/news/ppdb-2024.jpg', '["ppdb", "pendaftaran", "siswa baru", "2024"]', false, true),

    ('lomba-lks-tingkat-provinsi', '3 Siswa SMK Setia Karya Lolos ke LKS Tingkat Provinsi',
     prestasi_cat_id, '2024-02-15',
     'Tiga siswa terpilih mewakili Kota Depok dalam Lomba Kompetensi Siswa (LKS) tingkat provinsi Jawa Barat.',
     'Tiga siswa SMK Setia Karya berhasil lolos seleksi LKS tingkat kota dan akan mewakili Kota Depok dalam Lomba Kompetensi Siswa (LKS) tingkat Provinsi Jawa Barat yang akan diselenggarakan di Bandung bulan April 2024.

Ketiga siswa tersebut adalah:
1. Andi Pratama (XII TKRO) - Bidang Automotive Technology
2. Sinta Dewi (XII OTKP) - Bidang Office Administration
3. Rudi Hermawan (XI TKRO) - Bidang Auto CAD

"Ini adalah prestasi membanggakan. Dari ratusan peserta se-Kota Depok, siswa kami berhasil meraih posisi teratas," ungkap Bambang Wijaya, S.T., M.T., pembina LKS.

Persiapan menuju LKS Provinsi sudah dimulai dengan pelatihan intensif bersama instruktur berpengalaman. Sekolah juga menyediakan fasilitas workshop khusus untuk latihan.

Jika berhasil di tingkat provinsi, mereka berpeluang mewakili Jawa Barat ke tingkat nasional yang akan diselenggarakan di Jakarta pada Juli 2024.',
     'Bambang Wijaya', '/images/news/lks-provinsi.jpg', '["lks", "lomba", "provinsi", "kompetensi"]', false, true),

    ('workshop-kewirausahaan-alumni', 'Workshop Kewirausahaan: Belajar dari Kesuksesan Alumni',
     kegiatan_cat_id, '2024-02-10',
     'Alumni sukses berbagi pengalaman dalam workshop kewirausahaan untuk siswa kelas XII.',
     'SMK Setia Karya menggelar workshop kewirausahaan dengan menghadirkan tiga alumni sukses sebagai pembicara. Workshop ini diikuti oleh seluruh siswa kelas XII sebagai bekal memasuki dunia kerja atau memulai usaha sendiri.

Tiga alumni yang hadir:
1. Dika Pratama (Lulusan 2018) - Founder startup teknologi "EduTech Solutions"
2. Maya Sari (Lulusan 2016) - Owner bengkel otomotif "Maya Motor"
3. Rizky Firmansyah (Lulusan 2019) - CEO "Digital Marketing Agency"

"Menjadi entrepreneur bukan hanya tentang keuntungan, tapi juga tentang memberikan solusi untuk masalah yang ada di masyarakat," ungkap Dika Pratama saat membuka sesi.

Workshop berlangsung satu hari penuh dengan materi business plan, marketing strategy, financial management, dan digital marketing. Siswa juga diajak untuk mempresentasikan ide bisnis mereka.

Sebagai tindak lanjut, sekolah akan membentuk inkubator bisnis siswa dengan pendampingan dari guru dan alumni sukses.',
     'Ahmad Fauzi', '/images/news/workshop-entrepreneur.jpg', '["kewirausahaan", "alumni", "workshop", "bisnis"]', false, true);
END $$;

-- Announcements
INSERT INTO announcements (title, content, date, type, is_important, is_active, valid_until) VALUES
('Libur Semester Genap 2024', 'Libur semester genap dimulai tanggal 25 Juni - 15 Juli 2024', '2024-06-20', 'academic', false, true, '2024-07-15'),
('Pendaftaran Ekstrakurikuler Semester Baru', 'Pendaftaran ekskul baru dibuka 20-30 Juni 2024 di ruang kesiswaan', '2024-06-15', 'extracurricular', true, true, '2024-06-30'),
('Ujian Praktik Kejuruan', 'UPK akan dilaksanakan tanggal 10-20 Mei 2024 sesuai jadwal', '2024-05-01', 'exam', true, true, '2024-05-20');

-- =====================================================
-- 7. ADMISSION DATA
-- =====================================================

-- Admission Timeline
INSERT INTO admission_timeline (wave, name, period, status, discount, quota, registered, start_date, end_date) VALUES
(1, 'Gelombang 1 (Early Bird)', '1 Februari - 31 Maret 2024', 'completed', 'Potongan 50% biaya pendidikan', 50, 48, '2024-02-01', '2024-03-31'),
(2, 'Gelombang 2 (Regular)', '1 April - 31 Mei 2024', 'active', 'Potongan 25% biaya pendidikan', 60, 35, '2024-04-01', '2024-05-31'),
(3, 'Gelombang 3 (Last Call)', '1 Juni - 15 Juli 2024', 'upcoming', 'Potongan 10% biaya pendidikan', 30, 0, '2024-06-01', '2024-07-15');

-- Admission Requirements
INSERT INTO admission_requirements (type, requirement, order_index, is_active) VALUES
('general', 'Lulusan SMP/MTs atau sederajat', 1, true),
('general', 'Nilai rata-rata rapor minimal 7.0', 2, true),
('general', 'Usia maksimal 18 tahun pada 1 Juli 2024', 3, true),
('general', 'Sehat jasmani dan rohani', 4, true),
('general', 'Berkelakuan baik (tidak pernah terlibat narkoba, kriminal)', 5, true),
('documents', 'Fotocopy Ijazah/SKHUN yang dilegalisir (3 lembar)', 1, true),
('documents', 'Fotocopy rapor semester 1-5 yang dilegalisir (1 set)', 2, true),
('documents', 'Fotocopy Akta Kelahiran (2 lembar)', 3, true),
('documents', 'Fotocopy Kartu Keluarga (2 lembar)', 4, true),
('documents', 'Pas foto 3x4 background merah (6 lembar)', 5, true),
('documents', 'Surat keterangan sehat dari dokter', 6, true),
('documents', 'Surat keterangan kelakuan baik dari sekolah asal', 7, true);

-- Admission Fees
INSERT INTO admission_fees (category, subcategory, amount, note, is_active, academic_year) VALUES
('Pendaftaran', null, 100000, 'Biaya pendaftaran tidak dapat dikembalikan', true, '2024/2025'),
('Uang Pangkal', 'Biaya Masuk', 5000000, 'Dibayar satu kali saat daftar ulang', true, '2024/2025'),
('SPP', 'Bulanan', 450000, 'Dibayar setiap bulan selama 3 tahun', true, '2024/2025'),
('Praktik', 'Per Semester', 750000, 'Biaya bahan dan alat praktik', true, '2024/2025'),
('Seragam', 'Seragam Lengkap', 800000, 'Seragam harian, olahraga, dan praktik', true, '2024/2025'),
('Buku', 'Buku Paket', 600000, 'Buku pelajaran untuk 1 tahun', true, '2024/2025');

-- Admission Discounts
INSERT INTO admission_discounts (name, percentage, applies_to, conditions, is_active, valid_from, valid_until) VALUES
('Early Bird Gelombang 1', 50.00, 'Uang Pangkal', 'Daftar dan diterima di gelombang 1', true, '2024-02-01', '2024-03-31'),
('Prestasi Akademik', 25.00, 'Uang Pangkal', 'Rata-rata rapor ≥ 8.5', true, '2024-02-01', '2024-07-15'),
('Prestasi Non-Akademik', 15.00, 'Uang Pangkal', 'Juara 1-3 lomba tingkat kota/provinsi', true, '2024-02-01', '2024-07-15'),
('Anak Guru/Karyawan', 30.00, 'SPP', 'Anak guru atau karyawan sekolah', true, '2024-02-01', '2024-12-31');

-- Registration Flow
INSERT INTO registration_flow (step, title, description, duration, requirements, order_index) VALUES
(1, 'Pendaftaran Online', 'Daftar melalui website resmi sekolah dengan mengisi formulir lengkap', '10 menit', 'Koneksi internet dan email aktif', 1),
(2, 'Upload Dokumen', 'Unggah semua dokumen persyaratan dalam format PDF/JPG', '15 menit', 'Scanner atau kamera HP untuk foto dokumen', 2),
(3, 'Pembayaran Biaya Pendaftaran', 'Bayar biaya pendaftaran Rp 100.000 melalui transfer bank', '5 menit', 'Rekening bank atau e-wallet', 3),
(4, 'Verifikasi Berkas', 'Tim sekolah akan memverifikasi kelengkapan dan keabsahan dokumen', '1-2 hari kerja', 'Menunggu konfirmasi dari sekolah', 4),
(5, 'Tes Seleksi', 'Mengikuti tes akademik dan wawancara sesuai jadwal yang ditentukan', '2-3 jam', 'Datang ke sekolah sesuai jadwal', 5),
(6, 'Pengumuman Hasil', 'Hasil seleksi diumumkan melalui website dan SMS', '3-5 hari setelah tes', 'Cek website atau SMS', 6),
(7, 'Daftar Ulang', 'Siswa yang diterima melakukan daftar ulang dan pembayaran', '1 hari', 'Bukti penerimaan dan biaya pendidikan', 7);

-- Admission FAQ
INSERT INTO admission_faq (question, answer, category, order_index, is_active) VALUES
('Apakah bisa daftar jika nilai rata-rata rapor kurang dari 7.0?', 'Untuk persyaratan minimal, rata-rata rapor harus 7.0. Namun, ada pertimbangan khusus untuk prestasi non-akademik.', 'requirements', 1, true),
('Bagaimana sistem pembayaran SPP?', 'SPP dibayar setiap bulan melalui transfer bank, payment point, atau langsung ke sekolah.', 'payment', 2, true),
('Apakah ada program beasiswa?', 'Ya, tersedia beasiswa prestasi akademik, non-akademik, dan beasiswa untuk siswa kurang mampu.', 'financial', 3, true),
('Kapan pengumuman hasil seleksi?', 'Pengumuman hasil seleksi diumumkan maksimal 5 hari setelah tes seleksi melalui website dan SMS.', 'selection', 4, true),
('Apakah ada asrama atau tempat tinggal?', 'Sekolah tidak menyediakan asrama, namun kami dapat membantu mencarikan kost atau tempat tinggal terdekat.', 'facilities', 5, true);

-- =====================================================
-- 8. MEDIA DATA
-- =====================================================

-- Photo Categories
INSERT INTO photo_categories (name, description, total_photos, is_active) VALUES
('Fasilitas Sekolah', 'Foto-foto fasilitas dan infrastruktur sekolah', 45, true),
('Kegiatan Sekolah', 'Dokumentasi berbagai kegiatan dan acara sekolah', 78, true),
('Praktik Pembelajaran', 'Kegiatan praktik siswa di workshop dan laboratorium', 92, true),
('Prestasi & Penghargaan', 'Momen penerimaan penghargaan dan prestasi', 34, true),
('Wisuda & Kelulusan', 'Momen kelulusan dan wisuda siswa', 56, true);

-- Get photo category IDs
DO $$
DECLARE
    fasilitas_cat_id uuid;
    kegiatan_cat_id uuid;
    praktik_cat_id uuid;
    prestasi_cat_id uuid;
    wisuda_cat_id uuid;
BEGIN
    SELECT id INTO fasilitas_cat_id FROM photo_categories WHERE name = 'Fasilitas Sekolah';
    SELECT id INTO kegiatan_cat_id FROM photo_categories WHERE name = 'Kegiatan Sekolah';
    SELECT id INTO praktik_cat_id FROM photo_categories WHERE name = 'Praktik Pembelajaran';
    SELECT id INTO prestasi_cat_id FROM photo_categories WHERE name = 'Prestasi & Penghargaan';
    SELECT id INTO wisuda_cat_id FROM photo_categories WHERE name = 'Wisuda & Kelulusan';

    -- Photos
    INSERT INTO photos (title, category_id, date, image, description, photographer, tags, is_featured, is_active) VALUES
    ('Workshop Otomotif Modern', fasilitas_cat_id, '2024-01-15', '/images/gallery/workshop-otomotif-1.jpg',
     'Fasilitas workshop otomotif dengan peralatan modern untuk praktik siswa TKRO', 'Tim Dokumentasi',
     '["workshop", "otomotif", "fasilitas", "tkro"]', true, true),

    ('Lab Komputer Terbaru', fasilitas_cat_id, '2024-01-10', '/images/gallery/lab-komputer-1.jpg',
     'Laboratorium komputer dengan 40 unit PC modern untuk pembelajaran IT', 'Tim Dokumentasi',
     '["laboratorium", "komputer", "teknologi", "otkp"]', false, true),

    ('Praktik Maintenance Mesin', praktik_cat_id, '2024-02-20', '/images/gallery/praktik-mesin-1.jpg',
     'Siswa TKRO sedang melakukan praktik maintenance mesin kendaraan', 'Bambang Wijaya',
     '["praktik", "mesin", "maintenance", "tkro"]', true, true),

    ('Pelatihan Microsoft Office', praktik_cat_id, '2024-03-08', '/images/gallery/pelatihan-office-1.jpg',
     'Siswa OTKP mengikuti pelatihan Microsoft Office Specialist', 'Rina Kusumawati',
     '["pelatihan", "microsoft", "office", "otkp"]', false, true),

    ('Juara Robot Indonesia 2024', prestasi_cat_id, '2024-03-15', '/images/gallery/juara-robot-1.jpg',
     'Tim robotika SMK Setia Karya meraih juara 1 Kontes Robot Indonesia', 'Tim Redaksi',
     '["prestasi", "robot", "juara", "teknologi"]', true, true),

    ('Upacara Bendera Senin', kegiatan_cat_id, '2024-03-11', '/images/gallery/upacara-bendera-1.jpg',
     'Upacara bendera rutin setiap hari Senin dengan seluruh warga sekolah', 'Tim Dokumentasi',
     '["upacara", "bendera", "senin", "rutin"]', false, true),

    ('Job Fair 2024', kegiatan_cat_id, '2024-03-05', '/images/gallery/job-fair-1.jpg',
     'Kegiatan job fair dengan partisipasi 50+ perusahaan', 'Ahmad Fauzi',
     '["job fair", "karir", "perusahaan", "lulusan"]', true, true),

    ('Wisuda Kelas XII 2023', wisuda_cat_id, '2023-06-15', '/images/gallery/wisuda-2023-1.jpg',
     'Momen kelulusan siswa kelas XII tahun ajaran 2022/2023', 'Tim Dokumentasi',
     '["wisuda", "kelulusan", "2023", "siswa"]', false, true),

    ('Ekstrakurikuler Robotika', kegiatan_cat_id, '2024-02-28', '/images/gallery/ekskul-robotika-1.jpg',
     'Kegiatan ekstrakurikuler robotika yang menghasilkan banyak prestasi', 'Tim Robotika',
     '["ekstrakurikuler", "robotika", "siswa", "teknologi"]', false, true),

    ('Ruang Kelas Ber-AC', fasilitas_cat_id, '2024-01-20', '/images/gallery/ruang-kelas-1.jpg',
     'Ruang kelas yang nyaman dengan fasilitas AC dan proyektor', 'Tim Dokumentasi',
     '["ruang kelas", "ac", "proyektor", "fasilitas"]', false, true);
END $$;

-- Videos
INSERT INTO videos (title, category, date, thumbnail, duration, video, description, tags, views, is_featured, is_active) VALUES
('Profil SMK Setia Karya 2024', 'Profil Sekolah', '2024-01-01', '/images/gallery/video-profil-thumb.jpg',
 '05:30', '/videos/profil-sekolah-2024.mp4', 'Video profil lengkap SMK Setia Karya tahun 2024',
 '["profil", "sekolah", "2024", "overview"]', 2847, true, true),

('Virtual Tour Fasilitas Sekolah', 'Fasilitas', '2024-02-01', '/images/gallery/video-tour-thumb.jpg',
 '08:15', '/videos/virtual-tour-fasilitas.mp4', 'Tour virtual mengelilingi fasilitas lengkap SMK Setia Karya',
 '["tour", "fasilitas", "virtual", "sekolah"]', 1923, false, true),

('Praktik Workshop TKRO', 'Pembelajaran', '2024-02-15', '/images/gallery/video-tkro-thumb.jpg',
 '06:45', '/videos/praktik-workshop-tkro.mp4', 'Dokumentasi kegiatan praktik siswa TKRO di workshop otomotif',
 '["praktik", "tkro", "workshop", "otomotif"]', 1654, false, true),

('Pelatihan Office OTKP', 'Pembelajaran', '2024-03-08', '/images/gallery/video-otkp-thumb.jpg',
 '04:20', '/videos/pelatihan-office-otkp.mp4', 'Kegiatan pelatihan Microsoft Office untuk siswa OTKP',
 '["pelatihan", "otkp", "office", "microsoft"]', 1287, false, true),

('Prestasi Robot Indonesia 2024', 'Prestasi', '2024-03-15', '/images/gallery/video-robot-thumb.jpg',
 '03:45', '/videos/prestasi-robot-2024.mp4', 'Dokumentasi perjalanan tim robotika meraih juara 1 nasional',
 '["prestasi", "robot", "juara", "nasional"]', 3421, true, true),

('Ekstrakurikuler Highlights 2023', 'Ekstrakurikuler', '2023-12-15', '/images/gallery/video-ekskul-thumb.jpg',
 '07:30', '/videos/ekstrakurikuler-2023.mp4', 'Kompilasi kegiatan ekstrakurikuler sepanjang tahun 2023',
 '["ekstrakurikuler", "2023", "highlights", "siswa"]', 2156, false, true);

-- Photo Albums
INSERT INTO photo_albums (title, description, date, cover_image, photo_count, is_active) VALUES
('Peringatan HUT RI ke-78', 'Dokumentasi peringatan Hari Kemerdekaan RI ke-78', '2023-08-17', '/images/gallery/album-hut-ri-cover.jpg', 25, true),
('Kunjungan Industri 2024', 'Kumpulan foto kunjungan industri ke berbagai perusahaan', '2024-03-10', '/images/gallery/album-kunjungan-cover.jpg', 18, true),
('Lomba LKS 2024', 'Persiapan dan pelaksanaan Lomba Kompetensi Siswa', '2024-02-15', '/images/gallery/album-lks-cover.jpg', 22, true);

-- =====================================================
-- 9. HOMEPAGE DATA
-- =====================================================

-- Hero Content
INSERT INTO hero_content (title, tagline, subtitle, description, background_image, is_active) VALUES
('SMK Setia Karya', 'Cerdas • Berkarakter • Berprestasi',
 '["Membangun Generasi Unggul", "Siap Kerja, Siap Wirausaha", "Berkarakter Pancasila"]',
 'Sekolah Menengah Kejuruan terbaik dengan kurikulum merdeka, fasilitas modern, dan pendidikan karakter berbasis nilai-nilai Pancasila',
 '/images/hero-bg.jpg', true);

-- Get hero content ID
DO $$
DECLARE
    hero_id uuid;
BEGIN
    SELECT id INTO hero_id FROM hero_content LIMIT 1;

    -- Hero Buttons
    INSERT INTO hero_buttons (hero_id, text, href, variant, order_index, is_active) VALUES
    (hero_id, 'Daftar Sekarang', '/penerimaan', 'primary', 1, true),
    (hero_id, 'Lihat Program', '/akademik', 'secondary', 2, true);
END $$;

-- Quick Info
INSERT INTO quick_info (info_text, link, link_text, is_urgent, valid_until, is_active, display_order) VALUES
('Pendaftaran PPDB 2024/2025 dibuka! Dapatkan potongan 50% untuk pendaftar awal.', '/penerimaan', 'Daftar Sekarang', true, '2024-07-15', true, 1),
('Tim Robotika SMK Setia Karya meraih Juara 1 Kontes Robot Indonesia 2024', '/berita/juara-1-kontes-robot-indonesia-2024', 'Baca Selengkapnya', false, null, true, 2);

-- Homepage Sections
INSERT INTO homepage_sections (section_name, title, subtitle, description, is_enabled, display_order) VALUES
('statistics', 'SMK Setia Karya dalam Angka', 'Prestasi dan pencapaian terbaik', 'Data dan statistik yang menunjukkan kualitas pendidikan kami', true, 1),
('programs', 'Program Keahlian Unggulan', 'Pilihan program studi berkualitas', 'Program keahlian yang sesuai dengan kebutuhan industri modern', true, 2),
('features', 'Keunggulan SMK Setia Karya', 'Mengapa memilih kami?', 'Berbagai keunggulan yang menjadikan SMK Setia Karya pilihan terbaik', true, 3),
('testimonials', 'Testimoni', 'Kata mereka tentang SMK Setia Karya', 'Pengalaman dan testimoni dari berbagai pihak', true, 4),
('news', 'Berita Terkini', 'Informasi dan kegiatan terbaru', 'Update terbaru tentang kegiatan dan prestasi sekolah', true, 5);

-- Call to Action
INSERT INTO call_to_action (title, description, primary_button_text, primary_button_href, secondary_button_text, secondary_button_href, background_image, page, is_active) VALUES
('Siap Bergabung dengan SMK Setia Karya?', 'Wujudkan masa depan gemilang bersama pendidikan kejuruan berkualitas. Daftar sekarang dan dapatkan kesempatan terbaik untuk meraih cita-cita.', 'Daftar PPDB', '/penerimaan', 'Hubungi Kami', '/kontak', '/images/cta-bg.jpg', 'home', true);

-- =====================================================
-- 10. SHARED DATA
-- =====================================================

-- Missions
INSERT INTO missions (title, description, icon, order_index, is_active) VALUES
('Pendidikan Berkualitas', 'Menyelenggarakan pendidikan kejuruan yang berkualitas sesuai dengan perkembangan IPTEK dan kebutuhan dunia kerja', 'graduation-cap', 1, true),
('Pembentukan Karakter', 'Membentuk karakter siswa yang berakhlak mulia, bertanggung jawab, dan memiliki jiwa kepemimpinan', 'heart', 2, true),
('Kemitraan Industri', 'Menjalin kemitraan dengan dunia usaha dan industri untuk mengoptimalkan kualitas pembelajaran', 'handshake', 3, true),
('Pengembangan SDM', 'Mengembangkan kompetensi tenaga pendidik dan kependidikan secara berkelanjutan', 'users', 4, true);

-- Contact Departments
INSERT INTO contact_departments (department, email, phone, whatsapp, contact_person, description, is_active) VALUES
('PPDB', 'ppdb@smksetiakarya.sch.id', '(021) 7654323', '081234567891', 'Novi Andriani, S.E.', 'Informasi penerimaan peserta didik baru', true),
('Akademik', 'akademik@smksetiakarya.sch.id', '(021) 7654324', null, 'Dra. Sri Wahyuni, M.M.', 'Informasi akademik dan kurikulum', true),
('Kesiswaan', 'kesiswaan@smksetiakarya.sch.id', '(021) 7654325', null, 'Ahmad Fauzi, S.Pd., M.Pd.', 'Informasi kegiatan kesiswaan dan ekstrakurikuler', true);

-- Emergency Contacts
INSERT INTO emergency_contacts (title, phone, available, description, priority, is_active) VALUES
('Keamanan Sekolah', '(021) 7654330', '24 jam', 'Untuk keadaan darurat dan keamanan', 1, true),
('UKS (Unit Kesehatan Sekolah)', '(021) 7654331', 'Jam sekolah', 'Untuk kesehatan siswa dan staff', 2, true),
('Kepala Sekolah', '081234567892', 'Darurat saja', 'Kontak langsung kepala sekolah', 3, true);

-- Form Configurations
INSERT INTO form_configurations (form_name, fields, success_message, auto_reply, is_enabled) VALUES
('contact_form', '[
  {"name": "full_name", "label": "Nama Lengkap", "type": "text", "required": true},
  {"name": "email", "label": "Email", "type": "email", "required": true},
  {"name": "phone", "label": "Nomor Telepon", "type": "tel", "required": true},
  {"name": "subject", "label": "Subjek", "type": "select", "required": true, "options": ["Informasi PPDB", "Konsultasi Akademik", "Kerjasama Industri", "Kunjungan Sekolah", "Lainnya"]},
  {"name": "message", "label": "Pesan", "type": "textarea", "required": true}
]', 'Terima kasih! Pesan Anda sudah kami terima dan akan segera kami respon.', true, true);

-- Visitor Information
INSERT INTO visitor_information (visiting_hours, requirements, parking_info, contact_before_visit, additional_notes, is_active) VALUES
('Senin - Sabtu: 08:00 - 15:00 WIB',
 '["Membawa identitas diri (KTP/SIM/Paspor)", "Mengisi buku tamu di pos security", "Menggunakan pakaian sopan dan rapi"]',
 '{"available": true, "capacity": "50 kendaraan roda 4, 200 roda 2", "fee": "Gratis untuk tamu sekolah"}',
 'Disarankan menghubungi sekolah sebelum berkunjung',
 'Kunjungan untuk keperluan resmi dapat diatur melalui kontak yang tersedia', true);

-- Tags
INSERT INTO tags (name, color, description, usage_count) VALUES
('prestasi', '#FFD700', 'Tag untuk konten prestasi dan penghargaan', 15),
('teknologi', '#2196F3', 'Tag untuk konten teknologi dan inovasi', 12),
('siswa', '#4CAF50', 'Tag untuk konten yang berkaitan dengan siswa', 25),
('guru', '#FF9800', 'Tag untuk konten yang berkaitan dengan guru', 8),
('fasilitas', '#9C27B0', 'Tag untuk konten fasilitas sekolah', 18),
('kegiatan', '#607D8B', 'Tag untuk berbagai kegiatan sekolah', 22),
('akademik', '#795548', 'Tag untuk konten akademik', 16),
('ekstrakurikuler', '#E91E63', 'Tag untuk kegiatan ekstrakurikuler', 14);

-- =====================================================
-- DATA INSERTION COMPLETE
-- =====================================================