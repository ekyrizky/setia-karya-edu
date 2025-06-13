import siteConfig from "@/data/content/site-config.json";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Pendidikan No. 123",
    addressLocality: "Jakarta Selatan",
    addressRegion: "DKI Jakarta",
    postalCode: "12345",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-21-1234567",
    contactType: "customer service",
    availableLanguage: ["Indonesian", "English"],
  },
  sameAs: [
    siteConfig.links.facebook,
    siteConfig.links.instagram,
    siteConfig.links.youtube,
  ].filter(Boolean),
};

export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: "+62-21-1234567",
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Pendidikan No. 123",
    addressLocality: "Jakarta Selatan",
    addressRegion: "DKI Jakarta",
    postalCode: "12345",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-6.2088",
    longitude: "106.8456",
  },
  openingHours: "Mo-Fr 07:00-16:00",
  priceRange: "Rp",
  hasMap: "https://maps.google.com/maps?q=SMK+Setia+Karya",
  image: [
    `${siteConfig.url}/images/school-building.jpg`,
    `${siteConfig.url}/images/classroom.jpg`,
    `${siteConfig.url}/images/laboratory.jpg`,
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Laboratorium IPA" },
    { "@type": "LocationFeatureSpecification", name: "Laboratorium Komputer" },
    { "@type": "LocationFeatureSpecification", name: "Perpustakaan" },
    { "@type": "LocationFeatureSpecification", name: "Lapangan Olahraga" },
    { "@type": "LocationFeatureSpecification", name: "Aula Serbaguna" },
    { "@type": "LocationFeatureSpecification", name: "Kantin" },
    { "@type": "LocationFeatureSpecification", name: "Musholla" },
    { "@type": "LocationFeatureSpecification", name: "UKS" },
  ],
};

export function generateCourseSchema(course: {
  name: string;
  description: string;
  provider?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: course.provider || siteConfig.name,
      sameAs: siteConfig.url,
    },
  };
}

export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    location: {
      "@type": "Place",
      name: event.location || siteConfig.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Pendidikan No. 123",
        addressLocality: "Jakarta Selatan",
        addressRegion: "DKI Jakarta",
        addressCountry: "ID",
      },
    },
    image: event.image || siteConfig.image,
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image || siteConfig.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author || siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteConfig.url,
    },
  };
}
