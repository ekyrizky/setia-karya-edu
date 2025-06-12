import { generateMetadata } from "@/lib/seo";
import { getGaleryData } from "@/lib/galery-data";
import GalleryGrid from "./gallery-grid";
import { Camera, Video } from "lucide-react";

export const metadata = generateMetadata({
  title: "Galeri Foto & Video",
  description:
    "Dokumentasi kegiatan dan fasilitas SMK Setia Karya dalam bentuk foto dan video",
  keywords: [
    "galeri sekolah",
    "foto SMK",
    "video sekolah",
    "dokumentasi kegiatan SMK Setia Karya",
  ],
});

export default async function GalleryPage() {
  const { photos, videos } = await getGaleryData();

  if (!photos && !videos) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Galeri Foto & Video
          </h1>
          <p className="text-muted-foreground">
            Data galeri sedang dimuat atau tidak tersedia.
          </p>
        </div>
      </div>
    );
  }

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
                <span className="font-medium">{photos?.length || 0} Foto</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full text-white">
                <Video className="h-5 w-5" />
                <span className="font-medium">{videos?.length || 0} Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <GalleryGrid photos={photos || []} videos={videos || []} />
      </div>
    </div>
  );
}
