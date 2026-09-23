import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/signin',
          '/signup',
          '/documentation',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/signin', '/signup'],
      },
    ],
    sitemap: 'https://www.easylink.co.ke/sitemap.xml',
    host: 'https://www.easylink.co.ke',
  }
}
