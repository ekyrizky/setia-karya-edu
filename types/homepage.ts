export interface SchoolProfile {
  id: string;
  name: string;
  short_name: string;
  logo: string;
  tagline: string;
  hero_image: string;
  hero_image_alt: string;
  hero_subtitle: string[];
  cta_text: string;
  cta_href: string;
  history: string;
}

export interface SchoolStatistic {
  id: string;
  label: string;
  value: string;
  icon: string;
  category: string;
}

export interface AcademicProgram {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface QuickInfo {
  id: string;
  info_text: string;
}

export interface SchoolFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  id: string;
  phone: string;
  whatsapp: string;
  whatsapp_message: string;
  email: string;
  email_ppdb: string;
  website: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  is_active: boolean;
}

export interface SchoolAddress {
  id: string;
  full_address: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  zoom_level: number;
}

export interface OperationalHours {
  id: string;
  day_of_week: string;
  opening_time: string;
  closing_time: string;
  is_closed: boolean;
}

export interface SchoolInfo {
  id: string;
  vision: string;
  motto: string;
}

export interface Missions {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Certifications {
  id: string;
  label: string;
  value: string;
  year: string;
  icon: string;
}

export interface Teachers {
  id: string;
  name: string;
  position: string;
  education: string;
  image_url: string;
  email: string;
  quote: string;
}

export interface Photos {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
}

export interface Videos {
  id: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  duration: string;
  video: string;
}

export interface News {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
}

export interface Facilities {
  id: string;
  category: string;
  name: string;
  description: string;
  capacity: string;
  total: string;
  features: string[];
  image: string;
}

export interface Infrastructure {
  id: string;
  name: string;
  description: string;
  details: string;
  icon: string;
}

export interface AcademicCurriculum {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface AcademicProgram {
  id: string;
  program_id: string;
  name: string;
  description: string;
  subjects: string[];
  keunggulan: string[];
}

export interface ExtracurricularActivity {
  id: string;
  name: string;
  schedule: string;
  achievements: string;
}

export interface ExtracurricularCategory {
  id: string;
  name: string;
  activities: ExtracurricularActivity[];
}

export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavigationItem[];
}
