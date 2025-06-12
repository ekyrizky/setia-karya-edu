"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { News } from "@/types/homepage";

interface NewsGridProps {
  news: News[];
}

// Helper function to create categories dynamically from news data
function getNewsCategories(news: News[]) {
  const uniqueCategories = [...new Set(news.map(item => item.category))];
  return [
    { id: "semua", name: "Semua" },
    ...uniqueCategories.map(cat => ({ id: cat, name: cat }))
  ];
}

function formatDate(dateString: string) {
  // Use consistent UTC date formatting to avoid hydration mismatch
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

export default function NewsGrid({ news }: NewsGridProps) {
  const [activeCategory, setActiveCategory] = useState("semua");

  // Memoize categories to prevent hydration issues
  const newsCategories = useMemo(() => getNewsCategories(news), [news]);

  // Memoize sorted news to prevent hydration issues
  const sortedAllNews = useMemo(() => 
    [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [news]
  );

  // Filter news based on active category
  const filteredNews = useMemo(() => {
    if (activeCategory === "semua") {
      return sortedAllNews;
    }
    return sortedAllNews.filter((item) => item.category === activeCategory);
  }, [sortedAllNews, activeCategory]);

  return (
    <>
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
        {filteredNews.map((newsItem, index) => (
          <Card
            key={newsItem.id}
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
                {newsItem.image ? (
                  <Image
                    src={newsItem.image}
                    alt={newsItem.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEcW+RINYWcyaLCLrVFS6keVgS8lqt1KJGTJmgddD8zDfM1nZk1aLSa9ltO4Nj1eALFaGwU0rvGmKP3CPOJ9IfsD2J6O1HVOGL4L2ZqHhq6HDh5xUfdbwFfMTjPJ18vfKJ5FfGpQWP2SJ1dZLmGJa6A="
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${
                      getCategoryPlaceholder(newsItem.category).bg
                    } flex flex-col items-center justify-center text-white`}
                  >
                    <div
                      className={`${
                        index === 0 && activeCategory === "semua"
                          ? "text-5xl lg:text-6xl"
                          : "text-3xl"
                      } mb-2`}
                    >
                      {getCategoryPlaceholder(newsItem.category).icon}
                    </div>
                    <div
                      className={`${
                        index === 0 && activeCategory === "semua"
                          ? "text-lg lg:text-xl"
                          : "text-sm"
                      } font-semibold text-center px-4`}
                    >
                      {getCategoryPlaceholder(newsItem.category).text}
                    </div>
                    <div className="text-xs opacity-90 mt-1">SMK Setia Karya</div>
                  </div>
                )}
              </div>
            </div>
            <CardHeader
              className={
                index === 0 && activeCategory === "semua" ? "p-6" : "p-4"
              }
            >
              <div className="flex items-center justify-between mb-3">
                <Badge className={getCategoryColor(newsItem.category)}>
                  {newsItem.category}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {formatDate(newsItem.date)}
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
                  href={`/berita/${newsItem.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {newsItem.title}
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
                {newsItem.excerpt}
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  {newsItem.author}
                </div>
              </div>
              <Link href={`/berita/${newsItem.id}`}>
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
      {filteredNews.length > 6 && (
        <div className="text-center">
          <Button variant="outline" size="lg">
            Muat Lebih Banyak
          </Button>
        </div>
      )}

      {/* No results message */}
      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Tidak ada berita untuk kategori ini.
          </p>
        </div>
      )}
    </>
  );
}