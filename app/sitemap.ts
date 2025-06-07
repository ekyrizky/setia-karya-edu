import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const routes = [
    '',
    '/tentang',
    '/tentang/guru-staff',
    '/tentang/prestasi',
    '/akademik',
    '/akademik/ipa',
    '/akademik/ips',
    '/akademik/bahasa',
    '/akademik/ekstrakurikuler',
    '/akademik/kalender',
    '/fasilitas',
    '/berita',
    '/penerimaan',
    '/kontak',
    '/alumni',
    '/download',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('penerimaan') ? 0.9 : 0.8,
  }))
}