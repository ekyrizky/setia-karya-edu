import { generateMetadata } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Wifi,
  Shield,
  Camera,
  Zap,
  Droplets,
  TreePine,
  Building2,
  GraduationCap,
  Trophy,
  MapPin,
  Computer,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import fasilitasData from "@/data/content/fasilitas.json";

export const metadata = generateMetadata({
  title: "Fasilitas Sekolah",
  description:
    "Fasilitas lengkap dan modern SMK Setia Karya - bengkel otomotif, laboratorium komputer, dan sarana pendukung pembelajaran",
  keywords: [
    "fasilitas sekolah",
    "bengkel otomotif",
    "laboratorium komputer",
    "ruang kelas",
    "perpustakaan",
    "fasilitas SMK",
  ],
});

export default function FasilitasPage() {
  const fasilitasUtama = [
    {
      kategori: fasilitasData.kategori?.[0]?.nama || "Fasilitas Akademik",
      icon: GraduationCap,
      color: "bg-blue-500",
      deskripsi: fasilitasData.kategori?.[0]?.deskripsi || "Sarana pembelajaran teori dan praktik yang lengkap",
      items: (fasilitasData.fasilitas?.akademik || []).map(item => ({
        nama: item.nama || "",
        deskripsi: item.deskripsi || "",
        kapasitas: item.kapasitas || "",
        fitur: item.fitur || [],
        gambar: item.gambar || "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      })),
    },
    {
      kategori: fasilitasData.kategori?.[1]?.nama || "Fasilitas Penunjang",
      icon: Building2,
      color: "bg-green-500",
      deskripsi: fasilitasData.kategori?.[1]?.deskripsi || "Sarana pendukung kegiatan sekolah dan kenyamanan siswa",
      items: (fasilitasData.fasilitas?.penunjang || []).map(item => ({
        nama: item.nama || "",
        deskripsi: item.deskripsi || "",
        kapasitas: item.kapasitas || "",
        fitur: item.fitur || [],
        gambar: item.gambar || "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&h=400&fit=crop",
      })),
    },
    {
      kategori: fasilitasData.kategori?.[2]?.nama || "Fasilitas Olahraga",
      icon: Trophy,
      color: "bg-orange-500",
      deskripsi: fasilitasData.kategori?.[2]?.deskripsi || "Sarana olahraga untuk pengembangan fisik dan prestasi",
      items: (fasilitasData.fasilitas?.olahraga || []).map(item => ({
        nama: item.nama || "",
        deskripsi: item.deskripsi || "",
        kapasitas: item.kapasitas || "",
        fitur: item.fitur || [],
        gambar: item.gambar || "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
      })),
    },
  ];

  const infrastruktur = [
    {
      icon: Wifi,
      nama: fasilitasData.infrastruktur?.internet?.nama || "Internet Fiber Optic",
      deskripsi: fasilitasData.infrastruktur?.internet?.deskripsi || "Koneksi internet berkecepatan tinggi di seluruh area sekolah",
    },
    {
      icon: Zap,
      nama: fasilitasData.infrastruktur?.listrik?.nama || "Listrik 24 Jam",
      deskripsi: fasilitasData.infrastruktur?.listrik?.deskripsi || "Pasokan listrik stabil dengan genset backup otomatis",
    },
    {
      icon: Droplets,
      nama: fasilitasData.infrastruktur?.air?.nama || "Air Bersih",
      deskripsi: fasilitasData.infrastruktur?.air?.deskripsi || "Sistem air bersih dan toilet modern di setiap lantai",
    },
    {
      icon: Shield,
      nama: fasilitasData.infrastruktur?.keamanan?.nama || "Sistem Keamanan",
      deskripsi: fasilitasData.infrastruktur?.keamanan?.deskripsi || "CCTV 24 jam dan satpam berpengalaman",
    },
    {
      icon: Camera,
      nama: fasilitasData.infrastruktur?.parkir?.nama || "Parkir Luas",
      deskripsi: fasilitasData.infrastruktur?.parkir?.deskripsi || "Area parkir yang luas dan tertata",
    },
    {
      icon: TreePine,
      nama: fasilitasData.infrastruktur?.lingkungan?.nama || "Lingkungan Hijau",
      deskripsi: fasilitasData.infrastruktur?.lingkungan?.deskripsi || "Taman dan area hijau yang asri dan nyaman",
    },
  ];

  const statistikFasilitas = [
    { 
      angka: (fasilitasData.statistik?.totalFasilitas || fasilitasData.metadata?.totalFasilitas || 24).toString(), 
      label: fasilitasData.ui?.statistikLabels?.totalFasilitas || "Total Fasilitas", 
      icon: Building 
    },
    { 
      angka: (fasilitasData.statistik?.laboratorium || 5).toString(), 
      label: fasilitasData.ui?.statistikLabels?.laboratorium || "Laboratorium", 
      icon: Computer 
    },
    { 
      angka: (fasilitasData.statistik?.bengkelPraktik || 2).toString(), 
      label: fasilitasData.ui?.statistikLabels?.bengkelPraktik || "Bengkel Praktik", 
      icon: Wrench 
    },
    { 
      angka: (fasilitasData.statistik?.fasilitasOlahraga || 4).toString(), 
      label: fasilitasData.ui?.statistikLabels?.fasilitasOlahraga || "Fasilitas Olahraga", 
      icon: Building2 
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {fasilitasData.ui?.hero?.title || "Fasilitas Sekolah"}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {fasilitasData.ui?.hero?.description || "Fasilitas lengkap dan modern untuk mendukung pembelajaran berkualitas dan pengembangan potensi siswa"}
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              {statistikFasilitas.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 rounded-lg p-6">
                    <Icon className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-3xl font-bold mb-1">{stat.angka}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Utama */}
      {fasilitasUtama.map((kategori, categoryIndex) => {
        const CategoryIcon = kategori.icon;
        return (
          <section
            key={categoryIndex}
            className={categoryIndex % 2 === 0 ? "py-16" : "py-16 bg-gray-50"}
          >
            <div className="container">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div
                    className={`p-3 ${kategori.color} rounded-lg text-white`}
                  >
                    <CategoryIcon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {kategori.kategori}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {kategori.deskripsi}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {kategori.items.map((fasilitas, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={fasilitas.gambar}
                        alt={fasilitas.nama}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white text-gray-900">
                          {fasilitas.kapasitas}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-1">
                          {fasilitas.nama}
                        </h3>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {fasilitas.deskripsi}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Fitur Unggulan:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {fasilitas.fitur.map((fitur, fiturIndex) => (
                            <div
                              key={fiturIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                {fitur}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Infrastruktur Pendukung */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Infrastruktur Pendukung
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sistem infrastruktur modern yang mendukung kenyamanan dan keamanan
              seluruh civitas akademika
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastruktur.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-white text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">{item.nama}</h3>
                    <p className="text-gray-600 text-sm">{item.deskripsi}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Ingin Melihat Fasilitas Langsung?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Kunjungi sekolah kami untuk melihat langsung semua fasilitas
                  yang tersedia. Kami akan memberikan tur lengkap dan
                  menjelaskan program-program yang ada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/kontak"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Jadwalkan Kunjungan
                  </Link>
                  <Link
                    href="/penerimaan"
                    className="border border-green-300 hover:bg-green-50 text-green-700 px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
