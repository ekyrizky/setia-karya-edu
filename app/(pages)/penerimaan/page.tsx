import { generateMetadata } from "@/lib/seo";
import { getAdmissionData, getActiveAdmissionWave } from "@/lib/admission-data";
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
import Link from "next/link";
import { getContactData } from "@/lib/contact-data";

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

export default async function PenerimaanPage() {
  const { timeline, requirements, fees, registrationFlow, studyPrograms } =
    await getAdmissionData();
  const { contact } = await getContactData();

  const activeWave = await getActiveAdmissionWave();

  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  // Group requirements by type
  const generalRequirements = requirements.filter(
    (req) => req.type === "general"
  );
  const documentRequirements = requirements.filter(
    (req) => req.type === "documents"
  );

  // Group fees by category
  const entranceFees = fees.filter((fee) => fee.category === "entrance");
  const registrationFees = fees.filter(
    (fee) => fee.category === "registration"
  );
  const tuitionFees = fees.filter((fee) => fee.category === "tuition");
  const uniformFees = fees.filter((fee) => fee.category === "uniform");
  const bookFees = fees.filter((fee) => fee.category === "books");

  // Calculate total entrance fee (normal rate)
  const normalEntranceFee = entranceFees.find(
    (fee) => fee.subcategory === "normal"
  );
  const registrationFee = registrationFees[0];
  const uniformFee = uniformFees[0];
  const bookFee = bookFees[0];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (!timeline && !requirements && !fees && !registrationFlow) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h1 className="heading-1 mb-4">
            PPDB - Penerimaan Peserta Didik Baru
          </h1>
          <p className="text-muted-foreground">
            Data pendaftaran sedang dimuat atau tidak tersedia.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">
          PPDB {currentYear}/{nextYear}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Penerimaan Peserta Didik Baru SMK Setia Karya - Wujudkan Masa Depan
          Cemerlang Bersama Kami
        </p>
      </div>

      {/* Status Pendaftaran */}
      {activeWave && (
        <Card className="mb-12 bg-green-50 border-green-200">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-2xl font-bold text-green-800">
                PENDAFTARAN DIBUKA!
              </span>
            </div>
            <p className="text-lg text-green-700 mb-6">
              {activeWave.name} - {activeWave.period}
              {activeWave.discount && (
                <span className="block text-sm mt-2 font-semibold text-green-800">
                  🎉 {activeWave.discount}
                </span>
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/kontak">Daftar Online Sekarang</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href={getWhatsAppUrl(
                    "+6281234567890", // You may want to get this from your contact data
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
      )}

      {/* Timeline Pendaftaran */}
      {timeline && timeline.length > 0 && (
        <section className="mb-12">
          <h2 className="heading-2 text-center mb-8">Timeline Pendaftaran</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((wave) => (
              <Card
                key={wave.id}
                className={`relative ${
                  wave.status === "active" ? "border-primary bg-primary/5" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{wave.name}</CardTitle>
                    {wave.status === "active" && (
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                        Aktif
                      </span>
                    )}
                    {wave.status === "completed" && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                    {wave.status === "upcoming" && (
                      <Clock className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">{wave.period}</p>
                  {wave.discount && (
                    <p className="text-green-600 text-sm font-medium mb-2">
                      🎉 {wave.discount}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Syarat Pendaftaran */}
      <section className="mb-12">
        <h2 className="heading-2 text-center mb-8">Syarat Pendaftaran</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Dokumen yang Diperlukan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Dokumen yang Diperlukan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {documentRequirements.map((req) => (
                  <li key={req.id} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{req.requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Persyaratan Umum */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Persyaratan Calon Siswa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {generalRequirements.map((req) => (
                  <li key={req.id} className="flex items-start gap-3">
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
              <CardTitle>Biaya Masuk (Sekali Bayar)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {registrationFee && (
                  <div className="flex justify-between">
                    <span>Uang Pendaftaran</span>
                    <span className="font-semibold">
                      {formatCurrency(registrationFee.amount)}
                    </span>
                  </div>
                )}
                {normalEntranceFee && (
                  <div className="flex justify-between">
                    <span>Uang Masuk</span>
                    <span className="font-semibold">
                      {formatCurrency(normalEntranceFee.amount)}
                    </span>
                  </div>
                )}
                {uniformFee && (
                  <div className="flex justify-between">
                    <span>Seragam</span>
                    <span className="font-semibold">
                      {formatCurrency(uniformFee.amount)}
                    </span>
                  </div>
                )}
                {bookFee && (
                  <div className="flex justify-between">
                    <span>Buku</span>
                    <span className="font-semibold">
                      {formatCurrency(bookFee.amount)}
                    </span>
                  </div>
                )}
                {registrationFee &&
                  normalEntranceFee &&
                  uniformFee &&
                  bookFee && (
                    <>
                      <hr />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>
                          {formatCurrency(
                            registrationFee.amount +
                              normalEntranceFee.amount +
                              uniformFee.amount +
                              bookFee.amount
                          )}
                        </span>
                      </div>
                    </>
                  )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SPP Bulanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tuitionFees.map((fee) => (
                  <div key={fee.id} className="flex justify-between">
                    <span>{fee.subcategory ? fee.subcategory : "SPP"}</span>
                    <span className="font-semibold">
                      {formatCurrency(fee.amount)}
                    </span>
                  </div>
                ))}
                {tuitionFees.length > 0 && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-md">
                    <p className="text-sm text-blue-800">
                      <strong>Catatan:</strong>{" "}
                      {tuitionFees[0]?.note ||
                        "Tersedia program beasiswa untuk siswa berprestasi dan kurang mampu."}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Studi */}
      {studyPrograms && studyPrograms.length > 0 && (
        <section className="mb-12">
          <h2 className="heading-2 text-center mb-8">Program Studi Tersedia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {studyPrograms.map((program) => (
              <Card key={program.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{program.name}</span>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                      {program.code}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {program.description && (
                    <p className="text-muted-foreground mb-3">
                      {program.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Kuota tersedia:
                    </span>
                    <span className="font-semibold text-green-600">
                      {program.quota} siswa
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Alur Pendaftaran */}
      {registrationFlow && registrationFlow.length > 0 && (
        <section className="mb-12">
          <h2 className="heading-2 text-center mb-8">Alur Pendaftaran</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {registrationFlow.map((item) => (
              <Card key={item.id} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.description}
                  </p>
                  {item.duration && (
                    <p className="text-xs text-primary font-medium">
                      {item.duration}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

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
                {contact && (
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg"
                    asChild
                  >
                    <a
                      href={getWhatsAppUrl(
                        contact.whatsapp,
                        contact.whatsapp_message
                      )}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Konsultasi WhatsApp
                    </a>
                  </Button>
                )}
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
            {activeWave && (
              <div className="mt-8 p-4 bg-yellow-500/20 border border-yellow-400/30 rounded-lg">
                <p className="text-yellow-200 font-semibold">
                  ⏰ {activeWave.name} berlangsung sampai{" "}
                  <span className="text-yellow-400 font-bold">
                    {activeWave.period}
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
