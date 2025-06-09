import { generateMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  FileText,
  Users,
  Calendar,
  Phone,
  AlertCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata = generateMetadata({
  title: "PPDB - Penerimaan Peserta Didik Baru",
  description:
    "Informasi lengkap pendaftaran siswa baru SMK Setia Karya tahun ajaran 2025/2026. Daftar sekarang dan bergabunglah dengan sekolah unggulan!",
  keywords: [
    "PPDB",
    "pendaftaran siswa baru",
    "penerimaan SMK",
    "daftar sekolah",
    "SMK Setia Karya 2025",
  ],
});

// Fetch PPDB data from Supabase
async function getPPDBData() {
  try {
    // Get admission year data
    const { data: admissionYear, error: admissionYearError } = await supabase
      .from("admission_years")
      .select("*")
      .eq("tahun_ajaran", "2025/2026")
      .single();

    if (admissionYearError) throw admissionYearError;

    // Get timeline data
    const { data: timeline, error: timelineError } = await supabase
      .from("admission_timeline")
      .select("*")
      .eq("admission_year_id", admissionYear.id)
      .order("gelombang", { ascending: true });

    if (timelineError) throw timelineError;

    // Get general requirements
    const { data: generalRequirements, error: generalReqError } = await supabase
      .from("admission_requirements_general")
      .select("*")
      .eq("admission_year_id", admissionYear.id)
      .order("urutan", { ascending: true });

    if (generalReqError) throw generalReqError;

    // Get document requirements
    const { data: documentRequirements, error: documentReqError } =
      await supabase
        .from("admission_requirements_documents")
        .select("*")
        .eq("admission_year_id", admissionYear.id)
        .order("urutan", { ascending: true });

    if (documentReqError) throw documentReqError;

    // Get admission flow steps
    const { data: flowSteps, error: flowStepsError } = await supabase
      .from("admission_flow_steps")
      .select("*")
      .eq("admission_year_id", admissionYear.id)
      .order("step", { ascending: true });

    if (flowStepsError) throw flowStepsError;

    // Get study programs
    const { data: studyPrograms, error: studyProgramsError } = await supabase
      .from("study_programs")
      .select("*")
      .eq("admission_year_id", admissionYear.id);

    if (studyProgramsError) throw studyProgramsError;

    return {
      admissionYear,
      timeline,
      generalRequirements,
      documentRequirements,
      flowSteps,
      studyPrograms,
    };
  } catch (error) {
    console.error("Error fetching PPDB data:", error);
    return {
      admissionYear: null,
      timeline: [],
      generalRequirements: [],
      documentRequirements: [],
      flowSteps: [],
      contacts: null,
      studyPrograms: [],
    };
  }
}

export default async function PenerimaanPage() {
  const {
    admissionYear,
    timeline,
    generalRequirements,
    documentRequirements,
    flowSteps,
    studyPrograms,
  } = await getPPDBData();

  // Fallback if no data
  if (!admissionYear) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Data PPDB Tidak Tersedia
          </h1>
          <p className="text-gray-600">
            Silakan coba lagi nanti atau hubungi administrator.
          </p>
        </div>
      </div>
    );
  }

  // Get active gelombang
  const activeGelombang = timeline.find((g) => g.status === "aktif");
  const upcomingGelombang = timeline.find((g) => g.status === "mendatang");
  const currentGelombang = activeGelombang || upcomingGelombang;

  // Format currency
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "aktif":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "selesai":
        return <CheckCircle className="h-5 w-5 text-gray-400" />;
      case "mendatang":
        return <Clock className="h-5 w-5 text-orange-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "aktif":
        return <Badge className="bg-green-600 text-white">Aktif</Badge>;
      case "selesai":
        return (
          <Badge variant="secondary" className="bg-gray-100 text-gray-600">
            Selesai
          </Badge>
        );
      case "mendatang":
        return <Badge className="bg-orange-600 text-white">Mendatang</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">PPDB {admissionYear.tahun_ajaran}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Penerimaan Peserta Didik Baru SMK Setia Karya - Wujudkan Masa Depan
          Cemerlang Bersama Kami
        </p>
      </div>

      {/* Status Pendaftaran */}
      <Card
        className={`mb-12 ${
          admissionYear.status === "Dibuka"
            ? "bg-green-50 border-green-200"
            : "bg-orange-50 border-orange-200"
        }`}
      >
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {admissionYear.status === "Dibuka" ? (
              <CheckCircle className="h-6 w-6 text-green-600" />
            ) : (
              <Clock className="h-6 w-6 text-orange-600" />
            )}
            <span
              className={`text-2xl font-bold ${
                admissionYear.status === "Dibuka"
                  ? "text-green-800"
                  : "text-orange-800"
              }`}
            >
              PENDAFTARAN {admissionYear.status.toUpperCase()}!
            </span>
          </div>
          {currentGelombang && (
            <p
              className={`text-lg mb-6 ${
                admissionYear.status === "Dibuka"
                  ? "text-green-700"
                  : "text-orange-700"
              }`}
            >
              {currentGelombang.nama} - {currentGelombang.periode}
              {currentGelombang.diskon && (
                <span className="block text-sm mt-1 font-semibold">
                  {currentGelombang.diskon}
                </span>
              )}
            </p>
          )}
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
          {timeline.map((gelombang, index) => (
            <Card
              key={index}
              className={`relative ${
                gelombang.status === "aktif"
                  ? "border-primary bg-primary/5"
                  : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{gelombang.nama}</CardTitle>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(gelombang.status)}
                    {getStatusBadge(gelombang.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">{gelombang.periode}</p>
                {gelombang.diskon && (
                  <p className="text-sm text-green-600 font-medium mb-2">
                    {gelombang.diskon}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mb-3">
                  Biaya masuk: {formatRupiah(gelombang.biaya_masuk)}
                </p>
                <div className="text-xs text-gray-500">
                  Gelombang {gelombang.gelombang}
                </div>
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
                {documentRequirements.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{doc.dokumen}</span>
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
                {generalRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{req.requirement}</span>
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
              <CardTitle className="flex items-center gap-2">
                Biaya Masuk (Sekali Bayar)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Uang Pangkal</span>
                  <span className="font-semibold">
                    {formatRupiah(admissionYear.biaya_masuk_normal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Pendaftaran</span>
                  <span className="font-semibold">
                    {formatRupiah(admissionYear.biaya_pendaftaran)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Seragam & Buku</span>
                  <span className="font-semibold">
                    {formatRupiah(
                      admissionYear.biaya_seragam + admissionYear.biaya_buku
                    )}
                  </span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>
                    {formatRupiah(
                      admissionYear.biaya_masuk_normal +
                        admissionYear.biaya_pendaftaran +
                        admissionYear.biaya_seragam +
                        admissionYear.biaya_buku
                    )}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                SPP Bulanan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>SPP per Bulan</span>
                  <span className="font-semibold">
                    {formatRupiah(admissionYear.biaya_spp_bulanan)}
                  </span>
                </div>
                {admissionYear.spp_keterangan && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-md">
                    <p className="text-sm text-blue-800">
                      <strong>Keterangan:</strong>{" "}
                      {admissionYear.spp_keterangan}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Studi */}
      <section className="mb-12">
        <h2 className="heading-2 text-center mb-8">Program Studi</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {studyPrograms.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{program.nama}</CardTitle>
                  <Badge variant="outline" className="text-sm">
                    {program.kode}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {program.deskripsi}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Kuota tersedia:</span>
                  <span className="font-semibold text-lg text-green-600">
                    {program.kuota} siswa
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section className="mb-12">
        <h2 className="heading-2 text-center mb-8">Alur Pendaftaran</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {flowSteps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.judul}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {step.deskripsi}
                </p>
                {step.waktu && (
                  <p className="text-xs text-blue-600 font-medium">
                    Estimasi: {step.waktu}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">
                    Pemberitahuan Penting
                  </h3>
                  <div className="text-sm text-amber-700 space-y-1">
                    <p>
                      • Informasi ini dapat berubah sewaktu-waktu sesuai dengan
                      kebijakan sekolah
                    </p>
                    <p>
                      • Untuk informasi terbaru, silakan hubungi kontak yang
                      tersedia
                    </p>
                    <p>
                      • Pastikan semua dokumen persyaratan sudah lengkap sebelum
                      mendaftar
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
                <div className="text-3xl font-bold text-red-400 mb-2">
                  {studyPrograms.reduce(
                    (total, program) => total + program.kuota,
                    0
                  )}
                  +
                </div>
                <div className="text-sm text-blue-100">Kuota Tersedia</div>
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
            {activeGelombang && (
              <div className="mt-8 p-4 bg-yellow-500/20 border border-yellow-400/30 rounded-lg">
                <p className="text-yellow-200 font-semibold">
                  ⏰ {activeGelombang.nama} berlangsung hingga{" "}
                  <span className="text-yellow-400 font-bold">
                    {activeGelombang.periode.split(" - ")[1]}!
                  </span>{" "}
                  Jangan sampai terlewat!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
