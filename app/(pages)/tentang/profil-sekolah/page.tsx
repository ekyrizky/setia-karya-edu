import { generateMetadata } from "@/lib/seo"
import { schoolSchema } from "@/lib/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, Award, BookOpen, Target, Heart } from "lucide-react"
import Image from "next/image"

export const metadata = generateMetadata({
  title: "Profil Sekolah - SMK Setia Karya",
  description: "Profil lengkap SMK Setia Karya - sejarah, prestasi, dan komitmen kami dalam membentuk generasi unggul Indonesia",
  keywords: ["profil sekolah", "sejarah SMK", "SMK Setia Karya", "sekolah unggulan Jakarta"]
})

export default function ProfilSekolahPage() {
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
            Lebih dari 25 tahun mengabdi dalam dunia pendidikan, membentuk generasi cerdas, berkarakter, dan berprestasi untuk kemajuan bangsa Indonesia
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

        {/* Sejarah Section */}
        <section className="mb-16">
          <h2 className="heading-2 text-center mb-8">Sejarah SMK Setia Karya</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="leading-relaxed mb-6">
                    SMK Setia Karya memulai perjalanannya pada tahun 1998 dengan sebuah visi mulia untuk memberikan 
                    pendidikan berkualitas tinggi bagi generasi muda Indonesia. Didirikan oleh sekelompok pendidik 
                    visioner yang melihat pentingnya pendidikan kejuruan dalam mempersiapkan siswa menghadapi dunia 
                    kerja, sekolah ini dimulai dengan fasilitas sederhana namun semangat yang luar biasa. Berawal 
                    dari hanya 3 ruang kelas dengan 90 siswa dan 12 guru, SMK Setia Karya bertekad untuk menjadi 
                    institusi pendidikan yang membentuk karakter dan kompetensi siswa.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    Memasuki periode 2005-2015, SMK Setia Karya mengalami fase ekspansi yang signifikan. Dukungan 
                    dari berbagai pihak memungkinkan pembangunan gedung-gedung baru, laboratorium modern, dan 
                    fasilitas olahraga yang lengkap. Pada periode ini pula, sekolah mulai membuka program-program 
                    studi baru yang disesuaikan dengan kebutuhan industri. Pencapaian membanggakan datang pada tahun 
                    2010 ketika SMK Setia Karya berhasil meraih akreditasi A dari BAN-S/M, sebuah pengakuan atas 
                    kualitas pendidikan yang telah dibangun. Jumlah siswa meningkat drastis menjadi lebih dari 1.500 
                    siswa dengan tenaga pendidik yang mencapai 80 orang.
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    Era digital yang dimulai sejak 2016 membawa transformasi besar dalam metode pembelajaran di SMK 
                    Setia Karya. Sekolah berinvestasi dalam teknologi pendidikan, memperkenalkan pembelajaran berbasis 
                    digital, dan membangun kemitraan dengan berbagai perusahaan teknologi. Implementasi Kurikulum 
                    Merdeka menjadi tonggak penting dalam memberikan fleksibilitas dan relevansi pembelajaran. 
                    Pengakuan sebagai Sekolah Penggerak pada tahun 2021 semakin menegaskan posisi SMK Setia Karya 
                    sebagai institusi pendidikan yang progresif dan inovatif.
                  </p>
                  
                  <p className="leading-relaxed">
                    Hari ini, setelah lebih dari 25 tahun mengabdi dalam dunia pendidikan, SMK Setia Karya telah 
                    meluluskan lebih dari 10.000 alumni yang tersebar di berbagai sektor industri. Dengan 5 program 
                    studi unggulan, fasilitas modern, dan tim pendidik berkualitas, sekolah terus berkomitmen untuk 
                    menghasilkan lulusan yang tidak hanya kompeten secara teknis, tetapi juga memiliki karakter mulia 
                    dan siap berkontribusi bagi kemajuan bangsa. Perjalanan panjang ini adalah bukti dedikasi dan 
                    kerja keras seluruh keluarga besar SMK Setia Karya dalam mewujudkan pendidikan berkualitas untuk 
                    Indonesia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 bg-gray-50 py-12 rounded-lg">
          <h2 className="heading-2 text-center mb-8">SMK Setia Karya dalam Angka</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Tahun Berdiri", value: "1998", icon: Building, color: "text-blue-600 bg-blue-100" },
              { label: "Total Alumni", value: "10,000+", icon: Users, color: "text-green-600 bg-green-100" },
              { label: "Prestasi Diraih", value: "150+", icon: Award, color: "text-yellow-600 bg-yellow-100" },
              { label: "Program Studi", value: "5", icon: BookOpen, color: "text-purple-600 bg-purple-100" }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Nilai-Nilai Section */}
        <section className="mb-16">
          <h2 className="heading-2 text-center mb-8">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Integritas",
                description: "Menjunjung tinggi kejujuran, etika, dan tanggung jawab dalam setiap tindakan"
              },
              {
                icon: Heart,
                title: "Kepedulian",
                description: "Membangun empati dan kepedulian sosial untuk menciptakan dampak positif"
              },
              {
                icon: Award,
                title: "Keunggulan",
                description: "Selalu berusaha memberikan yang terbaik dan terus berinovasi"
              }
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-10 w-10 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Akreditasi & Sertifikasi */}
        <section className="mb-16">
          <h2 className="heading-2 text-center mb-8">Akreditasi & Sertifikasi</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Akreditasi A", subtitle: "BAN-S/M", year: "2020-2025" },
                { title: "Sekolah Penggerak", subtitle: "Kemendikbud", year: "2021" },
                { title: "ISO 9001:2015", subtitle: "Manajemen Mutu", year: "2019" },
                { title: "Sekolah Adiwiyata", subtitle: "Lingkungan Hidup", year: "2020" }
              ].map((cert, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{cert.subtitle}</p>
                    <p className="text-xs text-blue-600 font-semibold">{cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Keluarga Besar SMK Setia Karya</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Mari bersama-sama membangun masa depan yang cerah melalui pendidikan berkualitas
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/penerimaan" className="btn btn-primary bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold">
              Daftar Sekarang
            </a>
            <a href="/tentang/visi-misi" className="btn btn-outline bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
              Lihat Visi & Misi
            </a>
          </div>
        </section>
      </div>
    </>
  )
}