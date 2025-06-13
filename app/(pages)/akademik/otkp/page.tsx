import { generateMetadata } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Computer,
  Award,
  Users,
  Target,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProgramByCode } from "@/lib/programs-data";

export const metadata = generateMetadata({
  title: "Otomatisasi dan Tata Kelola Perkantoran (OTKP)",
  description:
    "Program keahlian OTKP SMK Setia Karya - menghasilkan tenaga administrasi perkantoran yang profesional",
  keywords: [
    "OTKP",
    "administrasi perkantoran",
    "otomatisasi kantor",
    "program keahlian",
    "SMK bisnis",
    "tata kelola",
  ],
});

export default async function OTKPPage() {
  const { program, subjects, facilities, advantages, careerPaths, certifications, softwareSkills } = await getProgramByCode("otkp");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-red-600">OTKP</Badge>
              <span className="green-200">Program Keahlian</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Otomatisasi dan Tata Kelola Perkantoran
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl">
              Program keahlian administrasi perkantoran modern dengan teknologi
              digital dan otomatisasi
            </p>
            <div className="flex gap-4">
              <Link
                href="/penerimaan"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="/kontak"
                className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Konsultasi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Tentang Program OTKP
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Program Otomatisasi dan Tata Kelola Perkantoran (OTKP)
                    dirancang untuk menghasilkan tenaga administrasi yang
                    profesional dan kompeten dalam mengelola kegiatan
                    perkantoran modern.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-lg">3 Tahun</div>
                    <div className="text-sm text-gray-600">Masa Studi</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-lg">
                      {program?.active_students || 0}
                    </div>
                    <div className="text-sm text-gray-600">Siswa Aktif</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&h=400&fit=crop"
                  alt="Program OTKP"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mata Pelajaran */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mata Pelajaran Kejuruan
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kurikulum yang disesuaikan dengan kebutuhan dunia kerja modern
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {subjects.map((subject, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {subject.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {subject.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Program */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Keunggulan Program
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {advantage.advantage}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Skills */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Keterampilan Software
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Penguasaan aplikasi perkantoran yang dibutuhkan industri
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {softwareSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-4">
                    <Computer className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-medium text-gray-800">{skill.skill}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Fasilitas Laboratorium
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fasilitas modern untuk mendukung pembelajaran praktik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={facility.image_url}
                    alt={facility.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prospek Karir */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Prospek Karir
                </h2>
                <p className="text-gray-600 mb-6">
                  Lulusan OTKP memiliki peluang karir yang luas di berbagai
                  sektor bisnis dan instansi pemerintah.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {careerPaths.map((career, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{career.career_path}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Sertifikasi
                </h2>
                <p className="text-gray-600 mb-6">
                  Dapatkan sertifikasi resmi yang diakui dunia kerja.
                </p>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{cert.certification}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center bg-gradient-to-r from-green-900 to-green-800 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Mulai Karir di Bidang Administrasi
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Bergabunglah dengan program OTKP dan jadilah tenaga administrasi
              profesional yang dibutuhkan dunia kerja modern
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/penerimaan"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Daftar Program OTKP
              </Link>
              <Link
                href="/akademik"
                className="bg-white text-green-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Lihat Program Lain
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
