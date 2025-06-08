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
      kategori: "Fasilitas Akademik",
      icon: GraduationCap,
      color: "bg-blue-500",
      deskripsi: "Sarana pembelajaran teori dan praktik yang lengkap",
      items: [
        {
          nama: "Bengkel Otomotif TKRO",
          deskripsi:
            "Bengkel lengkap dengan peralatan diagnostik modern untuk praktik teknik kendaraan ringan",
          kapasitas: "30 siswa",
          fitur: [
            "Engine Stand",
            "Lift Hidrolik",
            "Scanner OBD",
            "Tool Set Lengkap",
          ],
          gambar:
            "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop",
        },
        {
          nama: "Laboratorium Komputer OTKP",
          deskripsi:
            "Lab komputer dengan software perkantoran terkini untuk program administrasi",
          kapasitas: "40 workstation",
          fitur: [
            "PC Core i5",
            "Software Microsoft Office",
            "Internet Fiber",
            "AC",
          ],
          gambar:
            "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&h=400&fit=crop",
        },
        {
          nama: "Ruang Kelas Modern",
          deskripsi: "26 ruang kelas ber-AC dengan smart board dan proyektor",
          kapasitas: "36 siswa/kelas",
          fitur: ["Smart Board", "Proyektor", "AC", "Sound System"],
          gambar:
            "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
        },
        {
          nama: "Perpustakaan Digital",
          deskripsi:
            "Perpustakaan modern dengan koleksi buku fisik dan digital",
          kapasitas: "100 pengunjung",
          fitur: ["E-Book", "Area Baca", "Komputer", "WiFi Gratis"],
          gambar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      kategori: "Fasilitas Penunjang",
      icon: Building2,
      color: "bg-green-500",
      deskripsi: "Sarana pendukung kegiatan sekolah dan kenyamanan siswa",
      items: [
        {
          nama: "Aula Serbaguna",
          deskripsi: "Ruang multifungsi untuk kegiatan sekolah dan acara besar",
          kapasitas: "500 orang",
          fitur: ["Sound System", "Lighting", "AC", "Panggung"],
          gambar:
            "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&h=400&fit=crop",
        },
        {
          nama: "Kantin Sekolah",
          deskripsi: "Kantin bersih dengan menu sehat dan bergizi",
          kapasitas: "200 tempat duduk",
          fitur: [
            "Menu Sehat",
            "Harga Terjangkau",
            "Area Bersih",
            "Tempat Cuci Tangan",
          ],
          gambar:
            "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop",
        },
        {
          nama: "Masjid Sekolah",
          deskripsi: "Tempat ibadah yang nyaman untuk kegiatan keagamaan",
          kapasitas: "300 jamaah",
          fitur: ["Sound System", "AC", "Mukena", "Al-Quran"],
          gambar:
            "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop",
        },
        {
          nama: "Pos Satpam & Parkir",
          deskripsi: "Area keamanan dan parkir yang luas dan tertata",
          kapasitas: "500 kendaraan",
          fitur: ["CCTV", "Satpam 24 Jam", "Area Terpisah", "Pencahayaan"],
          gambar:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      kategori: "Fasilitas Olahraga",
      icon: Trophy,
      color: "bg-orange-500",
      deskripsi: "Sarana olahraga untuk pengembangan fisik dan prestasi",
      items: [
        {
          nama: "Lapangan Basket",
          deskripsi: "Lapangan basket outdoor dengan ring standar PERBASI",
          kapasitas: "2 lapangan",
          fitur: ["Ring Standar", "Lantai Keras", "Tribun", "Pencahayaan"],
          gambar:
            "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
        },
        {
          nama: "Lapangan Voli",
          deskripsi:
            "Lapangan voli dengan net standar untuk latihan dan kompetisi",
          kapasitas: "2 lapangan",
          fitur: [
            "Net Standar",
            "Lantai Keras",
            "Marking Jelas",
            "Area Bangku",
          ],
          gambar:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        },
        {
          nama: "Lapangan Sepak Bola",
          deskripsi: "Lapangan sepak bola untuk olahraga dan upacara",
          kapasitas: "1 lapangan",
          fitur: ["Rumput Sintetis", "Gawang Standar", "Tribun", "Track Lari"],
          gambar:
            "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop",
        },
        {
          nama: "Gedung Olahraga",
          deskripsi: "Hall indoor untuk olahraga bulu tangkis dan futsal",
          kapasitas: "4 lapangan badminton",
          fitur: ["Lantai Vinyl", "Ventilasi Baik", "Tribun", "Sound System"],
          gambar:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        },
      ],
    },
  ];

  const infrastruktur = [
    {
      icon: Wifi,
      nama: "Internet Fiber Optic",
      deskripsi: "Koneksi internet berkecepatan tinggi di seluruh area sekolah",
    },
    {
      icon: Zap,
      nama: "Listrik 24 Jam",
      deskripsi: "Pasokan listrik stabil dengan genset backup otomatis",
    },
    {
      icon: Droplets,
      nama: "Air Bersih",
      deskripsi: "Sistem air bersih dan toilet modern di setiap lantai",
    },
    {
      icon: Shield,
      nama: "Sistem Keamanan",
      deskripsi: "CCTV 24 jam dan satpam berpengalaman",
    },
    {
      icon: Camera,
      nama: "CCTV Monitoring",
      deskripsi: "Sistem pengawasan terintegrasi untuk keamanan optimal",
    },
    {
      icon: TreePine,
      nama: "Lingkungan Hijau",
      deskripsi: "Taman dan area hijau yang asri dan nyaman",
    },
  ];

  const statistikFasilitas = [
    { angka: "26", label: "Ruang Kelas", icon: Building },
    { angka: "8", label: "Laboratorium", icon: Computer },
    { angka: "4", label: "Bengkel Praktik", icon: Wrench },
    { angka: "12", label: "Fasilitas Pendukung", icon: Building2 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fasilitas Sekolah
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Fasilitas lengkap dan modern untuk mendukung pembelajaran
              berkualitas dan pengembangan potensi siswa
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
