import { generateMetadata } from "@/lib/seo";
import { getFacilityData } from "@/lib/facility-data";
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
  Book,
  Users,
  Award,
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

export default async function FasilitasPage() {
  const { facilities, infrastructures, statistics } = await getFacilityData();

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    building: Building,
    book: Book,
    computer: Computer,
    wrench: Wrench,
    building2: Building2,
    wifi: Wifi,
    zap: Zap,
    droplets: Droplets,
    shield: Shield,
    camera: Camera,
    users: Users,
    award: Award,
    treePine: TreePine,
  };

  if (!facilities && !infrastructures && !statistics) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fasilitas Sekolah
          </h1>
          <p className="text-muted-foreground">
            Data fasilitas sedang dimuat atau tidak tersedia.
          </p>
        </div>
      </div>
    );
  }
  console.log(statistics);
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
              Fasilitas lengkap dan modern untuk mendukung proses pembelajaran
            </p>
            {statistics && statistics.length > 0 && (
              <div className="grid md:grid-cols-4 gap-4 mt-12">
                {statistics.map((stat, index) => {
                  const Icon = iconMap[stat.icon];
                  return (
                    <div key={index} className="bg-white/10 rounded-lg p-6">
                      <Icon className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-3xl font-bold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Academic Facility */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-500 rounded-lg text-white">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Academic</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fasilitas untuk kegiatan belajar mengajar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities
              ?.filter((facility) => facility.category === "academic")
              .map((facility, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    {facility.image ? (
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <GraduationCap className="h-16 w-16 text-white" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-gray-900">
                        {facility.capacity}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">
                        {facility.name}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {facility.description}
                    </p>

                    {facility.features && facility.features.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Fitur Unggulan:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {facility.features.map((feature, fiturIndex) => (
                            <div
                              key={fiturIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Support Facility */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-green-500 rounded-lg text-white">
                <Building2 className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Penunjang</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fasilitas pendukung kegiatan sekolah
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities
              ?.filter((facility) => facility.category === "support")
              .map((facility, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    {facility.image ? (
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                        <Building2 className="h-16 w-16 text-white" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-gray-900">
                        {facility.capacity}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">
                        {facility.name}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {facility.description}
                    </p>

                    {facility.features && facility.features.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Fitur Unggulan:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {facility.features.map((feature, fiturIndex) => (
                            <div
                              key={fiturIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Sport Facility */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-orange-500 rounded-lg text-white">
                <Trophy className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Olahraga & Seni
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fasilitas untuk kegiatan olahraga dan seni
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities
              ?.filter((facility) => facility.category === "sport")
              .map((facility, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    {facility.image ? (
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                        <Trophy className="h-16 w-16 text-white" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-gray-900">
                        {facility.capacity}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">
                        {facility.name}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {facility.description}
                    </p>

                    {facility.features && facility.features.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Fitur Unggulan:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {facility.features.map((feature, fiturIndex) => (
                            <div
                              key={fiturIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Infrastruktur Pendukung */}
      {infrastructures && infrastructures.length > 0 && (
        <section className="py-16 bg-blue-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Infrastruktur Pendukung
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sistem infrastruktur modern yang mendukung kenyamanan dan
                keamanan seluruh civitas akademika
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infrastructures.map((infrastructure, index) => {
                const Icon = iconMap[infrastructure.icon];
                return (
                  <Card
                    key={index}
                    className="bg-white text-center hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-lg mb-2">
                        {infrastructure.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {infrastructure.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

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
