import { generateMetadata } from "@/lib/seo"
import { ContactForm } from "@/components/forms/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { siteConfig } from "@/config/site"
import { getWhatsAppUrl, getGoogleMapsUrl } from "@/lib/utils"

export const metadata = generateMetadata({
  title: "Kontak Kami",
  description: "Hubungi SMK Setia Karya untuk informasi lengkap tentang pendaftaran, program akademik, dan fasilitas sekolah",
  keywords: ["kontak sekolah", "alamat SMK", "telepon sekolah", "hubungi SMK Setia Karya"]
})

export default function KontakPage() {
  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="heading-1 mb-4">Kontak Kami</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Kami siap membantu Anda dengan informasi lengkap tentang SMK Setia Karya
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Alamat Sekolah
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Jl. Pendidikan No. 123<br />
                Jakarta Selatan, DKI Jakarta 12345<br />
                Indonesia
              </p>
              <a
                href={getGoogleMapsUrl("SMK Setia Karya Jakarta")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Lihat di Google Maps →
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Telepon & WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Telepon:</strong> (021) 1234567
                </p>
                <p>
                  <strong>Fax:</strong> (021) 1234568
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  <a
                    href={getWhatsAppUrl(siteConfig.links.whatsapp, "Halo, saya ingin bertanya tentang SMK Setia Karya")}
                    className="text-primary hover:underline"
                  >
                    WhatsApp: 0812-3456-789
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Info Umum:</strong>{" "}
                  <a href={`mailto:${siteConfig.links.email}`} className="text-primary hover:underline">
                    {siteConfig.links.email}
                  </a>
                </p>
                <p>
                  <strong>PPDB:</strong>{" "}
                  <a href="mailto:ppdb@smksetiakarya.sch.id" className="text-primary hover:underline">
                    ppdb@smksetiakarya.sch.id
                  </a>
                </p>
                <p>
                  <strong>Akademik:</strong>{" "}
                  <a href="mailto:akademik@smksetiakarya.sch.id" className="text-primary hover:underline">
                    akademik@smksetiakarya.sch.id
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Senin - Jumat:</strong> 07:00 - 16:00 WIB
                </p>
                <p>
                  <strong>Sabtu:</strong> 07:00 - 12:00 WIB
                </p>
                <p>
                  <strong>Minggu & Libur:</strong> Tutup
                </p>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-800">
                  <strong>Catatan:</strong> Untuk kunjungan khusus atau konsultasi di luar jam operasional, 
                  silakan hubungi kami terlebih dahulu melalui WhatsApp.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <h2 className="heading-2 text-center mb-8">Lokasi Sekolah</h2>
        <Card>
          <CardContent className="p-0">
            <div className="aspect-[2/1] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7461249699997!2d106.8456!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNTAnNDQuMiJF!5e0!3m2!1sid!2sid!4v1637123456789!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SMK Setia Karya"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Contact CTA */}
      <div className="mt-12 text-center">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Butuh Informasi Cepat?</h3>
            <p className="text-lg mb-6 opacity-90">
              Tim kami siap membantu Anda melalui WhatsApp untuk respon yang lebih cepat
            </p>
            <a
              href={getWhatsAppUrl(siteConfig.links.whatsapp, "Halo, saya ingin bertanya tentang SMK Setia Karya")}
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Chat WhatsApp Sekarang
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}