import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Twitter,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { getContactData } from "@/lib/contact-data";

export async function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, address, socialLink } = await getContactData();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">SK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SMK Setia Karya</h3>
                <p className="text-sm text-blue-200">Terakreditasi A</p>
              </div>
            </div>
            <p className="mb-4 text-sm text-blue-100 leading-relaxed">
              SMK Setia Karya - Sekolah Menengah Kejuruan terbaik dengan
              kurikulum merdeka
            </p>
            <div className="flex space-x-3">
              {socialLink.map((social) => {
                if (!social.is_active) return null;
                
                const IconComponent = {
                  facebook: Facebook,
                  instagram: Instagram,
                  twitter: Twitter,
                  youtube: Youtube,
                }[social.platform.toLowerCase()] || Facebook;

                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label={social.platform}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Menu Utama</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tentang"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/akademik"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Akademik
                </Link>
              </li>
              <li>
                <Link
                  href="/fasilitas"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Fasilitas
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Kontak Kami</h4>
            <div className="space-y-3 text-sm">
              {address && (
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-blue-300" />
                  <div>
                    <p className="text-blue-100">{address.street}</p>
                    <p className="text-blue-100">
                      {address.city}, {address.state}
                    </p>
                  </div>
                </div>
              )}

              {contact?.phone && (
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-300" />
                  <p className="text-blue-100">{contact.phone}</p>
                </div>
              )}

              {contact?.email && (
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-300" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-blue-100 hover:text-white"
                  >
                    {contact.email}
                  </a>
                </div>
              )}

              {contact?.whatsapp && (
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(contact.whatsapp)}
                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-3 py-2 rounded text-white text-sm transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-blue-800">
          <div className="text-blue-200 text-sm">
            © {currentYear} SMK Setia Karya. Seluruh hak cipta dilindungi
            undang-undang.
          </div>
        </div>
      </div>
    </footer>
  );
}
