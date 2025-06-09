import { generateMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Clock,
  FileText,
  Users,
  Calendar,
  Phone,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import ppdbData from "@/data/content/ppdb.json";

export const metadata = generateMetadata({
  title: "PPDB - Penerimaan Peserta Didik Baru",
  description:
    "Informasi lengkap pendaftaran siswa baru SMK Setia Karya tahun ajaran 2024/2025. Daftar sekarang dan bergabunglah dengan sekolah unggulan!",
  keywords: [
    "PPDB",
    "pendaftaran siswa baru",
    "penerimaan SMK",
    "daftar sekolah",
    "SMK Setia Karya 2024",
  ],
});

export default function PenerimaanPage() {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">
          PPDB {ppdbData.tahunAjaran}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Penerimaan Peserta Didik Baru SMK Setia Karya - Wujudkan Masa Depan
          Cemerlang Bersama Kami
        </p>
      </div>

      {/* Status Pendaftaran */}
      <Card className="mb-12 bg-green-50 border-green-200">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span className="text-2xl font-bold text-green-800">
              PENDAFTARAN DIBUKA!
            </span>
          </div>
          <p className="text-lg text-green-700 mb-6">
            Pendaftaran gelombang II dibuka hingga 31 Maret {nextYear}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/kontak">Daftar Online Sekarang</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href={getWhatsAppUrl(
                  siteConfig.links.whatsapp,
                  "Halo, saya ingin bertanya tentang PPDB SMK Setia Karya"
                )}
              >
                <Phone className="mr-2 h-4 w-4" />
                Konsultasi WhatsApp
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Pendaftaran */}
      <section className="mb-12">
        <h2 className="heading-2 text-center mb-8">Timeline Pendaftaran</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Gelombang I",
              period: "1 Januari - 28 Februari",
              status: "completed",
              description: "Pendaftaran awal dengan kuota terbatas",
            },
            {
              title: "Gelombang II",
              period: "1 Maret - 31 Maret",
              status: "active",
              description: "Pendaftaran reguler sedang berlangsung",
            },
            {
              title: "Gelombang III",
              period: "1 April - 30 April",
              status: "upcoming",
              description: "Pendaftaran terakhir (jika masih ada kuota)",
            },
          ].map((gelombang, index) => (
            <Card
              key={index}
              className={`relative ${
                gelombang.status === "active"
                  ? "border-primary bg-primary/5"
                  : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{gelombang.title}</CardTitle>
                  {gelombang.status === "active" && (
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                      Aktif
                    </span>
                  )}
                  {gelombang.status === "completed" && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  {gelombang.status === "upcoming" && (
                    <Clock className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">
                  {gelombang.period} {nextYear}
                </p>
                <p className="text-muted-foreground">{gelombang.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Syarat Pendaftaran */}
      <section className="mb-12">
        <h2 className="heading-2 text-center mb-8">Syarat Pendaftaran</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Dokumen yang Diperlukan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Ijazah SMP/MTs atau Surat Keterangan Lulus",
                  "SKHUN (Surat Keterangan Hasil Ujian Nasional)",
                  "Rapor SMP semester 1-5",
                  "Akta Kelahiran",
                  "Kartu Keluarga",
                  "Pas foto 3x4 (6 lembar)",
                  "Surat keterangan sehat dari dokter",
                  "Surat keterangan kelakuan baik",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Persyaratan Calon Siswa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Lulusan SMP/MTs tahun 2023 atau 2024",
                  "Nilai rata-rata rapor minimal 7.5",
                  "Tidak buta warna (untuk jurusan IPA)",
                  "Sehat jasmani dan rohani",
                  "Berkelakuan baik",
                  "Mampu membaca Al-Qur'an",
                  "Lulus tes masuk sekolah",
                  "Mengikuti wawancara dengan orang tua",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Biaya Pendidikan */}
      <section className="mb-12">
        <h2 className="heading-2 text-center mb-8">Biaya Pendidikan</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Biaya Masuk (Sekali Bayar)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Uang Pangkal</span>
                  <span className="font-semibold">Rp 15.000.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Uang Gedung</span>
                  <span className="font-semibold">Rp 8.000.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Seragam & Buku</span>
                  <span className="font-semibold">Rp 2.500.000</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>Rp 25.500.000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SPP Bulanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>SPP Reguler</span>
                  <span className="font-semibold">Rp 1.200.000/bulan</span>
                </div>
                <div className="flex justify-between">
                  <span>Uang Kegiatan</span>
                  <span className="font-semibold">Rp 300.000/bulan</span>
                </div>
                <div className="flex justify-between">
                  <span>Makan Siang</span>
                  <span className="font-semibold">Rp 200.000/bulan</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total per Bulan</span>
                  <span>Rp 1.700.000</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-800">
                  <strong>Catatan:</strong> Tersedia program beasiswa untuk
                  siswa berprestasi dan kurang mampu.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section className="mb-12">
        <h2 className="heading-2 text-center mb-8">Alur Pendaftaran</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Daftar Online",
              description:
                "Lengkapi formulir pendaftaran online dan upload dokumen",
            },
            {
              step: "2",
              title: "Pembayaran",
              description: "Bayar biaya pendaftaran Rp 500.000",
            },
            {
              step: "3",
              title: "Tes Masuk",
              description: "Ikuti tes akademik dan wawancara",
            },
            {
              step: "4",
              title: "Pengumuman",
              description:
                "Hasil pengumuman akan disampaikan via email dan WhatsApp",
            },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
        <div className="relative z-10 p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Wujudkan Impian Pendidikan Terbaikmu!
              </h2>
              <p className="text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan alumni sukses SMK Setia Karya. Masa
                depan cemerlang dimulai dari sini!
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  25+
                </div>
                <div className="text-sm text-blue-100">Tahun Pengalaman</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  95%
                </div>
                <div className="text-sm text-blue-100">Tingkat Kelulusan</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">10K+</div>
                <div className="text-sm text-blue-100">Alumni Sukses</div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg"
                  asChild
                >
                  <Link href="/kontak">
                    <Calendar className="mr-2 h-5 w-5" />
                    Daftar Online Sekarang
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg"
                  asChild
                >
                  <a
                    href={getWhatsAppUrl(
                      siteConfig.links.whatsapp,
                      "Halo, saya tertarik dengan PPDB SMK Setia Karya. Bisa tolong berikan informasi lengkapnya?"
                    )}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Konsultasi WhatsApp
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Pendaftaran Mudah</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Konsultasi Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Beasiswa Tersedia</span>
                </div>
              </div>
            </div>

            {/* Urgency */}
            <div className="mt-8 p-4 bg-yellow-500/20 border border-yellow-400/30 rounded-lg">
              <p className="text-yellow-200 font-semibold">
                ⏰ Pendaftaran Gelombang II berakhir dalam{" "}
                <span className="text-yellow-400 font-bold">15 hari lagi!</span>{" "}
                Jangan sampai terlewat!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
