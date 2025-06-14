import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, getGoogleMapsUrl } from "@/lib/utils";
import { ContactInfo, SchoolAddress, OperationalHours } from "@/types/homepage";

interface ContactInfoSectionProps {
  contact: ContactInfo;
  address: SchoolAddress;
  operationalHours: OperationalHours[];
}

export function ContactInfoSection({
  contact,
  address,
  operationalHours,
}: ContactInfoSectionProps) {
  const mondayToFriday = operationalHours?.find(
    (h) => h.day_of_week === "monday"
  );
  const saturday = operationalHours?.find((h) => h.day_of_week === "saturday");
  const sunday = operationalHours?.find((h) => h.day_of_week === "sunday");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Siap Bergabung dengan SMK Setia Karya?
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kunjungi atau hubungi kami untuk informasi lebih lanjut tentang
            pendaftaran dan program pendidikan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Maps */}
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

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Alamat Sekolah</h3>
                  <p className="text-gray-600 mb-3">
                    {address.street}
                    <br />
                    {address.city}
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
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Telepon</h3>
                  <p className="text-gray-600 mb-3">
                    Kantor: {contact.phone}
                    <br />
                    WhatsApp: {contact.whatsapp}
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
                      <Phone className="mr-2 h-4 w-4" />
                      Chat WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <div className="space-y-1">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-blue-600 hover:underline block"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Jam Operasional
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    {mondayToFriday && (
                      <p>
                        Senin - Jumat: {mondayToFriday.opening_time} -{" "}
                        {mondayToFriday.closing_time}
                      </p>
                    )}
                    {saturday && (
                      <p>
                        Sabtu: {saturday.opening_time} - {saturday.closing_time}
                      </p>
                    )}
                    {sunday && (
                      <p className="text-red-600">
                        Minggu:{" "}
                        {sunday.is_closed
                          ? "Tutup"
                          : `${sunday.opening_time} - ${sunday.closing_time}`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
