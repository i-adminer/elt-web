import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.easylink.co.ke'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    // Core pages — highest priority
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Solutions listing
    {
      url: `${BASE_URL}/solutions`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // Solution detail pages
    {
      url: `${BASE_URL}/solutions/managed-ict-services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/solutions/virtual-cio`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/solutions/helpdesk-support`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/solutions/cloud-solutions`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/solutions/data-protection`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/solutions/it-outsourcing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // Legal — low priority, no-index anyway
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
