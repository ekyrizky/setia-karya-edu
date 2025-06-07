import { Metadata } from 'next'
import { siteConfig, indonesianKeywords } from '@/config/site'
import { SEOProps } from './types'

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage,
  ogType = 'website',
  canonical,
  noIndex = false
}: SEOProps = {}): Metadata {
  const siteTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const siteDescription = description || siteConfig.description
  const siteKeywords = [...indonesianKeywords, ...keywords].join(', ')
  const siteOgImage = ogImage || siteConfig.ogImage

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || '/',
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: 'id_ID',
      type: ogType as any,
      images: [
        {
          url: siteOgImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [siteOgImage],
      creator: '@smksetiakarya',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  }
}

export function generateJsonLd(type: string, data: any) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  return {
    ...baseData,
    ...data,
  }
}