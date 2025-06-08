"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Video, Calendar, X, Play } from "lucide-react";

// Sample gallery data - replace with actual data source
const galleryData = {
  photos: [
    {
      id: 1,
      title: "Upacara Bendera Senin",
      category: "Kegiatan Rutin",
      date: "2024-01-15",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=225",
    },
    {
      id: 2,
      title: "Praktik Otomotif TKRO",
      category: "Akademik",
      date: "2024-01-10",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225",
    },
    {
      id: 3,
      title: "Workshop Komputer OTKP",
      category: "Akademik",
      date: "2024-01-08",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225",
    },
    {
      id: 4,
      title: "Lomba Basket Antar Kelas",
      category: "Ekstrakurikuler",
      date: "2024-01-05",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225",
    },
    {
      id: 5,
      title: "Wisuda Angkatan 2023",
      category: "Kegiatan Khusus",
      date: "2023-12-20",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=225",
    },
    {
      id: 6,
      title: "Pameran Karya Siswa",
      category: "Prestasi",
      date: "2023-12-15",
      image:
        "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=225",
    },
  ],
  videos: [
    {
      id: 1,
      title: "Profil SMK Setia Karya 2024",
      category: "Promosi",
      date: "2024-01-20",
      thumbnail:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=225",
      duration: "3:45",
      videoUrl: "https://youtube.com/watch?v=example1",
    },
    {
      id: 2,
      title: "Praktik Kerja Industri",
      category: "Akademik",
      date: "2024-01-12",
      thumbnail:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225",
      duration: "5:20",
      videoUrl: "https://youtube.com/watch?v=example2",
    },
    {
      id: 3,
      title: "Festival Seni dan Budaya",
      category: "Ekstrakurikuler",
      date: "2024-01-01",
      thumbnail:
        "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&h=225",
      duration: "8:15",
      videoUrl: "https://youtube.com/watch?v=example3",
    },
  ],
};

const categories = [
  { id: "semua", name: "Semua" },
  { id: "foto", name: "Foto" },
  { id: "video", name: "Video" },
];

type PhotoItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  type: "photo";
};

type VideoItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
  type: "video";
};

type GalleryItem = PhotoItem | VideoItem;

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("semua");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Combine photos and videos for "Semua" filter
  const allItems: GalleryItem[] = [
    ...galleryData.photos.map((photo) => ({
      ...photo,
      type: "photo" as const,
    })),
    ...galleryData.videos.map((video) => ({
      ...video,
      type: "video" as const,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const getFilteredItems = (): GalleryItem[] => {
    switch (activeFilter) {
      case "foto":
        return galleryData.photos.map((photo) => ({
          ...photo,
          type: "photo" as const,
        }));
      case "video":
        return galleryData.videos.map((video) => ({
          ...video,
          type: "video" as const,
        }));
      default:
        return allItems;
    }
  };

  const filteredItems = getFilteredItems();

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Galeri Foto & Video
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Dokumentasi kegiatan dan fasilitas SMK Setia Karya dalam bentuk
              foto dan video
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full text-white">
                <Camera className="h-5 w-5" />
                <span className="font-medium">
                  {galleryData.photos.length} Foto
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full text-white">
                <Video className="h-5 w-5" />
                <span className="font-medium">
                  {galleryData.videos.length} Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white">
        <div className="container">
          {/* Mobile: Horizontal scroll */}
          <div className="sm:hidden overflow-hidden">
            <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
              {categories.map((category, index) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  size="sm"
                  className={`capitalize flex-shrink-0 whitespace-nowrap min-w-fit px-4 ${
                    index === 0 ? "ml-0" : ""
                  } ${index === categories.length - 1 ? "mr-0" : ""}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Desktop: Centered flex wrap */}
          <div className="hidden sm:flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                size="sm"
                className="capitalize"
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-12">
        {/* Gallery */}
        <section>
          <div className="flex items-center space-x-3 mb-8">
            {activeFilter === "foto" ? (
              <Camera className="h-8 w-8 text-blue-600" />
            ) : activeFilter === "video" ? (
              <Video className="h-8 w-8 text-red-600" />
            ) : (
              <Camera className="h-8 w-8 text-blue-600" />
            )}
            <h2 className="text-3xl font-bold text-gray-900">
              {activeFilter === "semua"
                ? "Galeri Foto & Video"
                : `Galeri ${
                    categories.find((cat) => cat.id === activeFilter)?.name
                  }`}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={`${item.type}-${item.id}`}
                className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={item.type === "photo" ? item.image : item.thumbnail}
                    alt={item.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEcW+RINYWcyaLCLrVFS6keVgS8lqt1KJGTJmgddD8zDfM1nZk1aLSa9ltO4Nj1eALFaGwU0rvGmKP3CPOJ9IfsD2J6O1HVOGL4L2ZqHhq6HDh5xUfdbwFfMTjPJ18vfKJ5FfGpQWP2SJ1dZLmGJa6A="
                  />

                  {/* Photo overlay */}
                  {item.type === "photo" && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}

                  {/* Video overlay */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Video className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}

                  <Badge
                    className={`absolute top-3 left-3 text-white shadow-md ${
                      item.type === "photo" ? "bg-blue-600" : "bg-red-600"
                    }`}
                  >
                    {item.category}
                  </Badge>

                  {/* Photo/Video Type Tag */}
                  <div
                    className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium text-white shadow-md ${
                      item.type === "photo" ? "bg-blue-500" : "bg-red-500"
                    }`}
                  >
                    {item.type === "photo" ? "FOTO" : "VIDEO"}
                  </div>

                  {/* Video duration */}
                  {item.type === "video" && (
                    <div className="absolute bottom-3 right-3 bg-black/75 text-white px-2 py-1 rounded text-sm shadow-md">
                      {item.type === "video" ? item.duration : ""}
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(item.date).toLocaleDateString("id-ID")}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Muat Lebih Banyak
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedItem(null);
            }
          }}
        >
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Content */}
            <div className="relative">
              {selectedItem.type === "photo" ? (
                /* Photo Modal */
                <div className="relative">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[80vh] object-contain bg-black rounded-lg"
                  />

                  {/* Overlay Details */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {selectedItem.title}
                        </h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-200">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {new Date(selectedItem.date).toLocaleDateString(
                                "id-ID"
                              )}
                            </span>
                          </span>
                          <Badge className="bg-blue-600 text-white text-xs px-2 py-1">
                            {selectedItem.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Video Modal */
                <div className="relative">
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                    <Image
                      src={selectedItem.thumbnail}
                      alt={selectedItem.title}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <button className="bg-red-600 rounded-full p-6 hover:bg-red-700 transition-colors">
                        <Play className="h-12 w-12 text-white ml-1" />
                      </button>
                    </div>
                  </div>

                  {/* Overlay Details */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {selectedItem.title}
                        </h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-200">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {new Date(selectedItem.date).toLocaleDateString(
                                "id-ID"
                              )}
                            </span>
                          </span>
                          <Badge className="bg-red-600 text-white text-xs px-2 py-1">
                            {selectedItem.category}
                          </Badge>
                          <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium text-white">
                            {selectedItem.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
