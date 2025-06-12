import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getNewsById, getRelatedNews } from "@/lib/news-data";
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
import Image from "next/image";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const article = await getNewsById(id);

  if (!article) {
    return generateSEOMetadata({
      title: "Artikel Tidak Ditemukan",
      description: "Artikel yang Anda cari tidak dapat ditemukan.",
    });
  }

  return generateSEOMetadata({
    title: article.title,
    description: article.excerpt,
    keywords: [article.category, "SMK Setia Karya"],
  });
}

function formatDate(dateString: string) {
  // Use consistent date formatting to avoid hydration mismatch
  const date = new Date(dateString);
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
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
  const article = await getNewsById(id);

  if (!article) {
    notFound();
  }

  const relatedNews = await getRelatedNews(article.id, article.category, 5);
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
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEcW+RINYWcyaLCLrVFS6keVgS8lqt1KJGTJmgddD8zDfM1nZk1aLSa9ltO4Nj1eALFaGwU0rvGmKP3CPOJ9IfsD2J6O1HVOGL4L2ZqHhq6HDh5xUfdbwFfMTjPJ18vfKJ5FfGpQWP2SJ1dZLmGJa6A="
                  />
                ) : (
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
                )}
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
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
                {relatedNews.length > 0 ? (
                  relatedNews.map((news) => (
                    <div
                      key={news.id}
                      className="group border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          {news.image ? (
                            <Image
                              src={news.image}
                              alt={news.title}
                              width={64}
                              height={64}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                          ) : (
                            <div
                              className={`w-16 h-16 rounded-lg bg-gradient-to-br ${
                                getCategoryPlaceholder(news.category).bg
                              } flex items-center justify-center`}
                            >
                              <span className="text-white text-lg">
                                {getCategoryPlaceholder(news.category).icon}
                              </span>
                            </div>
                          )}
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
                  ))
                ) : (
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