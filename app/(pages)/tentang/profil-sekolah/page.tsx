import { generateMetadata } from "@/lib/seo";
import { schoolSchema } from "@/lib/structured-data";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award, BookOpen } from "lucide-react";
import Image from "next/image";
import { getProfile } from "@/lib/profile-data";

export const metadata = generateMetadata({
  title: "Profil Sekolah - SMK Setia Karya",
  description:
    "Profil lengkap SMK Setia Karya - sejarah, prestasi, dan komitmen kami dalam membentuk generasi unggul Indonesia",
  keywords: [
    "profil sekolah",
    "sejarah SMK",
    "SMK Setia Karya",
    "sekolah unggulan Jakarta",
  ],
});

export default async function ProfilSekolahPage() {
  const { schoolHistory, statistics, certifications } = await getProfile();

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    building: Building,
    users: Users,
    award: Award,
    book: BookOpen,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schoolSchema),
        }}
      />

      <div className="container py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Profil SMK Setia Karya</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lebih dari 25 tahun mengabdi dalam dunia pendidikan, membentuk
            generasi cerdas, berkarakter, dan berprestasi untuk kemajuan bangsa
            Indonesia
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[3/1] rounded-xl overflow-hidden mb-16 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=400&fit=crop"
            alt="Kampus SMK Setia Karya"
            fill
            className="object-cover"
          />
        </div>

        {/* Sejarah Section */}
        {schoolHistory?.history && (
          <section className="mb-16">
            <h2 className="heading-2 text-center mb-8">
              Sejarah SMK Setia Karya
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none text-gray-600">
                    {schoolHistory.history}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Stats Section */}
        {statistics.length > 0 && (
          <section className="mb-16 bg-gray-50 py-12 rounded-lg">
            <h2 className="heading-2 text-center mb-8">
              SMK Setia Karya dalam Angka
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {statistics.map((stat) => {
                const Icon = iconMap[stat.icon] || Users;
                return (
                  <Card
                    key={stat.id}
                    className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="text-3xl font-bold mb-2">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Akreditasi & Sertifikasi */}
        {certifications.length > 0 && (
          <section className="mb-16">
            <h2 className="heading-2 text-center mb-8">
              Akreditasi & Sertifikasi
            </h2>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert) => (
                  <Card key={cert.id} className="text-center">
                    <CardContent className="p-6">
                      <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-lg mb-1">{cert.label}</h3>
                      <p className="text-sm text-gray-600 mb-2">{cert.value}</p>
                      <p className="text-xs text-blue-600 font-semibold">
                        {cert.year}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Bergabunglah dengan Keluarga Besar SMK Setia Karya
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Mari bersama-sama membangun masa depan yang cerah melalui pendidikan
            berkualitas
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/penerimaan"
              className="btn btn-primary bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Daftar Sekarang
            </a>
            <a
              href="/tentang/visi-misi"
              className="btn btn-outline bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold"
            >
              Lihat Visi & Misi
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
