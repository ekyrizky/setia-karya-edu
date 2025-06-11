import { generateMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getWhatsAppUrl, getGoogleMapsUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getContactData } from "@/lib/contact-data";

export const metadata = generateMetadata({
  title: "Kontak Kami",
  description:
    "Hubungi SMK Setia Karya untuk informasi lengkap tentang pendaftaran, program akademik, dan fasilitas sekolah",
  keywords: [
    "kontak sekolah",
    "alamat SMK",
    "telepon sekolah",
    "hubungi SMK Setia Karya",
  ],
});

export default async function KontakPage() {
  const { contact, address, operationalHours } = await getContactData();

  const formatOperationalHours = (dayOfWeek: string): string => {
    const dayHours = operationalHours.find((h) => h.day_of_week === dayOfWeek);
    if (!dayHours) return "-";
    if (dayHours.is_closed) return "Tutup";
    return `${dayHours.opening_time} - ${dayHours.closing_time}`;
  };

  if (!contact || !address) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h1 className="heading-1 mb-4">Kontak Kami</h1>
          <p className="text-muted-foreground">
            Data kontak sedang dimuat atau tidak tersedia.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">Kontak Kami</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Kami siap membantu Anda dengan informasi lengkap tentang SMK Setia
          Karya
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://maps.google.com/maps?q=${address.latitude},${address.longitude}&t=&z=${address.zoom_level}&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi SMK Setia Karya"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="6-5 w-6 text-red-600 " />
                Alamat Sekolah
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                {address.street}
                <br />
                {address.city}, {address.state} {address.postalCode}
                <br />
                Indonesia
              </p>
              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline font-semibold"
              >
                <MapPin className="h-4 w-4" />
                Lihat di Google Maps
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-6 w-6 text-green-600" />
                Telepon & WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Telepon:</strong> {contact.phone}
                </p>
                <p>
                  <strong>WhatsApp:</strong> {contact.whatsapp}
                </p>
                <div className="mt-3">
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    asChild
                  >
                    <a
                      href={getWhatsAppUrl(
                        contact.whatsapp,
                        contact.whatsapp_message
                      )}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Chat WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Info Umum:</strong>{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-primary hover:underline"
                  >
                    {contact.email}
                  </a>
                </p>
                <p>
                  <strong>PPDB:</strong>{" "}
                  <a
                    href={`mailto:${contact.email_ppdb}`}
                    className="text-primary hover:underline"
                  >
                    {contact.email_ppdb}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-600" />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Senin - Jumat:</strong>{" "}
                  {formatOperationalHours("monday")}
                </p>
                <p>
                  <strong>Sabtu:</strong>{" "}
                  {formatOperationalHours("saturday")}
                </p>
                <p>
                  <strong>Minggu & Libur:</strong>{" "}
                  {formatOperationalHours("sunday")}
                </p>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-800">
                  <strong>Catatan:</strong> Untuk kunjungan khusus atau
                  konsultasi di luar jam operasional, silakan hubungi kami
                  terlebih dahulu melalui WhatsApp.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Contact CTA */}
      <div className="mt-12 text-center">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Butuh Informasi Cepat?</h3>
            <p className="text-lg mb-6 opacity-90">
              Tim kami siap membantu Anda melalui WhatsApp untuk respon yang
              lebih cepat
            </p>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white"
              asChild
            >
              <a
                href={getWhatsAppUrl(
                  contact.whatsapp,
                  contact.whatsapp_message
                )}
              >
                <Phone className="mr-2 h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
