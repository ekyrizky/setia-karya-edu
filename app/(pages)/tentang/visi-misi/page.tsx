import { generateMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Target,
  Compass,
  Heart,
  Lightbulb,
  Users,
  Globe,
} from "lucide-react";
import Image from "next/image";
import sekolahData from "@/data/content/sekolah.json";

export const metadata = generateMetadata({
  title: "Visi & Misi - SMK Setia Karya",
  description:
    "Visi dan misi SMK Setia Karya dalam membentuk generasi cerdas, berkarakter mulia, dan berwawasan global",
  keywords: [
    "visi misi sekolah",
    "tujuan pendidikan",
    "nilai-nilai sekolah",
    "SMK Setia Karya",
  ],
});

export default function VisiMisiPage() {
  const misiItems = [
    {
      icon: Lightbulb,
      title: "Pendidikan Berkualitas",
      description: sekolahData.visiMisi.misi[0],
    },
    {
      icon: Heart,
      title: "Pembentukan Karakter",
      description: sekolahData.visiMisi.misi[1],
    },
    {
      icon: Target,
      title: "Pengembangan Potensi",
      description: sekolahData.visiMisi.misi[2],
    },
    {
      icon: Users,
      title: "Lingkungan Kondusif",
      description: sekolahData.visiMisi.misi[3],
    },
    {
      icon: Globe,
      title: "Kemitraan Strategis",
      description: sekolahData.visiMisi.misi[4],
    },
  ];

  const tujuanSekolah = sekolahData.visiMisi.tujuan;

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">Visi & Misi SMK Setia Karya</h1>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Komitmen kami dalam mewujudkan pendidikan yang berkualitas untuk masa
          depan Indonesia yang lebih baik
        </p>
      </div>

      {/* Hero Section with Visi */}
      <section className="mb-16 relative">
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=500&fit=crop"
            alt="Visi SMK Setia Karya"
            width={1200}
            height={500}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-8 max-w-4xl">
              <Compass className="h-16 w-16 mx-auto mb-6 text-red-400" />
              <h2 className="text-4xl font-bold mb-6">Visi Kami</h2>
              <p className="text-2xl leading-relaxed">
                &quot;{sekolahData.visiMisi.visi}&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section className="mb-16">
        <h2 className="heading-2 text-center mb-8">Misi Kami</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {misiItems.map((misi, index) => {
            const Icon = misi.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{misi.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {misi.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Tujuan Section */}
      <section className="mb-16 bg-gray-50 py-12 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-8">Tujuan Sekolah</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {tujuanSekolah.map((tujuan, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{tujuan}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Motto Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Motto Sekolah</h2>
          <p className="text-4xl font-bold mb-4">
            &quot;{sekolahData.motto}&quot;
          </p>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Tiga pilar utama yang menjadi landasan dalam setiap kegiatan
            pembelajaran dan pembinaan siswa di SMK Setia Karya
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="heading-2 text-center mb-8">Nilai-Nilai Inti</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: sekolahData.nilaiInti.setia.nama,
              description: sekolahData.nilaiInti.setia.deskripsi,
              color: "bg-blue-500",
            },
            {
              title: sekolahData.nilaiInti.karya.nama,
              description: sekolahData.nilaiInti.karya.deskripsi,
              color: "bg-red-500",
            },
            {
              title: sekolahData.nilaiInti.integritas.nama,
              description: sekolahData.nilaiInti.integritas.deskripsi,
              color: "bg-green-500",
            },
            {
              title: sekolahData.nilaiInti.kolaborasi.nama,
              description: sekolahData.nilaiInti.kolaborasi.deskripsi,
              color: "bg-purple-500",
            },
          ].map((value, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`h-2 ${value.color}`}></div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Implementation Section */}
      <section className="mb-16">
        <h2 className="heading-2 text-center mb-8">Implementasi Visi & Misi</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Dalam Pembelajaran</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>
                    Kurikulum berbasis kompetensi yang terintegrasi dengan
                    nilai-nilai karakter
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>
                    Metode pembelajaran aktif, kreatif, dan menyenangkan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>
                    Pemanfaatan teknologi dalam proses belajar mengajar
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Program pengembangan bakat dan minat siswa</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                Dalam Pembinaan Karakter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>
                    Program pembiasaan nilai-nilai positif setiap hari
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>
                    Kegiatan ekstrakurikuler yang mendukung pengembangan
                    karakter
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>Pembinaan kedisiplinan dan tanggung jawab</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>Program kepedulian sosial dan lingkungan</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-0">
          <CardContent className="p-12">
            <h3 className="text-2xl font-bold mb-4">
              Mari Wujudkan Visi & Misi Bersama
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan kami dalam mewujudkan pendidikan yang
              berkualitas dan berkarakter untuk masa depan yang lebih baik
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/tentang/guru-staff"
                className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Kenali Guru Kami
              </a>
              <a
                href="/penerimaan"
                className="btn btn-outline border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold"
              >
                Daftar Sekarang
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
