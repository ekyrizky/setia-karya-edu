import { generateMetadata } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Award, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import teachersData from "@/data/content/teachers.json";

export const metadata = generateMetadata({
  title: "Guru & Staff - SMK Setia Karya",
  description:
    "Tim pengajar profesional dan staff berdedikasi SMK Setia Karya yang siap membimbing siswa menuju kesuksesan",
  keywords: [
    "guru SMK",
    "staff sekolah",
    "tim pengajar",
    "tenaga pendidik",
    "SMK Setia Karya",
  ],
});

export default function GuruStaffPage() {
  const { teachers, statistics } = teachersData;
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    users: Users,
    graduationCap: GraduationCap,
    award: Award,
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">{teachersData.title}</h1>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {teachersData.subtitle}
        </p>
      </div>

      {/* Stats */}
      <section className="mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          {statistics.items.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Kepala Sekolah */}
      <section className="mb-16">
        <h2 className="heading-2 text-center mb-8">Kepala Sekolah</h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="mx-auto">
                <div className="relative aspect-square w-48 rounded-xl overflow-hidden">
                  <Image
                    src={teachers[0].image}
                    alt={teachers[0].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-2">{teachers[0].name}</h3>
                <p className="text-primary font-semibold mb-4">
                  {teachers[0].position}
                </p>
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  &ldquo;{teachers[0].quote}&rdquo;
                </blockquote>
                <div className="text-sm text-muted-foreground mb-4">
                  <p>{teachers[0].education}</p>
                </div>
                {teachers[0].email && (
                  <a
                    href={`mailto:${teachers[0].email}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {teachers[0].email}
                  </a>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Guru & Staff */}
      <section className="mb-16">
        <h2 className="heading-2 text-center mb-8">Guru & Staff</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{teacher.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-1">
                      {teacher.position}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">
                      {teacher.education}
                    </p>
                    {teacher.specialization && (
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold">Spesialisasi:</span>{" "}
                        {teacher.specialization}
                      </p>
                    )}
                    {teacher.email && (
                      <a
                        href={`mailto:${teacher.email}`}
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-2"
                      >
                        <Mail className="h-3 w-3" />
                        Email
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
