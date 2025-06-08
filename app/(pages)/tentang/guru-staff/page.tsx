import { generateMetadata } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Award, GraduationCap, Users } from "lucide-react";
import Image from "next/image";

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

interface StaffMember {
  name: string;
  position: string;
  education: string;
  image: string;
  email?: string;
  specialization?: string;
}

export default function GuruStaffPage() {
  const principal: StaffMember = {
    name: "Drs. H. Yusup, M.Pd.",
    position: "Kepala Sekolah",
    education: "S3 Administrasi Pendidikan - UNJ",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=300&h=300&fit=crop&crop=face",
    email: "kepsek@smksetiakarya.sch.id",
  };

  const allStaff: StaffMember[] = [
    {
      name: "Dra. Sri Wahyuni, M.M.",
      position: "Wakil Kepala Sekolah Bidang Kurikulum",
      education: "S2 Manajemen Pendidikan - UI",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
      email: "wakakur@smksetiakarya.sch.id",
    },
    {
      name: "Ahmad Fauzi, S.Pd., M.Pd.",
      position: "Wakil Kepala Sekolah Bidang Kesiswaan",
      education: "S2 Manajemen Pendidikan - UNY",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop&crop=face",
      email: "wakasis@smksetiakarya.sch.id",
    },
    {
      name: "Ir. Hendra Kusuma, M.T.",
      position: "Wakil Kepala Sekolah Bidang Sarana Prasarana",
      education: "S2 Teknik Sipil - ITB",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      email: "wakasarpras@smksetiakarya.sch.id",
    },
    {
      name: "Dr. Siti Nurhaliza, M.Si.",
      position: "Guru Matematika",
      education: "S3 Pendidikan Matematika - UPI",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      specialization: "Matematika & Statistika",
    },
    {
      name: "Muhammad Rizki, S.Pd., M.Pd.",
      position: "Guru Bahasa Indonesia",
      education: "S2 Pendidikan Bahasa - UNJ",
      image:
        "https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=300&h=300&fit=crop&crop=face",
      specialization: "Sastra & Linguistik",
    },
    {
      name: "Sarah Johnson, M.Ed.",
      position: "Guru Bahasa Inggris",
      education: "Master of Education - Harvard",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=300&h=300&fit=crop&crop=face",
      specialization: "TOEFL & IELTS Preparation",
    },
    {
      name: "Ir. Budi Santoso, M.T.",
      position: "Guru Teknik Komputer",
      education: "S2 Teknik Informatika - ITS",
      image:
        "https://images.unsplash.com/photo-1548449112-96a38a643324?w=300&h=300&fit=crop&crop=face",
      specialization: "Programming & Networking",
    },
    {
      name: "Dra. Maya Sari, M.Ak.",
      position: "Guru Akuntansi",
      education: "S2 Akuntansi - UNPAD",
      image:
        "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=300&h=300&fit=crop&crop=face",
      specialization: "Akuntansi & Perpajakan",
    },
    {
      name: "Ahmad Yani, S.Pd., M.Or.",
      position: "Guru Pendidikan Jasmani",
      education: "S2 Ilmu Keolahragaan - UNY",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&h=300&fit=crop&crop=face",
      specialization: "Olahraga & Kesehatan",
    },
    {
      name: "Ratna Dewi, S.E.",
      position: "Kepala Tata Usaha",
      education: "S1 Manajemen - UNPAD",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Andi Prasetyo, A.Md.",
      position: "Staff Administrasi",
      education: "D3 Administrasi Perkantoran",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Lina Marlina, S.Psi.",
      position: "Konselor / BK",
      education: "S1 Psikologi - UI",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Dr. Hartono, Sp.A.",
      position: "Dokter Sekolah",
      education: "Spesialis Anak - UNAIR",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    },
  ];

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
      <section className="mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              label: "Total Guru & Staff",
              value: "85",
              color: "bg-blue-100 text-blue-600",
            },
            {
              icon: GraduationCap,
              label: "Guru S2/S3",
              value: "65%",
              color: "bg-green-100 text-green-600",
            },
            {
              icon: Award,
              label: "Guru Bersertifikat",
              value: "100%",
              color: "bg-yellow-100 text-yellow-600",
            },
            {
              icon: Users,
              label: "Rasio Guru:Siswa",
              value: "1:20",
              color: "bg-purple-100 text-purple-600",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-4`}
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
                    src={principal.image}
                    alt={principal.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-2">{principal.name}</h3>
                <p className="text-primary font-semibold mb-4">
                  {principal.position}
                </p>
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  &ldquo;Pendidikan bukan hanya tentang transfer ilmu, tetapi
                  juga pembentukan karakter yang akan membawa perubahan positif
                  bagi bangsa. Di SMK Setia Karya, kami berkomitmen membentuk
                  pemimpin masa depan yang berintegritas tinggi.&rdquo;
                </blockquote>
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

      {/* Guru & Staff */}
      <section className="mb-16">
        <h2 className="heading-2 text-center mb-8">Guru & Staff</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allStaff.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-1">
                      {member.position}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">
                      {member.education}
                    </p>
                    {member.specialization && (
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold">Spesialisasi:</span>{" "}
                        {member.specialization}
                      </p>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
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

        {/* Show More Staff */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Dan 70+ guru & staff profesional lainnya
          </p>
        </div>
      </section>

      {/* Professional Development */}
      <section className="mb-16 bg-gray-50 py-12 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">
            Pengembangan Profesional Berkelanjutan
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            SMK Setia Karya berkomitmen untuk terus meningkatkan kualitas
            pendidik melalui berbagai program pengembangan
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Pelatihan Rutin",
                desc: "Workshop dan seminar bulanan untuk update metode pembelajaran terkini",
              },
              {
                title: "Sertifikasi Kompetensi",
                desc: "Program sertifikasi nasional dan internasional untuk guru",
              },
              {
                title: "Studi Lanjut",
                desc: "Dukungan penuh untuk guru yang melanjutkan pendidikan S2/S3",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
