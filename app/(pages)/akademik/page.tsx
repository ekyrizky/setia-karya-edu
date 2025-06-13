import { generateMetadata } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Calendar,
  Wrench,
  Computer,
  GraduationCap,
  Clock,
  Building,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAcademicData } from "@/lib/akademic-data";

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

export default async function AkademikPage() {
  const { kurikulum, programs, navigation, statistics } =
    await getAcademicData();
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    building: Building,
    computer: Computer,
    wrench: Wrench,
    users: Users,
    graduationCap: GraduationCap,
    award: Award,
    bookOpen: BookOpen,
    calendar: Calendar,
  };

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
              Pendidikan kejuruan berkualitas dengan dua program keahlian
              unggulan yang siap menghadapi tantangan industri 4.0
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
            {navigation.map((link, index) => {
              const Icon = iconMap[link?.icon || "building"];
              return (
                <Link key={index} href={link.href} className="group">
                  <Card className="h-full border-2 border-transparent hover:border-blue-200 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className={`p-3 rounded-lg group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                            {link.title}
                          </h3>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-gray-600 text-sm">
                        {link.description}
                      </p>
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
            {statistics.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-gray-700 mb-1">
                      {stat.label}
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
              Dua program keahlian yang dirancang khusus untuk memenuhi
              kebutuhan industri modern dengan pendekatan praktis dan
              terintegrasi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card
                key={program.id}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={
                      program.program_id === "tkro"
                        ? "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=300&fit=crop"
                        : "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&h=300&fit=crop"
                    }
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      {program.program_id.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{program.title}</h3>
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
                <Card
                  key={index}
                  className="text-center bg-white hover:shadow-lg transition-shadow"
                >
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
    </div>
  );
}
