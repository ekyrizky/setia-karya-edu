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
