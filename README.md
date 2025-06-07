# SMK Setia Karya - Website Sekolah Modern

Website profesional untuk SMK Setia Karya yang dibangun dengan Next.js 14+ dan TypeScript, dirancang khusus untuk institusi pendidikan Indonesia dengan fokus pada SEO dan pengalaman pengguna yang optimal.

## 🚀 Fitur Utama

### 💻 Teknologi Modern
- **Next.js 14+** dengan App Router
- **TypeScript** untuk type safety
- **Tailwind CSS** untuk styling yang responsif
- **Framer Motion** untuk animasi yang menarik
- **Radix UI** untuk komponen yang accessible

### 🎯 SEO & Performance
- ✅ **SEO Terintegrasi** dengan meta tags dinamis
- ✅ **Structured Data** (JSON-LD) untuk sekolah
- ✅ **Sitemap** otomatis
- ✅ **Robots.txt** yang dioptimasi
- ✅ **Open Graph** untuk media sosial
- ✅ **Core Web Vitals** optimized

### 🇮🇩 Lokalisasi Indonesia
- Bahasa Indonesia sebagai bahasa utama
- Keywords SEO yang dioptimasi untuk pencarian lokal
- Integrasi WhatsApp untuk komunikasi cepat
- Tema dan warna yang sesuai dengan identitas Indonesia

### 📱 Responsive Design
- Mobile-first approach
- Layout yang adaptif untuk semua ukuran layar
- Touch-friendly navigation
- Optimasi gambar dengan Next.js Image

## 📋 Halaman Utama

### 🏠 Homepage (`/`)
- Hero section dengan statistik sekolah
- Fitur unggulan sekolah
- Program akademik
- Testimoni siswa, alumni, dan orang tua
- Call-to-action pendaftaran

### ℹ️ Tentang Sekolah (`/tentang`)
- Profil lengkap sekolah
- Visi dan misi
- Sejarah sekolah
- Profil kepala sekolah
- Statistik dan pencapaian

### 📞 Kontak (`/kontak`)
- Form kontak interaktif dengan validasi
- Informasi kontak lengkap
- Integrasi Google Maps
- Jam operasional
- Quick WhatsApp contact

### 🎓 PPDB (`/penerimaan`)
- Timeline pendaftaran
- Syarat dan ketentuan
- Biaya pendidikan
- Alur pendaftaran
- Call-to-action pendaftaran online

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Instalasi
```bash
# Clone repository
git clone <repository-url>
cd setia-karya-edu

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Struktur Proyek

```
├── app/
│   ├── (pages)/           # Grouped routes
│   │   ├── tentang/       # About page
│   │   ├── kontak/        # Contact page
│   │   └── penerimaan/    # Enrollment page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── robots.txt        # SEO robots file
│   └── sitemap.ts        # Dynamic sitemap
├── components/
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── forms/            # Form components
├── config/
│   ├── site.ts          # Site configuration
│   └── navigation.ts    # Navigation structure
├── data/
│   └── content/         # Content data (JSON)
├── lib/
│   ├── seo.ts          # SEO utilities
│   ├── structured-data.ts # Schema markup
│   ├── utils.ts        # Utility functions
│   └── types.ts        # TypeScript types
└── public/
    └── images/         # Static images
```

## 🚀 Development Commands

```bash
# Development server
npm run dev

# Build production
npm run build

# Start production server
npm start
```

## 📈 SEO Features

### Meta Tags
- Dynamic title dan description untuk setiap halaman
- Keywords yang dioptimasi untuk pencarian Indonesia
- Open Graph tags untuk media sosial
- Twitter Card support

### Structured Data
- Organization schema untuk profil sekolah
- Educational Organization markup
- Local Business information

### Performance
- Image optimization dengan Next.js Image
- Code splitting otomatis
- Static generation untuk halaman yang sesuai
- Core Web Vitals optimization

---

Made with ❤️ for Indonesian Education
