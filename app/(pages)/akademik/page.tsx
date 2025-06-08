import { generateMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Calendar,
  Wrench,
  Computer,
  Trophy,
  GraduationCap,
  Clock,
  Target,
  Building,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import akademikData from "@/data/content/akademik.json";

export const metadata = generateMetadata({
  title: "Akademik",
  description:
    "Program akademik SMK Setia Karya - TKRO dan OTKP dengan kurikulum industri dan fasilitas modern",
  keywords: [
    "akademik SMK",
    "program keahlian",
    "TKRO",
    "OTKP",
    "kurikulum SMK",
    "ekstrakurikuler",
  ],
});

export default function AkademikPage() {
  const { kurikulum, programs } = akademikData;

  const quickLinks = [
    {
      title: "Kurikulum",
      description: "Struktur kurikulum SMK Revisi 2023",
      href: "/akademik/kurikulum",
      icon: BookOpen,
      color: "bg-blue-500",
    },
    {
      title: "TKRO",
      description: "Teknik Kendaraan Ringan Otomotif",
      href: "/akademik/tkro",
      icon: Wrench,
      color: "bg-orange-500",
    },
    {
      title: "OTKP",
      description: "Otomatisasi dan Tata Kelola Perkantoran",
      href: "/akademik/otkp",
      icon: Computer,
      color: "bg-green-500",
    },
    {
      title: "Ekstrakurikuler",
      description: "Kegiatan pengembangan bakat dan minat",
      href: "/akademik/ekstrakurikuler",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "Kalender Akademik",
      description: "Jadwal kegiatan sepanjang tahun",
      href: "/akademik/kalender",
      icon: Calendar,
      color: "bg-red-500",
    },
  ];

  const academicStats = [
    {
      icon: Users,
      number: "216",
      label: "Total Siswa",
      description: "Siswa aktif di semua program",
    },
    {
      icon: GraduationCap,
      number: "2",
      label: "Program Keahlian",
      description: "TKRO dan OTKP terakreditasi",
    },
    {
      icon: Award,
      number: "95%",
      label: "Tingkat Kelulusan",
      description: "Lulusan kompeten siap kerja",
    },
    {
      icon: Building,
      number: "50+",
      label: "Mitra Industri",
      description: "Kerjasama prakerin dan rekrutmen",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-12 border-b">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Program Akademik
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pendidikan kejuruan berkualitas dengan dua program keahlian unggulan
              yang siap menghadapi tantangan industri 4.0
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/penerimaan"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="#program-keahlian"
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Lihat Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link key={index} href={link.href} className="group">
                  <Card className="h-full border-2 border-transparent hover:border-blue-200 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`p-3 ${link.color} rounded-lg text-white group-hover:scale-110 transition-transform`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                            {link.title}
                          </h3>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-gray-600 text-sm">{link.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Statistics */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Akademik dalam Angka
            </h2>
            <p className="text-lg text-gray-600">
              Data pencapaian dan kualitas pendidikan SMK Setia Karya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="font-semibold text-gray-700 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-500">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Keahlian Showcase */}
      <section id="program-keahlian" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Program Keahlian Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dua program keahlian yang dirancang khusus untuk memenuhi kebutuhan
              industri modern dengan pendekatan praktis dan terintegrasi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={
                      program.id === "tkro"
                        ? "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=300&fit=crop"
                        : "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&h=300&fit=crop"
                    }
                    alt={program.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      {program.id.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{program.name}</h3>
                    <p className="text-sm opacity-90">Program 3 Tahun</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">3 Tahun</div>
                      <div className="text-xs text-gray-500">Masa Studi</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Users className="h-5 w-5 text-green-600 mx-auto mb-1" />
                      <div className="text-sm font-medium">
                        {program.id === "tkro" ? "120" : "96"}
                      </div>
                      <div className="text-xs text-gray-500">Siswa Aktif</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      href={`/akademik/${program.id}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Pelajari Lebih Lanjut
                    </Link>
                    <Link
                      href="/kontak"
                      className="border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Konsultasi
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kurikulum Overview */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {kurikulum.title}
              </h2>
              <p className="text-lg text-gray-600">{kurikulum.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {kurikulum.features.map((feature, index) => (
                <Card key={index} className="text-center bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <p className="font-medium text-gray-800">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                href="/akademik/kurikulum"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Lihat Detail Kurikulum
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bergabunglah dengan SMK Setia Karya
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Pilih program keahlian yang tepat dan raih masa depan cerah bersama kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/penerimaan"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="/tentang"
                className="border border-gray-600 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Tentang Sekolah
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}