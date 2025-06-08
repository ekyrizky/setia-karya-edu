import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  User,
  ArrowLeft,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  tags: string[];
}

// All news data for related articles
const allNews = [
  {
    id: "1",
    title: "SMK Setia Karya Raih Juara 1 Lomba Robotika Nasional 2024",
    excerpt:
      "Tim robotika SMK Setia Karya berhasil meraih juara 1 dalam kompetisi robotika tingkat nasional yang diselenggarakan di Jakarta.",
    category: "prestasi",
    date: "2024-01-15",
    author: "Admin",
    image: "/images/news/robotika-2024.jpg",
    readTime: "3 min",
  },
  {
    id: "2",
    title: "Pembukaan Pendaftaran PPDB Tahun Ajaran 2024/2025",
    excerpt:
      "Penerimaan Peserta Didik Baru (PPDB) SMK Setia Karya untuk tahun ajaran 2024/2025 telah dibuka dengan berbagai program unggulan.",
    category: "pengumuman",
    date: "2024-01-10",
    author: "Tim PPDB",
    image: "/images/news/ppdb-2024.jpg",
    readTime: "5 min",
  },
  {
    id: "3",
    title: "Workshop Industri 4.0 Bersama Perusahaan Mitra",
    excerpt:
      "Siswa SMK Setia Karya mengikuti workshop tentang teknologi Industri 4.0 yang diselenggarakan bersama dengan perusahaan mitra.",
    category: "kegiatan",
    date: "2024-01-08",
    author: "Humas",
    image: "/images/news/workshop-industri.jpg",
    readTime: "4 min",
  },
  {
    id: "4",
    title: "Peningkatan Fasilitas Laboratorium Komputer",
    excerpt:
      "SMK Setia Karya menambah 30 unit komputer baru dengan spesifikasi terkini untuk mendukung pembelajaran praktik siswa.",
    category: "akademik",
    date: "2024-01-05",
    author: "Admin",
    image: "/images/news/lab-komputer.jpg",
    readTime: "2 min",
  },
  {
    id: "5",
    title: "Kunjungan Industri ke PT. Teknologi Maju",
    excerpt:
      "Siswa jurusan Teknik Komputer dan Jaringan mengadakan kunjungan industri untuk mengenal dunia kerja lebih dekat.",
    category: "kegiatan",
    date: "2024-01-03",
    author: "Guru TKJ",
    image: "/images/news/kunjungan-industri.jpg",
    readTime: "3 min",
  },
  {
    id: "6",
    title: "Siswa SMK Setia Karya Lolos Seleksi Beasiswa Unggulan",
    excerpt:
      "5 siswa berprestasi SMK Setia Karya berhasil lolos seleksi beasiswa unggulan untuk melanjutkan pendidikan ke perguruan tinggi.",
    category: "prestasi",
    date: "2024-01-01",
    author: "Bimbingan Konseling",
    image: "/images/news/beasiswa.jpg",
    readTime: "4 min",
  },
  {
    id: "7",
    title: "Pelaksanaan Ujian Tengah Semester Ganjil 2024/2025",
    excerpt:
      "Ujian Tengah Semester Ganjil akan dilaksanakan mulai tanggal 20-30 September 2024 dengan menerapkan protokol kesehatan.",
    category: "pengumuman",
    date: "2023-12-28",
    author: "Bagian Akademik",
    image: "/images/news/ujian-tengah-semester.jpg",
    readTime: "2 min",
  },
  {
    id: "8",
    title: "Pelatihan Digital Marketing untuk Siswa Jurusan Bisnis",
    excerpt:
      "Siswa jurusan Bisnis Daring dan Pemasaran mengikuti pelatihan digital marketing yang diselenggarakan oleh praktisi industri.",
    category: "kegiatan",
    date: "2023-12-25",
    author: "Koordinator BDP",
    image: "/images/news/digital-marketing.jpg",
    readTime: "3 min",
  },
];

