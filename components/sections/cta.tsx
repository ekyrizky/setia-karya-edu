import Link from "next/link"
import { Phone, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import homeData from "@/data/content/beranda.json"

export function CTASection() {
  const { cta } = homeData

  return (
    <>
      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{cta.title}</h2>
            <p className="text-xl mb-8 text-blue-100">
              {cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link href={cta.button.href}>
                  {cta.button.text}
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
                asChild
              >
                <a href={getWhatsAppUrl(siteConfig.links.whatsapp, "Halo, saya ingin bertanya tentang pendaftaran di SMK Setia Karya")}>
                  <Phone className="mr-2 h-4 w-4" />
                  Hubungi WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Alamat Sekolah</h3>
              <p className="text-gray-300 text-sm">
                Jl. Pendidikan No. 123<br />
                Jakarta Selatan, DKI Jakarta 12345
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Telepon</h3>
              <p className="text-gray-300 text-sm">
                (021) 1234567<br />
                WhatsApp: 0812-3456-789
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-300 text-sm">
                info@smksetiakarya.sch.id<br />
                ppdb@smksetiakarya.sch.id
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}