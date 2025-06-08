import { generateMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Clock,
  Users,
  Award,
  Target,
  CheckCircle,
  GraduationCap,
  Building2,
  ArrowRight,
  FileText,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import akademikData from "@/data/content/akademik.json";

export const metadata = generateMetadata({
  title: "Kurikulum SMK",
  description:
    "Struktur kurikulum SMK Setia Karya - Kurikulum SMK Revisi 2023 dengan pendekatan link and match industri",
  keywords: [
    "kurikulum SMK",
    "struktur kurikulum",
    "mata pelajaran",
    "kompetensi keahlian",
    "teaching factory",
    "prakerin",
  ],
});

export default function KurikulumPage() {
  const { kurikulum } = akademikData;

  const strukturKurikulum = {
    kelompokA: {
      nama: "Muatan Nasional",
      warna: "bg-blue-50 border-blue-200",
      mapel: [
        { nama: "Pendidikan Agama dan Budi Pekerti", jam: "3 JP/minggu" },
        { nama: "Pendidikan Pancasila", jam: "2 JP/minggu" },
        { nama: "Bahasa Indonesia", jam: "3 JP/minggu" },
        { nama: "Matematika", jam: "4 JP/minggu" },
        { nama: "Sejarah Indonesia", jam: "2 JP/minggu" },
        { nama: "Bahasa Inggris", jam: "3 JP/minggu" },
      ],
    },
    kelompokB: {
      nama: "Muatan Kewilayahan",
      warna: "bg-green-50 border-green-200",
      mapel: [
        { nama: "Seni Budaya", jam: "2 JP/minggu" },
        { nama: "Pendidikan Jasmani, Olahraga dan Kesehatan", jam: "2 JP/minggu" },
        { nama: "Muatan Lokal (Bahasa Daerah)", jam: "2 JP/minggu" },
      ],
    },
    kelompokC: {
      nama: "Muatan Peminatan Kejuruan",
      warna: "bg-orange-50 border-orange-200",
      mapel: [
        { nama: "Simulasi dan Komunikasi Digital", jam: "3 JP/minggu" },
        { nama: "Fisika", jam: "3 JP/minggu" },
        { nama: "Kimia", jam: "3 JP/minggu" },
        { nama: "Dasar Program Keahlian (sesuai kompetensi)", jam: "8 JP/minggu" },
        { nama: "Kompetensi Keahlian (TKRO/OTKP)", jam: "24 JP/minggu" },
        { nama: "Produk Kreatif dan Kewirausahaan", jam: "5 JP/minggu" },
      ],
    },
  };

  const pengembanganKurikulum = [
    {
      icon: Target,
      title: "Link and Match",
      description: "Kerjasama dengan industri untuk memastikan relevansi kurikulum dengan kebutuhan dunia kerja",
      color: "text-blue-600",
    },
    {
      icon: Building2,
      title: "Teaching Factory",
      description: "Pembelajaran berbasis produksi nyata sesuai standar industri",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "Praktik Kerja Industri",
      description: "Magang langsung di perusahaan mitra selama 3-6 bulan",
      color: "text-orange-600",
    },
    {
      icon: Award,
      title: "Sertifikasi Kompetensi",
      description: "Uji kompetensi sesuai SKKNI dan sertifikat BNSP",
      color: "text-purple-600",
    },
  ];

  const jadwalPembelajaran = [
    {
      hari: "Senin - Kamis",
      waktu: "07:00 - 15:30",
      keterangan: "Pembelajaran teori dan praktik",
    },
    {
      hari: "Jumat",
      waktu: "07:00 - 11:30",
      keterangan: "Pembelajaran dan kegiatan keagamaan",
    },
    {
      hari: "Sabtu",
      waktu: "07:00 - 12:00",
      keterangan: "Ekstrakurikuler dan pengembangan diri",
    },
  ];

  const sistemPenilaian = [
    {
      jenis: "Penilaian Harian",
      bobot: "30%",
      deskripsi: "Ulangan harian, tugas, dan praktik",
    },
    {
      jenis: "Penilaian Tengah Semester",
      bobot: "35%",
      deskripsi: "Evaluasi komprehensif mid semester",
    },
    {
      jenis: "Penilaian Akhir Semester",
      bobot: "35%",
      deskripsi: "Ujian akhir semester teori dan praktik",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {kurikulum.title}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {kurikulum.description}
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              {kurikulum.features.map((feature, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <BookOpen className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pengembangan Kurikulum */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pendekatan Pengembangan Kurikulum
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kurikulum dikembangkan dengan pendekatan holistik untuk mempersiapkan lulusan yang kompeten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pengembanganKurikulum.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className={`h-12 w-12 ${item.color} mx-auto mb-4`} />
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Struktur Kurikulum */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Struktur Kurikulum
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Distribusi mata pelajaran berdasarkan kelompok muatan kurikulum SMK
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(strukturKurikulum).map(([key, kelompok]) => (
              <Card key={key} className={`${kelompok.warna} border-2`}>
                <CardHeader>
                  <CardTitle className="text-xl">{kelompok.nama}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {kelompok.mapel.map((mapel, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                        <span className="font-medium text-gray-800">{mapel.nama}</span>
                        <Badge variant="secondary">{mapel.jam}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jadwal Pembelajaran */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Jadwal Pembelajaran
              </h2>
              <p className="text-lg text-gray-600">
                Pengaturan waktu pembelajaran untuk optimalisasi proses belajar mengajar
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {jadwalPembelajaran.map((jadwal, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">{jadwal.hari}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{jadwal.waktu}</div>
                    <p className="text-gray-600">{jadwal.keterangan}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sistem Penilaian */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sistem Penilaian
              </h2>
              <p className="text-lg text-gray-600">
                Penilaian komprehensif untuk mengukur pencapaian kompetensi siswa
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {sistemPenilaian.map((penilaian, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{penilaian.jenis}</span>
                      <Badge className="bg-green-600">{penilaian.bobot}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{penilaian.deskripsi}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Kriteria Ketuntasan Minimal (KKM)</h3>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• Muatan Nasional dan Kewilayahan: KKM 75</li>
                    <li>• Muatan Peminatan Kejuruan: KKM 78</li>
                    <li>• Kompetensi Keahlian: KKM 80</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Pembelajaran */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Capaian Pembelajaran
              </h2>
              <p className="text-lg text-gray-600">
                Target kompetensi yang akan dicapai lulusan SMK Setia Karya
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    Kompetensi Umum
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Beriman dan bertakwa kepada Tuhan Yang Maha Esa",
                    "Berkebhinekaan global dan gotong royong",
                    "Mandiri dalam berkarya dan berwirausaha",
                    "Bernalar kritis dan kreatif dalam pemecahan masalah",
                    "Komunikatif dan kolaboratif dalam tim",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-orange-600" />
                    Kompetensi Khusus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Menguasai teknologi sesuai program keahlian",
                    "Mampu beradaptasi dengan perkembangan industri",
                    "Memiliki etos kerja dan profesionalisme tinggi",
                    "Siap bekerja atau melanjutkan ke jenjang pendidikan tinggi",
                    "Mampu berwirausaha sesuai bidang keahlian",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Siap Mengikuti Kurikulum Berkualitas?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bergabunglah dengan SMK Setia Karya dan rasakan pembelajaran dengan kurikulum yang relevan dengan industri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/penerimaan"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="/akademik"
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                Lihat Program Keahlian
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}