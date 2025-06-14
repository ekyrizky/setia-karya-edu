import { generateMetadata } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Compass, Heart, Lightbulb, Users, Globe } from "lucide-react";
import Image from "next/image";
import { getVisiMisiData } from "@/lib/about-data";

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

export default async function VisiMisiPage() {
  const { schoolInfo, missions } = await getVisiMisiData();
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    lightBulb: Lightbulb,
    heart: Heart,
    target: Target,
    users: Users,
    globe: Globe,
  };

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
      {schoolInfo?.vision && (
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
                  &quot;{schoolInfo.vision}&quot;
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Misi Section */}
      {missions.length > 0 && (
        <section className="mb-16">
          <h2 className="heading-2 text-center mb-8">Misi Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission) => {
              const Icon = iconMap[mission.icon] || Target;
              return (
                <Card
                  key={mission.id}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          {mission.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {mission.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* Motto Section */}
      {schoolInfo?.motto && (
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Motto Sekolah</h2>
            <p className="text-4xl font-bold mb-4">
              &quot;{schoolInfo.motto}&quot;
            </p>
          </div>
        </section>
      )}

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
