"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  featured?: boolean;
}

const newsCategories = [
  { id: "semua", name: "Semua" },
  { id: "kegiatan", name: "Kegiatan" },
  { id: "prestasi", name: "Prestasi" },
  { id: "pengumuman", name: "Pengumuman" },
  { id: "akademik", name: "Akademik" },
];

const allNews: NewsItem[] = [
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
    featured: true,
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

export default function BeritaPage() {
  const [activeCategory, setActiveCategory] = useState("semua");

  // Filter news based on active category
  const filteredNews =
    activeCategory === "semua"
      ? allNews
      : allNews.filter((news) => news.category === activeCategory);

  // Sort by date (newest first)
  const sortedNews = filteredNews.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">Berita & Kegiatan</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Informasi terbaru tentang kegiatan, prestasi, dan perkembangan SMK
          Setia Karya
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        {/* Mobile: Horizontal scroll */}
        <div className="sm:hidden overflow-hidden">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {newsCategories.map((category, index) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                className={`capitalize flex-shrink-0 whitespace-nowrap min-w-fit px-4 ${
                  index === 0 ? "ml-0" : ""
                } ${index === newsCategories.length - 1 ? "mr-0" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Desktop: Centered flex wrap */}
        <div className="hidden sm:flex flex-wrap gap-2 justify-center">
          {newsCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              className="capitalize"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {sortedNews.map((news, index) => (
          <Card
            key={news.id}
            className={`hover:shadow-lg transition-shadow ${
              index === 0 && activeCategory === "semua"
                ? "md:col-span-2 lg:col-span-2"
                : ""
            }`}
          >
            <div className="relative">
              <div
                className={`aspect-video ${
                  index === 0 && activeCategory === "semua"
                    ? "lg:aspect-[2/1]"
                    : ""
                } overflow-hidden rounded-t-lg`}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${
                    getCategoryPlaceholder(news.category).bg
                  } flex flex-col items-center justify-center text-white`}
                >
                  <div
                    className={`${
                      index === 0 && activeCategory === "semua"
                        ? "text-5xl lg:text-6xl"
                        : "text-3xl"
                    } mb-2`}
                  >
                    {getCategoryPlaceholder(news.category).icon}
                  </div>
                  <div
                    className={`${
                      index === 0 && activeCategory === "semua"
                        ? "text-lg lg:text-xl"
                        : "text-sm"
                    } font-semibold text-center px-4`}
                  >
                    {getCategoryPlaceholder(news.category).text}
                  </div>
                  <div className="text-xs opacity-90 mt-1">SMK Setia Karya</div>
                </div>
              </div>
            </div>
            <CardHeader
              className={
                index === 0 && activeCategory === "semua" ? "p-6" : "p-4"
              }
            >
              <div className="flex items-center justify-between mb-3">
                <Badge className={getCategoryColor(news.category)}>
                  {news.category}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {formatDate(news.date)}
                </span>
              </div>
              <CardTitle
                className={`${
                  index === 0 && activeCategory === "semua"
                    ? "text-2xl"
                    : "text-lg"
                }`}
              >
                <Link
                  href={`/berita/${news.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {news.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent
              className={
                index === 0 && activeCategory === "semua"
                  ? "px-6 pb-6"
                  : "px-4 pb-4"
              }
            >
              <p
                className={`text-muted-foreground mb-4 ${
                  index === 0 && activeCategory === "semua"
                    ? "text-base"
                    : "text-sm"
                } line-clamp-3`}
              >
                {news.excerpt}
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  {news.author}
                </div>
              </div>
              <Link href={`/berita/${news.id}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto cursor-pointer"
                >
                  Baca Selengkapnya
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More - only show if there are many items */}
      {sortedNews.length > 6 && (
        <div className="text-center">
          <Button variant="outline" size="lg">
            Muat Lebih Banyak
          </Button>
        </div>
      )}

      {/* No results message */}
      {sortedNews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Tidak ada berita untuk kategori ini.
          </p>
        </div>
      )}
    </div>
  );
}
