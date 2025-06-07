export interface SiteConfig {
  name: string
  shortName: string
  description: string
  url: string
  ogImage: string
  links: {
    whatsapp: string
    email: string
    facebook?: string
    instagram?: string
    youtube?: string
  }
}

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  label?: string
  description?: string
  children?: NavItem[]
}

export interface Faculty {
  id: string
  name: string
  position: string
  subject?: string
  education: string
  photo?: string
  email?: string
}

export interface News {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image?: string
  category: 'berita' | 'pengumuman' | 'prestasi' | 'kegiatan'
  publishedAt: string
  author?: string
}

export interface AcademicProgram {
  id: string
  name: string
  description: string
  features: string[]
  image?: string
}

export interface Facility {
  id: string
  name: string
  description: string
  features: string[]
  images: string[]
  capacity?: number
  category: 'akademik' | 'olahraga' | 'seni' | 'teknologi' | 'umum'
}

export interface ExtracurricularActivity {
  id: string
  name: string
  description: string
  schedule: string
  instructor?: string
  category: 'olahraga' | 'seni' | 'akademik' | 'teknologi' | 'sosial'
  image?: string
}

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  canonical?: string
  noIndex?: boolean
  structuredData?: any
}