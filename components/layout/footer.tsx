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
import siteConfig from "@/data/content/site-config.json";
import { getWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
              {siteConfig.links.facebook && (
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              {siteConfig.links.instagram && (
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {siteConfig.links.twitter && (
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
              {siteConfig.links.youtube && (
                <a
                  href={siteConfig.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Menu Utama</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.footerMenu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Kontak Kami</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-blue-300" />
                <div>
                  <p className="text-blue-100">{siteConfig.address.street}</p>
                  <p className="text-blue-100">
                    {siteConfig.address.disctrict}, {siteConfig.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <p className="text-blue-100">{siteConfig.contact.phone}</p>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-blue-100 hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(siteConfig.contact.whatsapp)}
                  className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-3 py-2 rounded text-white text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
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
