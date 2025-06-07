import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";
import { getWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">SK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{siteConfig.name}</h3>
                <p className="text-sm text-blue-200">Terakreditasi A</p>
              </div>
            </div>
            <p className="mb-4 text-sm text-blue-100 leading-relaxed">
              Sekolah Menengah Atas unggulan yang mengutamakan kualitas
              pendidikan, pembentukan karakter, dan prestasi akademik maupun
              non-akademik.
            </p>
            <div className="flex space-x-3">
              {siteConfig.links.facebook && (
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
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
                  className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {siteConfig.links.youtube && (
                <a
                  href={siteConfig.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
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
              {footerNavigation.tentang.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              {footerNavigation.akademik.slice(0, 2).map((item) => (
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

          <div>
            <h4 className="mb-4 text-lg font-semibold">Layanan</h4>
            <ul className="space-y-2 text-sm">
              {footerNavigation.layanan.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
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
                  <p className="text-blue-100">Jl. Pendidikan No. 123</p>
                  <p className="text-blue-100">Jakarta Selatan, DKI Jakarta</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <p className="text-blue-100">(021) 1234567</p>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-blue-100 hover:text-white"
                >
                  {siteConfig.links.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(siteConfig.links.whatsapp)}
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
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-blue-200">
              © {currentYear} {siteConfig.name}. Seluruh hak cipta dilindungi
              undang-undang.
            </div>
            <div className="mt-2 md:mt-0 flex space-x-4 text-blue-200">
              <span>Terakreditasi A</span>
              <span>•</span>
              <span>Sekolah Penggerak</span>
              <span>•</span>
              <span>Sekolah Adiwiyata</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
