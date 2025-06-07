import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import homeData from "@/data/content/beranda.json";

export function HeroSection() {
  const { stats } = homeData;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[500px] bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=500&fit=crop"
            alt="SMK Setia Karya"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 container h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Selamat Datang di
              <br />
              <span className="text-yellow-400">SMK Setia Karya</span>
            </h1>
            <p className="text-xl mb-2 text-blue-100">
              Sekolah Menengah Kejuruan Unggulan
            </p>
            <p className="text-lg mb-8 text-blue-200">
              Membentuk Generasi Cerdas, Berkarakter, dan Berprestasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Link href="/penerimaan">Informasi PPDB 2024/2025</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/tentang">Profil Sekolah</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-red-600 text-white py-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">A</span>
              </div>
              <span className="font-semibold">Terakreditasi A</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">✓</span>
              </div>
              <span className="font-semibold">Sekolah Penggerak</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">🌿</span>
              </div>
              <span className="font-semibold">Sekolah Adiwiyata</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">ISO</span>
              </div>
              <span className="font-semibold">ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              SMK Setia Karya dalam Angka
            </h2>
            <p className="text-gray-600">
              Prestasi dan pencapaian yang membanggakan
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-blue-600"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
