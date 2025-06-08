import { generateMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Clock,
  Users,
  Calendar,
  ArrowRight,
  Award,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import akademikData from "@/data/content/akademik.json";

export const metadata = generateMetadata({
  title: "Ekstrakurikuler",
  description:
    "Kegiatan ekstrakurikuler SMK Setia Karya - mengembangkan bakat, minat, dan karakter siswa",
  keywords: [
    "ekstrakurikuler",
    "kegiatan siswa",
    "olahraga",
    "seni budaya",
    "lomba kompetensi",
    "prestasi",
  ],
});

export default function EkstrakurikulerPage() {
  const { ekstrakurikuler } = akademikData;

  const categoryIcons = {
    "Olahraga": "🏆",
    "Seni & Budaya": "🎨",
    "Akademik": "📚",
    "Teknologi": "💻",
  };

  const categoryColors = {
    "Olahraga": "bg-blue-100 text-blue-600 border-blue-200",
    "Seni & Budaya": "bg-purple-100 text-purple-600 border-purple-200",
    "Akademik": "bg-green-100 text-green-600 border-green-200",
    "Teknologi": "bg-orange-100 text-orange-600 border-orange-200",
  };

  const highlights = [
    {
      icon: Trophy,
      title: "50+ Prestasi",
      description: "Prestasi di tingkat regional, nasional, dan internasional",
    },
    {
      icon: Users,
      title: "20+ Ekstrakurikuler",
      description: "Beragam pilihan sesuai minat dan bakat siswa",
    },
    {
      icon: Award,
      title: "Pembina Ahli",
      description: "Dibimbing oleh pembina berpengalaman dan tersertifikasi",
    },
    {
      icon: Target,
      title: "Pengembangan Karakter",
      description: "Membentuk jiwa kepemimpinan dan kerja sama tim",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {ekstrakurikuler.title}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {ekstrakurikuler.description}
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              {ekstrakurikuler.categories.map((category, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">
                    {categoryIcons[category.name as keyof typeof categoryIcons]}
                  </div>
                  <h3 className="font-bold">{category.name}</h3>
                  <p className="text-sm opacity-80">
                    {category.activities.length} aktivitas
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ekstrakurikuler Categories */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Kategori Ekstrakurikuler
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilihan ekstrakurikuler yang beragam untuk mengembangkan potensi siswa
            </p>
          </div>

          <div className="space-y-12">
            {ekstrakurikuler.categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-3xl">
                    {categoryIcons[category.name as keyof typeof categoryIcons]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">
                      {category.activities.length} aktivitas tersedia
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.activities.map((activity, activityIndex) => (
                    <Card
                      key={activityIndex}
                      className={`border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                        categoryColors[category.name as keyof typeof categoryColors]
                      }`}
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center justify-between">
                          <span>{activity.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {category.name === "Olahraga" && "Sport"}
                            {category.name === "Seni & Budaya" && "Art"}
                            {category.name === "Akademik" && "Academic"}
                            {category.name === "Teknologi" && "Tech"}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4 flex-shrink-0" />
                          <span>{activity.schedule}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Trophy className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-medium">
                            {activity.achievements}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Prestasi Membanggakan
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prestasi yang telah diraih siswa melalui kegiatan ekstrakurikuler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <Trophy className="h-5 w-5" />
                  Tingkat Nasional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Juara 1 LKS Otomotif Nasional 2023</li>
                  <li>• Juara 2 LKS Administrasi Perkantoran</li>
                  <li>• Medali Emas OSN Matematika</li>
                  <li>• Best Performance Band Competition</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Award className="h-5 w-5" />
                  Tingkat Provinsi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Juara 1 Basket Antar SMK DKI</li>
                  <li>• Juara 2 Festival Paduan Suara</li>
                  <li>• Juara 3 Bulu Tangkis Provinsi</li>
                  <li>• Champion English Debate</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Target className="h-5 w-5" />
                  Tingkat Regional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Juara 1 Sepak Bola Jakarta Timur</li>
                  <li>• Juara 1 Voli Jakarta Selatan</li>
                  <li>• Best Modified Car Competition</li>
                  <li>• Sutradara Terbaik Festival Teater</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Ekstrakurikuler */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Tertarik Bergabung?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Setiap siswa dapat memilih minimal 1 ekstrakurikuler sesuai minat
                  dan bakat. Pendaftaran ekstrakurikuler dibuka setiap awal semester.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/penerimaan"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Daftar sebagai Siswa Baru
                  </Link>
                  <Link
                    href="/kontak"
                    className="border border-purple-300 hover:bg-purple-50 text-purple-700 px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Tanya Lebih Lanjut
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Kembangkan Potensi Diri Melalui Ekstrakurikuler
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bergabunglah dengan kegiatan ekstrakurikuler dan raih prestasi
              membanggakan bersama SMK Setia Karya
            </p>
            <Link
              href="/akademik"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              Kembali ke Program Akademik
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}