import { generateMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Trophy,
  AlertCircle,
  Download,
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata = generateMetadata({
  title: "Kalender Akademik",
  description:
    "Kalender akademik SMK Setia Karya tahun ajaran 2024/2025 - jadwal kegiatan pembelajaran dan non-pembelajaran",
  keywords: [
    "kalender akademik",
    "jadwal sekolah",
    "tahun ajaran",
    "kegiatan sekolah",
    "semester",
    "libur sekolah",
  ],
});

// Fetch data from Supabase
async function getKalenderData() {
  try {
    // Get school year data
    const { data: schoolYear, error: schoolYearError } = await supabase
      .from("school_year")
      .select("*")
      .eq("tahun_ajaran", "2024/2025")
      .single();

    if (schoolYearError) throw schoolYearError;

    // Get activities data
    const { data: activities, error: activitiesError } = await supabase
      .from("activities")
      .select("*")
      .eq("school_year_id", schoolYear.id)
      .order("tanggal", { ascending: true });

    if (activitiesError) throw activitiesError;

    // Get holidays data
    const { data: holidays, error: holidaysError } = await supabase
      .from("holidays")
      .select("*")
      .eq("school_year_id", schoolYear.id)
      .order("tanggal", { ascending: true });

    if (holidaysError) throw holidaysError;

    return {
      schoolYear,
      activities,
      holidays,
    };
  } catch (error) {
    console.error("Error fetching kalender data:", error);
    return {
      schoolYear: null,
      activities: [],
      holidays: [],
    };
  }
}

export default async function KalenderPage() {
  const { schoolYear, activities, holidays } = await getKalenderData();

  // Fallback if no data
  if (!schoolYear) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Data Kalender Tidak Tersedia
          </h1>
          <p className="text-gray-600">
            Silakan coba lagi nanti atau hubungi administrator.
          </p>
        </div>
      </div>
    );
  }

  const currentYear = schoolYear.tahun_ajaran;

  const semesterData = [
    {
      semester:
        schoolYear.semester_ganjil_nama?.replace("Semester ", "") || "Ganjil",
      periode: schoolYear.semester_ganjil_periode || "",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      semester:
        schoolYear.semester_genap_nama?.replace("Semester ", "") || "Genap",
      periode: schoolYear.semester_genap_periode || "",
      color: "bg-green-100 text-green-800 border-green-200",
    },
  ];

  const getIconForCategory = (kategori: string) => {
    switch (kategori) {
      case "akademik":
        return BookOpen;
      case "kegiatan":
      case "nasional":
        return Users;
      case "lomba":
        return Trophy;
      case "prakerin":
        return MapPin;
      default:
        return BookOpen;
    }
  };

  const getCategoryColor = (kategori: string) => {
    switch (kategori) {
      case "akademik":
        return "bg-blue-50 border-blue-200";
      case "kegiatan":
      case "nasional":
        return "bg-purple-50 border-purple-200";
      case "lomba":
        return "bg-yellow-50 border-yellow-200";
      case "prakerin":
        return "bg-green-50 border-green-200";
      case "ppdb":
        return "bg-indigo-50 border-indigo-200";
      case "libur":
        return "bg-gray-50 border-gray-200";
      case "kelulusan":
        return "bg-amber-50 border-amber-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const formatTanggal = (tanggal: string, tanggalSelesai?: string) => {
    try {
      if (tanggalSelesai) {
        const start = new Date(tanggal).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        const end = new Date(tanggalSelesai).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        return `${start} - ${end}`;
      }
      return new Date(tanggal).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return tanggal;
    }
  };

  // Group activities by category
  const kegiatanByCategory = activities.reduce((acc: any, kegiatan: any) => {
    if (!acc[kegiatan.kategori]) {
      acc[kegiatan.kategori] = [];
    }
    acc[kegiatan.kategori].push({
      tanggal: formatTanggal(kegiatan.tanggal, kegiatan.tanggal_selesai),
      nama: kegiatan.nama,
      deskripsi: kegiatan.deskripsi,
      lokasi: "SMK Setia Karya",
      status: kegiatan.status,
    });
    return acc;
  }, {});

  const kegiatan = Object.entries(kegiatanByCategory).map(
    ([kategori, items]) => ({
      kategori: kategori.charAt(0).toUpperCase() + kategori.slice(1),
      icon: getIconForCategory(kategori),
      color: getCategoryColor(kategori),
      items: items,
    })
  );

  // Process holidays
  const libur = holidays.map((hari) => {
    let status = "mendatang";
    try {
      status = new Date(hari.tanggal) < new Date() ? "selesai" : "mendatang";
    } catch {
      // Default to 'mendatang' if date parsing fails
    }

    return {
      tanggal: formatTanggal(hari.tanggal, hari.tanggal_selesai),
      nama: hari.nama,
      status: status,
    };
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "selesai":
        return (
          <Badge variant="secondary" className="bg-gray-100 text-gray-600">
            Selesai
          </Badge>
        );
      case "berlangsung":
        return <Badge className="bg-blue-600 text-white">Berlangsung</Badge>;
      case "mendatang":
        return <Badge className="bg-green-600 text-white">Mendatang</Badge>;
      default:
        return null;
    }
  };

  // Calculate statistics
  const totalActivities = activities.length;
  const prakerin = activities.filter((a) => a.kategori === "prakerin").length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kalender Akademik
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Tahun Ajaran {currentYear}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {semesterData.map((semester, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Semester {semester.semester}
                  </h3>
                  <p className="opacity-90">{semester.periode}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="font-bold text-lg">36 Minggu</div>
                <div className="text-sm text-gray-600">Minggu Efektif</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="font-bold text-lg">2 Semester</div>
                <div className="text-sm text-gray-600">Periode Belajar</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <div className="font-bold text-lg">
                  {totalActivities}+ Event
                </div>
                <div className="text-sm text-gray-600">Kegiatan & Lomba</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="font-bold text-lg">{prakerin} Program</div>
                <div className="text-sm text-gray-600">Praktek Kerja</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kegiatan Akademik */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Jadwal Kegiatan
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rencana kegiatan akademik dan non-akademik sepanjang tahun ajaran
            </p>
          </div>

          <div className="space-y-12">
            {kegiatan.map((kategori, categoryIndex) => {
              const Icon = kategori.icon;
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {kategori.kategori}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {kategori.items.map((item, itemIndex) => (
                      <Card
                        key={itemIndex}
                        className={`${kategori.color} border-2 hover:shadow-lg transition-shadow`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">
                              {item.nama}
                            </CardTitle>
                            {getStatusBadge(item.status)}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span className="font-medium">{item.tanggal}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{item.lokasi}</span>
                          </div>
                          <p className="text-sm text-gray-700">
                            {item.deskripsi}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hari Libur */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Hari Libur Nasional
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hari libur resmi selama tahun ajaran {currentYear}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {libur.map((hari, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {hari.nama}
                        </h3>
                        <p className="text-sm text-gray-600">{hari.tanggal}</p>
                      </div>
                      {getStatusBadge(hari.status)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download & Info */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Download className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Download Kalender Akademik
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Unduh kalender akademik lengkap dalam format PDF untuk
                    referensi dan perencanaan kegiatan
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </button>
                    <Link
                      href="/kontak"
                      className="border border-blue-300 hover:bg-blue-50 text-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Hubungi Bagian Akademik
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Pemberitahuan Penting
                    </h3>
                    <div className="text-sm text-amber-700 space-y-1">
                      <p>
                        • Jadwal dapat berubah sewaktu-waktu sesuai dengan
                        kebijakan sekolah
                      </p>
                      <p>
                        • Informasi terbaru akan diumumkan melalui website dan
                        grup WhatsApp
                      </p>
                      <p>
                        • Untuk informasi lebih lanjut hubungi bagian Tata Usaha
                        sekolah
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center bg-gradient-to-r from-indigo-900 to-indigo-800 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Siap Mengikuti Kegiatan Akademik?
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Bergabunglah dengan SMK Setia Karya dan ikuti berbagai kegiatan
              menarik sepanjang tahun akademik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/penerimaan"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="/akademik"
                className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Lihat Program Akademik
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
