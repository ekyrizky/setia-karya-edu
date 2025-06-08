import { generateMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
  Trophy,
  AlertCircle,
  Download,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Kalender Akademik",
  description:
    "Kalender akademik SMK Setia Karya tahun ajaran 2024/2025 - jadwal kegiatan pembelajaran dan non-pembelajaran",
  keywords: [
    "kalender akademik",
    "jadwal sekolah",
    "tahun ajaran",
    "kegiatan sekolah",
    "semester",
    "libur sekolah",
  ],
});

export default function KalenderPage() {
  const currentYear = "2024/2025";
  
  const semesterData = [
    {
      semester: "Ganjil",
      periode: "Juli 2024 - Desember 2024",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      semester: "Genap", 
      periode: "Januari 2025 - Juni 2025",
      color: "bg-green-100 text-green-800 border-green-200",
    },
  ];

  const kegiatan = [
    {
      kategori: "Akademik",
      icon: BookOpen,
      color: "bg-blue-50 border-blue-200",
      items: [
        {
          tanggal: "15-17 Juli 2024",
          nama: "Masa Pengenalan Lingkungan Sekolah (MPLS)",
          deskripsi: "Orientasi siswa baru dan pengenalan lingkungan sekolah",
          lokasi: "SMK Setia Karya",
          status: "selesai"
        },
        {
          tanggal: "22 Juli 2024",
          nama: "Mulai Pembelajaran Semester Ganjil",
          deskripsi: "Awal kegiatan belajar mengajar tahun ajaran 2024/2025",
          lokasi: "SMK Setia Karya",
          status: "selesai"
        },
        {
          tanggal: "27-30 Agustus 2024",
          nama: "Penilaian Tengah Semester (PTS) Ganjil",
          deskripsi: "Evaluasi pembelajaran tengah semester",
          lokasi: "SMK Setia Karya",
          status: "selesai"
        },
        {
          tanggal: "2-13 Desember 2024",
          nama: "Penilaian Akhir Semester (PAS) Ganjil",
          deskripsi: "Evaluasi akhir semester ganjil",
          lokasi: "SMK Setia Karya",
          status: "berlangsung"
        },
        {
          tanggal: "16 Desember 2024",
          nama: "Pembagian Rapor Semester Ganjil",
          deskripsi: "Penyerahan hasil evaluasi belajar semester ganjil",
          lokasi: "SMK Setia Karya",
          status: "mendatang"
        }
      ]
    },
    {
      kategori: "Kegiatan Sekolah",
      icon: Users,
      color: "bg-purple-50 border-purple-200",
      items: [
        {
          tanggal: "17 Agustus 2024",
          nama: "Peringatan HUT RI ke-79",
          deskripsi: "Upacara bendera dan lomba kemerdekaan",
          lokasi: "Lapangan Sekolah",
          status: "selesai"
        },
        {
          tanggal: "15 September 2024",
          nama: "Hari Olahraga Nasional",
          deskripsi: "Kegiatan olahraga dan kompetisi antar kelas",
          lokasi: "Lapangan Sekolah",
          status: "selesai"
        },
        {
          tanggal: "5 Oktober 2024",
          nama: "Hari Guru Nasional",
          deskripsi: "Peringatan hari guru dan apresiasi pendidik",
          lokasi: "Aula Sekolah",
          status: "selesai"
        },
        {
          tanggal: "10 November 2024",
          nama: "Hari Pahlawan",
          deskripsi: "Upacara peringatan Hari Pahlawan",
          lokasi: "Lapangan Sekolah",
          status: "selesai"
        }
      ]
    },
    {
      kategori: "Lomba & Kompetisi",
      icon: Trophy,
      color: "bg-yellow-50 border-yellow-200",
      items: [
        {
          tanggal: "20-22 September 2024",
          nama: "Lomba Kompetensi Siswa (LKS) Provinsi",
          deskripsi: "Kompetisi keahlian tingkat provinsi DKI Jakarta",
          lokasi: "Berbagai Tempat",
          status: "selesai"
        },
        {
          tanggal: "15-17 November 2024",
          nama: "Festival Seni dan Budaya",
          deskripsi: "Pameran karya seni dan pertunjukan budaya siswa",
          lokasi: "Aula dan Halaman Sekolah",
          status: "selesai"
        },
        {
          tanggal: "20-22 Februari 2025",
          nama: "Lomba Kompetensi Siswa (LKS) Nasional",
          deskripsi: "Kompetisi keahlian tingkat nasional",
          lokasi: "Jakarta",
          status: "mendatang"
        }
      ]
    },
    {
      kategori: "Prakerin & Magang",
      icon: MapPin,
      color: "bg-green-50 border-green-200",
      items: [
        {
          tanggal: "1 Oktober - 31 Desember 2024",
          nama: "Praktek Kerja Industri (Prakerin) Kelas XII",
          deskripsi: "Magang siswa kelas XII di industri mitra",
          lokasi: "Berbagai Industri Mitra",
          status: "berlangsung"
        },
        {
          tanggal: "3-7 Februari 2025",
          nama: "Kunjungan Industri Kelas XI",
          deskripsi: "Study tour ke perusahaan dan industri",
          lokasi: "Jakarta dan Sekitarnya",
          status: "mendatang"
        },
        {
          tanggal: "1 Maret - 31 Mei 2025",
          nama: "Praktek Kerja Industri (Prakerin) Kelas XI",
          deskripsi: "Magang siswa kelas XI di industri mitra",
          lokasi: "Berbagai Industri Mitra",
          status: "mendatang"
        }
      ]
    }
  ];

  const libur = [
    { tanggal: "17 Agustus 2024", nama: "Hari Kemerdekaan RI", status: "selesai" },
    { tanggal: "16 September 2024", nama: "Maulid Nabi Muhammad SAW", status: "selesai" },
    { tanggal: "31 Oktober 2024", nama: "Hari Raya Diwali", status: "selesai" },
    { tanggal: "25 Desember 2024", nama: "Hari Raya Natal", status: "mendatang" },
    { tanggal: "1 Januari 2025", nama: "Tahun Baru Masehi", status: "mendatang" },
    { tanggal: "29 Januari 2025", nama: "Tahun Baru Imlek", status: "mendatang" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "selesai":
        return <Badge variant="secondary" className="bg-gray-100 text-gray-600">Selesai</Badge>;
      case "berlangsung":
        return <Badge className="bg-blue-600 text-white">Berlangsung</Badge>;
      case "mendatang":
        return <Badge className="bg-green-600 text-white">Mendatang</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kalender Akademik
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Tahun Ajaran {currentYear}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {semesterData.map((semester, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Semester {semester.semester}
                  </h3>
                  <p className="opacity-90">{semester.periode}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="font-bold text-lg">36 Minggu</div>
                <div className="text-sm text-gray-600">Minggu Efektif</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="font-bold text-lg">2 Semester</div>
                <div className="text-sm text-gray-600">Periode Belajar</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <div className="font-bold text-lg">15+ Event</div>
                <div className="text-sm text-gray-600">Kegiatan & Lomba</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="font-bold text-lg">3 Bulan</div>
                <div className="text-sm text-gray-600">Praktek Kerja</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kegiatan Akademik */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Jadwal Kegiatan
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rencana kegiatan akademik dan non-akademik sepanjang tahun ajaran
            </p>
          </div>

          <div className="space-y-12">
            {kegiatan.map((kategori, categoryIndex) => {
              const Icon = kategori.icon;
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {kategori.kategori}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {kategori.items.map((item, itemIndex) => (
                      <Card
                        key={itemIndex}
                        className={`${kategori.color} border-2 hover:shadow-lg transition-shadow`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{item.nama}</CardTitle>
                            {getStatusBadge(item.status)}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span className="font-medium">{item.tanggal}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{item.lokasi}</span>
                          </div>
                          <p className="text-sm text-gray-700">{item.deskripsi}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hari Libur */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Hari Libur Nasional
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hari libur resmi selama tahun ajaran {currentYear}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {libur.map((hari, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">{hari.nama}</h3>
                        <p className="text-sm text-gray-600">{hari.tanggal}</p>
                      </div>
                      {getStatusBadge(hari.status)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download & Info */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Download className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Download Kalender Akademik
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Unduh kalender akademik lengkap dalam format PDF untuk referensi
                    dan perencanaan kegiatan
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </button>
                    <Link
                      href="/kontak"
                      className="border border-blue-300 hover:bg-blue-50 text-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Hubungi Bagian Akademik
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Pemberitahuan Penting
                    </h3>
                    <div className="text-sm text-amber-700 space-y-1">
                      <p>• Jadwal dapat berubah sewaktu-waktu sesuai dengan kebijakan sekolah</p>
                      <p>• Informasi terbaru akan diumumkan melalui website dan grup WhatsApp</p>
                      <p>• Untuk informasi lebih lanjut hubungi bagian Tata Usaha sekolah</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Siap Mengikuti Kegiatan Akademik?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bergabunglah dengan SMK Setia Karya dan ikuti berbagai kegiatan
              menarik sepanjang tahun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/penerimaan"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="/akademik"
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                Lihat Program Akademik
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}