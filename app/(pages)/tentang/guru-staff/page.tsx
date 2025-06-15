import { generateMetadata } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Award, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import { getTeachersData } from "@/lib/about-data";

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

export default async function GuruStaffPage() {
  const { teachers, statistics } = await getTeachersData();
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    users: Users,
    graduationCap: GraduationCap,
    award: Award,
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">Guru & Staff SMK Setia Karya</h1>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Tim profesional yang berdedikasi untuk membimbing dan mendukung
          kesuksesan setiap siswa
        </p>
      </div>

      {/* Stats */}
      {statistics.length > 0 && (
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {statistics.map((stat) => {
              const Icon = iconMap[stat.icon] || Users;
              return (
                <Card key={stat.id} className="text-center">
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
      )}

      {/* Kepala Sekolah */}
      {(() => {
        const principal = teachers.find(
          (t) => t.position.toLowerCase().trim() === "kepala sekolah"
        );
        return principal ? (
          <section className="mb-16">
            <h2 className="heading-2 text-center mb-8">Kepala Sekolah</h2>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="mx-auto">
                    <div className="relative aspect-square w-48 rounded-xl overflow-hidden">
                      <Image
                        src={principal.image_url}
                        alt={principal.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">
                      {principal.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {principal.position}
                    </p>
                    {principal.quote && (
                      <blockquote className="text-lg italic text-muted-foreground mb-4">
                        &ldquo;{principal.quote}&rdquo;
                      </blockquote>
                    )}
                    <div className="text-sm text-muted-foreground mb-4">
                      <p>{principal.education}</p>
                    </div>
                    {principal.email && (
                      <a
                        href={`mailto:${principal.email}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <Mail className="h-4 w-4" />
                        {principal.email}
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        ) : null;
      })()}

      {/* Guru & Staff */}
      {teachers.length > 0 && (
        <section className="mb-16">
          <h2 className="heading-2 text-center mb-8">Guru & Staff</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers
              .filter(
                (teacher) =>
                  teacher.position.toLowerCase().trim() !== "kepala sekolah"
              )
              .map((teacher) => (
                <Card
                  key={teacher.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={teacher.image_url}
                          alt={teacher.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">
                          {teacher.name}
                        </h3>
                        <p className="text-sm text-primary font-semibold mb-1">
                          {teacher.position}
                        </p>
                        <p className="text-xs text-muted-foreground mb-2">
                          {teacher.education}
                        </p>
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
      )}
    </div>
  );
}
