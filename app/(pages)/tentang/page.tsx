import { generateMetadata } from "@/lib/seo";
import { schoolSchema } from "@/lib/structured-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Building,
  Users,
  Award,
  BookOpen,
  Target,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import about from "@/data/content/about.json";

export const metadata = generateMetadata({
  title: "Tentang Sekolah",
  description:
    "Profil lengkap SMK Setia Karya - sejarah, visi misi, dan komitmen kami dalam membentuk generasi unggul Indonesia",
  keywords: [
    "profil sekolah",
    "sejarah SMK",
    "visi misi sekolah",
    "tentang SMK Setia Karya",
  ],
});

export default function TentangPage() {
  const { sections, vision, missions, highlights, testimonial } = about;
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    building: Building,
    target: Target,
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
          <h1 className="heading-1 mb-4">{about.title}</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {about.subtitle}
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative mb-16 aspect-[3/1] rounded-xl overflow-hidden shadow-xl">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Navigation Cards */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const Icon = iconMap[section.icon];
              return (
                <Link key={index} href={section.href} className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {section.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold">
                        <span>Selengkapnya</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Quick Overview */}
        <section className="mb-16 bg-gray-50 py-12 rounded-lg">
          <h2 className="heading-2 text-center mb-8">
            Sekilas SMK Setia Karya
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-600" />
                      {vision.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-gray-600 leading-relaxed">
                      {vision.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      {missions.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      {missions.items.map((mission, index) => {
                        return (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{mission}</span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="heading-2 text-center mb-8">
            Mengapa SMK Setia Karya?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon];
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
            <CardContent className="p-8">
              <div className="max-w-3xl mx-auto text-center">
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300&h=300&fit=crop&crop=face"
                    alt="Dr. Bambang Sutrisno, M.Pd."
                    fill
                    className="object-cover"
                  />
                </div>
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-primary">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Siap Menjadi Bagian dari Keluarga Besar Kami?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan siswa yang telah menemukan jalan menuju
            kesuksesan di SMK Setia Karya
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/penerimaan"
              className="btn btn-primary bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold inline-block"
            >
              Daftar Sekarang
            </Link>
            <Link
              href="/kontak"
              className="btn btn-outline bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-block"
            >
              Hubungi Kami
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
