import { generateMetadata } from "@/lib/seo"
import { schoolSchema } from "@/lib/structured-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Award, Building } from "lucide-react"
import Image from "next/image"

export const metadata = generateMetadata({
  title: "Tentang Sekolah",
  description: "Profil lengkap SMK Setia Karya - sejarah, visi misi, dan komitmen kami dalam membentuk generasi unggul Indonesia",
  keywords: ["profil sekolah", "sejarah SMK", "visi misi sekolah", "tentang SMK Setia Karya"]
})

export default function TentangPage() {
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
          <h1 className="heading-1 mb-4">Tentang SMK Setia Karya</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lebih dari 25 tahun mengabdi dalam dunia pendidikan, membentuk generasi cerdas, berkarakter, dan berprestasi
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Kampus yang Menginspirasi</h2>
            <p className="text-lg opacity-90">Fasilitas modern untuk pembelajaran yang optimal</p>
          </div>
        </div>

        {/* Visi Misi */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Visi Sekolah</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  Menjadi lembaga pendidikan terdepan yang menghasilkan lulusan cerdas, berkarakter mulia, 
                  dan berwawasan global untuk kemajuan bangsa Indonesia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Misi Sekolah</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Menyelenggarakan pendidikan berkualitas dengan kurikulum yang inovatif",
                    "Membentuk karakter siswa berdasarkan nilai-nilai Pancasila",
                    "Mengembangkan potensi akademik dan non-akademik siswa",
                    "Menciptakan lingkungan belajar yang kondusif dan inspiratif",
                    "Membangun kemitraan dengan berbagai pihak untuk kemajuan pendidikan"
                  ].map((misi, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{misi}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sejarah */}
        <section className="mb-16">
          <h2 className="heading-2 text-center mb-8">Sejarah Singkat</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    SMK Setia Karya didirikan pada tahun 1998 dengan visi mulia untuk memberikan pendidikan 
                    berkualitas tinggi bagi generasi muda Indonesia. Berawal dari sebuah cita-cita sederhana 
                    namun mulia, sekolah ini telah berkembang menjadi salah satu institusi pendidikan 
                    terkemuka di Jakarta.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Sepanjang perjalanannya, SMK Setia Karya telah meluluskan lebih dari 10.000 alumni yang 
                    tersebar di berbagai bidang profesi dan berkontribusi positif bagi bangsa. Komitmen kami 
                    untuk terus berinovasi dalam dunia pendidikan telah mengantarkan sekolah meraih berbagai 
                    prestasi dan pengakuan.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Hari ini, SMK Setia Karya bangga menjadi Sekolah Penggerak dan meraih akreditasi A, 
                    mencerminkan dedikasi kami untuk memberikan pendidikan terbaik bagi setiap siswa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <h2 className="heading-2 text-center mb-8">SMK Setia Karya dalam Angka</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Tahun Berdiri", value: "1998", icon: Building },
              { label: "Total Alumni", value: "10,000+", icon: Users },
              { label: "Prestasi Diraih", value: "150+", icon: Award },
              { label: "Guru & Staff", value: "80+", icon: Users }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Kepala Sekolah */}
        <section>
          <h2 className="heading-2 text-center mb-8">Kepala Sekolah</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="mx-auto">
                  <div className="relative aspect-square w-48 rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                      alt="Dr. Bambang Sutrisno, M.Pd."
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-2">Dr. Bambang Sutrisno, M.Pd.</h3>
                  <p className="text-primary font-semibold mb-4">Kepala Sekolah</p>
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    &ldquo;Pendidikan bukan hanya tentang transfer ilmu, tetapi juga pembentukan karakter 
                    yang akan membawa perubahan positif bagi bangsa. Di SMK Setia Karya, kami berkomitmen 
                    membentuk pemimpin masa depan yang berintegritas tinggi.&rdquo;
                  </blockquote>
                  <div className="text-sm text-muted-foreground">
                    <p>S1 Pendidikan Matematika - Universitas Indonesia</p>
                    <p>S2 Manajemen Pendidikan - Universitas Pendidikan Indonesia</p>
                    <p>S3 Administrasi Pendidikan - Universitas Negeri Jakarta</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  )
}