const newsData: Record<string, NewsArticle> = {
  "1": {
    id: "1",
    title: "SMK Setia Karya Raih Juara 1 Lomba Robotika Nasional 2024",
    excerpt:
      "Tim robotika SMK Setia Karya berhasil meraih juara 1 dalam kompetisi robotika tingkat nasional yang diselenggarakan di Jakarta.",
    content: `
      <p>Jakarta, 15 Januari 2024 - Tim robotika SMK Setia Karya kembali mengharumkan nama sekolah dengan meraih juara 1 dalam Kompetisi Robotika Nasional 2024 yang diselenggarakan di Jakarta Convention Center.</p>

      <p>Kompetisi yang diikuti oleh 150 tim dari seluruh Indonesia ini menantang peserta untuk merancang dan memprogram robot yang mampu menyelesaikan berbagai misi kompleks dalam waktu yang telah ditentukan.</p>

      <h2>Tim Terbaik dengan Persiapan Matang</h2>
      <p>Tim yang terdiri dari 5 siswa jurusan Teknik Elektronika ini telah mempersiapkan diri selama 6 bulan. Mereka berlatih intensif setiap hari setelah jam sekolah dengan bimbingan guru pembimbing yang berpengalaman.</p>

      <p>"Kami sangat bangga dengan prestasi yang diraih oleh tim robotika sekolah. Ini merupakan bukti nyata bahwa pendidikan vokasi di SMK Setia Karya mampu menghasilkan lulusan yang kompeten dan siap menghadapi tantangan industri 4.0," ungkap Kepala Sekolah SMK Setia Karya.</p>

      <h2>Robot Inovatif dengan Teknologi Terdepan</h2>
      <p>Robot yang dikembangkan oleh tim SMK Setia Karya menggunakan teknologi AI dan machine learning untuk navigasi otomatis. Robot ini mampu melakukan berbagai tugas seperti mengambil objek, navigasi di medan sulit, dan berkomunikasi dengan robot lain.</p>

      <p>Prestasi ini menambah koleksi penghargaan SMK Setia Karya di bidang teknologi dan robotika. Sekolah berkomitmen terus mengembangkan fasilitas dan program pembelajaran yang mendukung kreativitas dan inovasi siswa.</p>

      <h2>Dukungan Sekolah dan Industri</h2>
      <p>Keberhasilan ini tidak lepas dari dukungan penuh sekolah yang telah menyediakan laboratorium robotika dengan peralatan canggih. Selain itu, kerjasama dengan berbagai perusahaan teknologi juga memberikan akses siswa terhadap teknologi terkini.</p>

      <p>Tim robotika SMK Setia Karya akan melanjutkan persiapan untuk mengikuti kompetisi internasional yang akan diselenggarakan di Singapura pada bulan Juli mendatang.</p>
    `,
    category: "prestasi",
    date: "2024-01-15",
    author: "Admin",
    image: "/images/news/robotika-2024.jpg",
    readTime: "5 min",
    tags: ["robotika", "prestasi", "teknologi", "kompetisi", "AI"],
  },
  "2": {
    id: "2",
    title: "Pembukaan Pendaftaran PPDB Tahun Ajaran 2024/2025",
    excerpt:
      "Penerimaan Peserta Didik Baru (PPDB) SMK Setia Karya untuk tahun ajaran 2024/2025 telah dibuka dengan berbagai program unggulan.",
    content: `
      <p>SMK Setia Karya dengan bangga mengumumkan pembukaan Penerimaan Peserta Didik Baru (PPDB) untuk tahun ajaran 2024/2025. Pendaftaran telah dibuka mulai tanggal 10 Januari 2024 dan akan berlangsung hingga 28 Februari 2024.</p>

      <h2>Program Keahlian Unggulan</h2>
      <p>Tahun ini, SMK Setia Karya menawarkan 6 program keahlian unggulan yang sesuai dengan kebutuhan industri:</p>
      <ul>
        <li>Teknik Komputer dan Jaringan (TKJ)</li>
        <li>Rekayasa Perangkat Lunak (RPL)</li>
        <li>Teknik Elektronika Industri</li>
        <li>Teknik Mekatronika</li>
        <li>Akuntansi dan Keuangan Lembaga</li>
        <li>Otomatisasi dan Tata Kelola Perkantoran</li>
      </ul>

      <h2>Fasilitas Modern dan Terlengkap</h2>
      <p>Calon siswa akan mendapatkan akses ke fasilitas pembelajaran modern termasuk:</p>
      <ul>
        <li>Laboratorium komputer dengan 150 unit PC terbaru</li>
        <li>Workshop praktik dengan peralatan industri standar</li>
        <li>Laboratorium elektronika dan robotika</li>
        <li>Perpustakaan digital dengan ribuan e-book</li>
        <li>Ruang multimedia dan studio broadcasting</li>
      </ul>

      <h2>Proses Pendaftaran Online</h2>
      <p>Untuk memudahkan calon siswa, proses pendaftaran dilakukan secara online melalui website resmi sekolah. Calon siswa dapat melakukan pendaftaran 24 jam tanpa perlu datang ke sekolah.</p>

      <p>Persyaratan pendaftaran meliputi:</p>
      <ul>
        <li>Lulusan SMP/MTs atau sederajat</li>
        <li>Usia maksimal 21 tahun pada 1 Juli 2024</li>
        <li>Sehat jasmani dan rohani</li>
        <li>Upload dokumen: ijazah, SKHUN, KK, akta kelahiran</li>
      </ul>

      <h2>Program Beasiswa</h2>
      <p>SMK Setia Karya juga menyediakan berbagai program beasiswa untuk siswa berprestasi dan kurang mampu, termasuk beasiswa penuh untuk juara OSN dan prestasi non-akademik tingkat nasional.</p>

      <p>Untuk informasi lengkap dan pendaftaran, kunjungi website resmi sekolah atau hubungi panitia PPDB di nomor yang telah disediakan.</p>
    `,
    category: "pengumuman",
    date: "2024-01-10",
    author: "Tim PPDB",
    image: "/images/news/ppdb-2024.jpg",
    readTime: "4 min",
    tags: ["PPDB", "pendaftaran", "siswa baru", "beasiswa"],
  },
  "3": {
    id: "3",
    title: "Workshop Industri 4.0 Bersama Perusahaan Mitra",
    excerpt:
      "Siswa SMK Setia Karya mengikuti workshop tentang teknologi Industri 4.0 yang diselenggarakan bersama dengan perusahaan mitra.",
    content: `
      <p>SMK Setia Karya menyelenggarakan workshop bertema "Teknologi Industri 4.0: Mempersiapkan SDM Unggul" yang diikuti oleh seluruh siswa kelas XI dan XII dari berbagai jurusan.</p>

      <h2>Kerjasama dengan Perusahaan Teknologi Terkemuka</h2>
      <p>Workshop ini merupakan hasil kerjasama dengan PT. Teknologi Maju Indonesia, salah satu perusahaan teknologi terkemuka di Indonesia yang bergerak dalam bidang otomasi industri dan Internet of Things (IoT).</p>

      <p>Para siswa mendapatkan kesempatan langka untuk belajar langsung dari para ahli industri tentang perkembangan teknologi terkini yang sedang diterapkan di dunia kerja.</p>

      <h2>Materi Workshop yang Komprehensif</h2>
      <p>Workshop berlangsung selama dua hari dengan materi yang sangat komprehensif, meliputi:</p>
      <ul>
        <li>Pengenalan konsep Industri 4.0 dan implementasinya</li>
        <li>Teknologi IoT dan aplikasinya dalam industri</li>
        <li>Sistem otomasi dan robotika modern</li>
        <li>Big Data dan analitik dalam manufaktur</li>
        <li>Cybersecurity dalam sistem industri</li>
      </ul>

      <h2>Praktik Langsung dengan Peralatan Modern</h2>
      <p>Selain teori, siswa juga mendapatkan kesempatan untuk praktik langsung menggunakan peralatan modern seperti PLC (Programmable Logic Controller), sensor IoT, dan sistem monitoring industri real-time.</p>

      <p>"Workshop ini sangat bermanfaat untuk mempersiapkan siswa menghadapi tantangan dunia kerja di era digital. Mereka dapat memahami langsung bagaimana teknologi diterapkan dalam industri sesungguhnya," kata Kepala Jurusan Teknik Elektronika.</p>
    `,
    category: "kegiatan",
    date: "2024-01-08",
    author: "Humas",
    image: "/images/news/workshop-industri.jpg",
    readTime: "4 min",
    tags: ["workshop", "industri 4.0", "teknologi", "kerjasama"],
  },
  "4": {
    id: "4",
    title: "Peningkatan Fasilitas Laboratorium Komputer",
    excerpt:
      "SMK Setia Karya menambah 30 unit komputer baru dengan spesifikasi terkini untuk mendukung pembelajaran praktik siswa.",
    content: `
      <p>Dalam rangka meningkatkan kualitas pembelajaran, SMK Setia Karya telah menambahkan 30 unit komputer baru dengan spesifikasi terkini di laboratorium komputer utama.</p>

      <h2>Spesifikasi Komputer Terbaru</h2>
      <p>Komputer baru yang digunakan memiliki spesifikasi:</p>
      <ul>
        <li>Processor Intel Core i5 generasi terbaru</li>
        <li>RAM 16GB DDR4</li>
        <li>Storage SSD 512GB</li>
        <li>Graphics card dedicated untuk desain dan programming</li>
        <li>Monitor 24 inch Full HD</li>
      </ul>

      <p>Dengan penambahan ini, total komputer di laboratorium menjadi 80 unit, sehingga dapat menampung lebih banyak siswa dalam satu kelas praktik.</p>

      <h2>Software Pembelajaran Terlengkap</h2>
      <p>Semua komputer telah dilengkapi dengan software pembelajaran terlengkap termasuk IDE programming, software desain grafis, dan aplikasi produktivitas lainnya yang mendukung kurikulum pembelajaran.</p>
    `,
    category: "akademik",
    date: "2024-01-05",
    author: "Admin",
    image: "/images/news/lab-komputer.jpg",
    readTime: "2 min",
    tags: ["fasilitas", "laboratorium", "komputer", "pembelajaran"],
  },
  "5": {
    id: "5",
    title: "Kunjungan Industri ke PT. Teknologi Maju",
    excerpt:
      "Siswa jurusan Teknik Komputer dan Jaringan mengadakan kunjungan industri untuk mengenal dunia kerja lebih dekat.",
    category: "kegiatan",
    date: "2024-01-03",
    author: "Guru TKJ",
    image: "/images/news/kunjungan-industri.jpg",
    readTime: "3 min",
    content: `
      <p>Siswa jurusan Teknik Komputer dan Jaringan (TKJ) SMK Setia Karya mengadakan kunjungan industri ke PT. Teknologi Maju, perusahaan teknologi informasi terkemuka di Indonesia.</p>

      <h2>Mengenal Dunia Kerja IT</h2>
      <p>Kunjungan ini bertujuan untuk memberikan gambaran nyata kepada siswa tentang dunia kerja di bidang teknologi informasi dan jaringan komputer.</p>

      <p>Para siswa mendapat kesempatan untuk melihat langsung bagaimana sistem jaringan perusahaan besar dikelola dan dioperasikan sehari-hari.</p>

      <h2>Wawasan Praktis</h2>
      <p>Selama kunjungan, siswa juga mendapat penjelasan tentang peluang karir di bidang IT dan skill yang dibutuhkan industri saat ini.</p>
    `,
    tags: ["kunjungan industri", "TKJ", "teknologi", "karir"],
  },
  "6": {
    id: "6",
    title: "Siswa SMK Setia Karya Lolos Seleksi Beasiswa Unggulan",
    excerpt:
      "5 siswa berprestasi SMK Setia Karya berhasil lolos seleksi beasiswa unggulan untuk melanjutkan pendidikan ke perguruan tinggi.",
    category: "prestasi",
    date: "2024-01-01",
    author: "Bimbingan Konseling",
    image: "/images/news/beasiswa.jpg",
    readTime: "4 min",
    content: `
      <p>Lima siswa berprestasi SMK Setia Karya berhasil lolos seleksi beasiswa unggulan dari berbagai institusi pendidikan tinggi terkemuka di Indonesia.</p>

      <h2>Prestasi Membanggakan</h2>
      <p>Kelima siswa ini berhasil meraih beasiswa berkat prestasi akademik dan non-akademik yang luar biasa selama menempuh pendidikan di SMK Setia Karya.</p>

      <p>Mereka akan melanjutkan studi di berbagai program studi seperti Teknik Informatika, Sistem Informasi, dan Teknik Elektro.</p>

      <h2>Dukungan Sekolah</h2>
      <p>Prestasi ini tidak lepas dari dukungan penuh sekolah dalam mengembangkan potensi siswa melalui berbagai program pembinaan dan ekstrakurikuler.</p>
    `,
    tags: ["beasiswa", "prestasi", "siswa", "perguruan tinggi"],
  },
  "7": {
    id: "7",
    title: "Pelaksanaan Ujian Tengah Semester Ganjil 2024/2025",
    excerpt:
      "Ujian Tengah Semester Ganjil akan dilaksanakan mulai tanggal 20-30 September 2024 dengan menerapkan protokol kesehatan.",
    category: "pengumuman",
    date: "2023-12-28",
    author: "Bagian Akademik",
    image: "/images/news/ujian-tengah-semester.jpg",
    readTime: "2 min",
    content: `
      <p>SMK Setia Karya mengumumkan pelaksanaan Ujian Tengah Semester (UTS) Ganjil tahun ajaran 2024/2025 yang akan dilaksanakan mulai tanggal 20-30 September 2024.</p>

      <h2>Jadwal dan Tata Tertib</h2>
      <p>Ujian akan dilaksanakan sesuai dengan jadwal yang telah ditetapkan dengan menerapkan protokol kesehatan yang ketat.</p>

      <p>Seluruh siswa diharapkan mempersiapkan diri dengan baik dan mengikuti ujian sesuai dengan tata tertib yang berlaku.</p>
    `,
    tags: ["ujian", "UTS", "akademik", "jadwal"],
  },
  "8": {
    id: "8",
    title: "Pelatihan Digital Marketing untuk Siswa Jurusan Bisnis",
    excerpt:
      "Siswa jurusan Bisnis Daring dan Pemasaran mengikuti pelatihan digital marketing yang diselenggarakan oleh praktisi industri.",
    category: "kegiatan",
    date: "2023-12-25",
    author: "Koordinator BDP",
    image: "/images/news/digital-marketing.jpg",
    readTime: "3 min",
    content: `
      <p>Siswa jurusan Bisnis Daring dan Pemasaran (BDP) SMK Setia Karya mengikuti pelatihan digital marketing yang diselenggarakan oleh praktisi industri berpengalaman.</p>

      <h2>Materi Pelatihan</h2>
      <p>Pelatihan ini mencakup berbagai aspek digital marketing seperti SEO, social media marketing, content marketing, dan e-commerce.</p>

      <p>Para siswa mendapat kesempatan untuk praktik langsung menggunakan tools digital marketing terkini yang digunakan di industri.</p>

      <h2>Persiapan Dunia Kerja</h2>
      <p>Pelatihan ini diharapkan dapat mempersiapkan siswa untuk siap terjun ke dunia kerja di bidang pemasaran digital yang semakin berkembang pesat.</p>
    `,
    tags: ["digital marketing", "BDP", "pelatihan", "industri"],
  },
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const article = newsData[id];

  if (!article) {
    return generateSEOMetadata({
      title: "Artikel Tidak Ditemukan",
      description: "Artikel yang Anda cari tidak dapat ditemukan.",
    });
  }

  return generateSEOMetadata({
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
  });
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getCategoryColor(category: string) {
  const colors = {
    kegiatan: "bg-blue-100 text-blue-800",
    prestasi: "bg-green-100 text-green-800",
    pengumuman: "bg-red-100 text-red-800",
    akademik: "bg-purple-100 text-purple-800",
  };
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
}

function getCategoryPlaceholder(category: string) {
  const placeholders = {
    kegiatan: {
      bg: "from-blue-400 to-blue-600",
      icon: "📚",
      text: "Kegiatan Sekolah",
    },
    prestasi: {
      bg: "from-green-400 to-green-600",
      icon: "🏆",
      text: "Prestasi Siswa",
    },
    pengumuman: {
      bg: "from-red-400 to-red-600",
      icon: "📢",
      text: "Pengumuman",
    },
    akademik: {
      bg: "from-purple-400 to-purple-600",
      icon: "🎓",
      text: "Program Akademik",
    },
  };
  return (
    placeholders[category as keyof typeof placeholders] || {
      bg: "from-gray-400 to-gray-600",
      icon: "📰",
      text: "Berita Sekolah",
    }
  );
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = newsData[id];

  if (!article) {
    notFound();
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/berita/${article.id}`;
  const shareText = `${article.title} - SMK Setia Karya`;

  return (
    <div className="container py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/berita">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Berita
          </Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <article>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {formatDate(article.date)}
                </span>
              </div>

              <h1 className="heading-1 mb-6">{article.title}</h1>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {article.author}
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video rounded-lg mb-8 overflow-hidden">
                <div
                  className={`w-full h-full bg-gradient-to-br ${
                    getCategoryPlaceholder(article.category).bg
                  } flex flex-col items-center justify-center text-white`}
                >
                  <div className="text-6xl mb-4">
                    {getCategoryPlaceholder(article.category).icon}
                  </div>
                  <div className="text-xl font-semibold text-center px-4">
                    {getCategoryPlaceholder(article.category).text}
                  </div>
                  <div className="text-sm opacity-90 mt-2">SMK Setia Karya</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground mr-2">
                  Tags:
                </span>
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Bagikan:
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-blue-600 hover:bg-blue-50"
                    asChild
                  >
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        shareUrl
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-sky-500 hover:bg-sky-50"
                    asChild
                  >
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        shareText
                      )}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-green-600 hover:bg-green-50"
                    asChild
                  >
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        `${shareText} ${shareUrl}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            {/* Related Articles */}
            <Card>
              <CardHeader className="sticky top-0 bg-white z-10 rounded-t-lg">
                <h3 className="font-semibold text-lg">Artikel Terkait</h3>
                <p className="text-sm text-muted-foreground">
                  Berita lain dalam kategori {article.category}
                </p>
              </CardHeader>
              <CardContent className="space-y-4 max-h-[70vh] overflow-y-auto">
                {allNews
                  .filter(
                    (news) =>
                      news.id !== article.id &&
                      news.category === article.category
                  )
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .slice(0, 5)
                  .map((news) => (
                    <div
                      key={news.id}
                      className="group border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-16 h-16 rounded-lg bg-gradient-to-br ${
                              getCategoryPlaceholder(news.category).bg
                            } flex items-center justify-center`}
                          >
                            <span className="text-white text-lg">
                              {getCategoryPlaceholder(news.category).icon}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0 space-y-2">
                          <Link
                            href={`/berita/${news.id}`}
                            className="block text-xs font-medium hover:text-primary transition-colors group-hover:text-primary leading-relaxed"
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 4,
                              overflow: "hidden",
                              lineHeight: "1.4",
                            }}
                          >
                            {news.title}
                          </Link>
                          <div className="text-xs text-muted-foreground">
                            {formatDate(news.date)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                {allNews.filter(
                  (news) =>
                    news.id !== article.id && news.category === article.category
                ).length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <div className="text-4xl mb-2">📰</div>
                    <p className="text-sm">
                      Tidak ada artikel terkait dalam kategori ini
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Navigation */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold text-lg">Navigasi Cepat</h3>
                <p className="text-sm text-muted-foreground">
                  Akses halaman penting lainnya
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link
                  href="/penerimaan"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors p-3 rounded-lg hover:bg-green-50 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-100 group-hover:bg-green-200 flex items-center justify-center transition-colors">
                    <span className="text-green-600 text-sm">🎒</span>
                  </div>
                  <div>
                    <div className="font-medium">Info PPDB</div>
                    <div className="text-xs text-muted-foreground">
                      Pendaftaran siswa baru
                    </div>
                  </div>
                </Link>
                <Link
                  href="/akademik"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors p-3 rounded-lg hover:bg-purple-50 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-100 group-hover:bg-purple-200 flex items-center justify-center transition-colors">
                    <span className="text-purple-600 text-sm">📚</span>
                  </div>
                  <div>
                    <div className="font-medium">Program Studi</div>
                    <div className="text-xs text-muted-foreground">
                      Jurusan dan kurikulum
                    </div>
                  </div>
                </Link>
                <Link
                  href="/tentang"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors p-3 rounded-lg hover:bg-orange-50 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-100 group-hover:bg-orange-200 flex items-center justify-center transition-colors">
                    <span className="text-orange-600 text-sm">🏫</span>
                  </div>
                  <div>
                    <div className="font-medium">Tentang Sekolah</div>
                    <div className="text-xs text-muted-foreground">
                      Profil dan visi misi
                    </div>
                  </div>
                </Link>
                <Link
                  href="/kontak"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors p-3 rounded-lg hover:bg-red-50 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-100 group-hover:bg-red-200 flex items-center justify-center transition-colors">
                    <span className="text-red-600 text-sm">📱</span>
                  </div>
                  <div>
                    <div className="font-medium">Hubungi Kami</div>
                    <div className="text-xs text-muted-foreground">
                      Kontak dan lokasi
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
