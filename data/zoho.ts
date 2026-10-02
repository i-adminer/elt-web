/**
 * Zoho Partner Configuration
 *
 * EasyLink Technologies is a Zoho partner. These are our official
 * Zoho Reseller customer signup URLs provided directly by Zoho.
 *
 * DO NOT modify the URL IDs.
 * Update descriptions or logos here and the change propagates everywhere.
 */

// General "all products" partner signup URL
export const ZOHO_ALL_SIGNUP_URL =
  'https://store.zoho.com/ResellerCustomerSignUp.do?id=626afea7c349d78b310e2b8a32d161544ed53be75196202bbda5aba43fb2e9d0'

// Types
export type ZohoCategory = 'Collaboration' | 'Finance' | 'Customer Service' | 'Communication'

export interface ZohoProduct {
  slug: string
  name: string
  tagline: string
  description: string
  /** Product logo from /public/zoho/ */
  logo: string
  /** Fallback Iconify icon id */
  icon: string
  category: ZohoCategory
  /** Exact Zoho Reseller partner signup URL. Do not modify. */
  signupUrl: string
}

// Products
export const ZOHO_PRODUCTS: ZohoProduct[] = [
  // COLLABORATION
  {
    slug: 'workplace',
    name: 'Zoho Workplace',
    tagline: 'Integrated office suite for modern teams',
    description:
      'A unified suite of productivity and collaboration apps including email, documents, spreadsheets, and presentations, designed for teams of every size.',
    logo: '/zoho/workplace.avif',
    icon: 'mdi:briefcase-outline',
    category: 'Collaboration',
    signupUrl:
      'https://store.zoho.com/ResellerCustomerSignUp.do?id=28fe5b9c5ff747549a6999d5f95edcb6',
  },
  {
    slug: 'workdrive',
    name: 'Zoho WorkDrive',
    tagline: 'Secure cloud storage and team file management',
    description:
      'Team cloud storage built for collaboration. Share, organise, and work on files together with fine-grained access control and full version history.',
    logo: '/zoho/workdrive.avif',
    icon: 'mdi:cloud-outline',
    category: 'Collaboration',
    signupUrl:
      'https://store.zoho.com/ResellerCustomerSignUp.do?id=accbc04f95c97a370318d6deb8d899ca',
  },
  {
    slug: 'cliq',
    name: 'Zoho Cliq',
    tagline: 'Team messaging and collaboration hub',
    description:
      'Real-time team messaging with channels, direct messages, voice and video calls, and deep integrations with your other Zoho apps.',
    logo: '/zoho/cliq.svg',
    icon: 'mdi:message-text-outline',
    category: 'Collaboration',
    signupUrl:
      'https://store.zoho.com/ResellerCustomerSignUp.do?id=8fb389e44abf4a99aaf2a9f671e81b45',
  },

  // FINANCE
  {
    slug: 'books',
    name: 'Zoho Books',
    tagline: 'Smart accounting for growing businesses',
    description:
      'End-to-end accounting software for invoicing, expense tracking, bank reconciliation, tax compliance, and financial reporting, all in one place.',
    logo: '/zoho/books.avif',
    icon: 'mdi:book-account-outline',
    category: 'Finance',
    signupUrl:
      'https://store.zoho.com/ResellerCustomerSignUp.do?id=357624084479ebe2bac56857b471f647',
  },

  // CUSTOMER SERVICE
  {
    slug: 'desk',
    name: 'Zoho Desk',
    tagline: 'Context-aware customer support software',
    description:
      'A full-featured help desk platform with ticketing, knowledge base, automation, and multi-channel support so your team delivers consistent, fast customer service.',
    logo: '/zoho/desk.avif',
    icon: 'mdi:headset',
    category: 'Customer Service',
    signupUrl:
      'https://store.zoho.com/ResellerCustomerSignUp.do?id=4d7cef5d3408fe01587aecb9e595515d',
  },

  // COMMUNICATION
  {
    slug: 'cpaas',
    name: 'Zoho CPaaS',
    tagline: 'Programmable cloud communications platform',
    description:
      'Add SMS, voice, WhatsApp, and other communication channels directly into your business applications using Zoho\'s cloud communications platform.',
    logo: '/zoho/cpaas.svg',
    icon: 'mdi:phone-outline',
    category: 'Communication',
    signupUrl:
      'https://store.zoho.com/ResellerCustomerSignUp.do?id=ec5d5deb5122cfab23a3582f3a5b672d',
  },
]

// Category display order
export const ZOHO_CATEGORY_ORDER: ZohoCategory[] = [
  'Collaboration',
  'Finance',
  'Customer Service',
  'Communication',
]

// Category icons
export const ZOHO_CATEGORY_ICONS: Record<ZohoCategory, string> = {
  Collaboration: 'mdi:account-group-outline',
  Finance: 'mdi:chart-line',
  'Customer Service': 'mdi:handshake-outline',
  Communication: 'mdi:cellphone-message',
}

// Why Zoho benefits
export interface ZohoBenefit {
  icon: string
  title: string
  description: string
}

export const ZOHO_BENEFITS: ZohoBenefit[] = [
  {
    icon: 'mdi:link-variant',
    title: 'Connected Operations',
    description:
      'Zoho apps are built to work together, giving your team a seamless flow from email and files to accounting and customer support with no data silos.',
  },
  {
    icon: 'mdi:rocket-launch-outline',
    title: 'Productivity and Collaboration',
    description:
      'Empower your team with tools for real-time document collaboration, team messaging, and shared workspaces that keep everyone aligned.',
  },
  {
    icon: 'mdi:shield-check-outline',
    title: 'Enterprise-Grade Security',
    description:
      'Zoho keeps your business data secure with end-to-end encryption, role-based access controls, and internationally recognised data privacy standards.',
  },
  {
    icon: 'mdi:trending-up',
    title: 'Scales with Your Business',
    description:
      'Start with what you need and expand as you grow. Zoho\'s modular platform means you only pay for the products your business actually uses.',
  },
  {
    icon: 'mdi:head-cog-outline',
    title: 'Implementation and Support',
    description:
      'EasyLink handles setup, configuration, training, and ongoing support so you get the full value of Zoho from day one.',
  },
  {
    icon: 'mdi:currency-usd',
    title: 'Cost-Effective Cloud',
    description:
      'Replace fragmented, expensive software with an integrated cloud platform that delivers more capability at a lower total cost.',
  },
]

// Helper: group products by category
export function getZohoProductsByCategory(): Record<ZohoCategory, ZohoProduct[]> {
  return ZOHO_PRODUCTS.reduce(
    (acc, product) => {
      if (!acc[product.category]) acc[product.category] = []
      acc[product.category].push(product)
      return acc
    },
    {} as Record<ZohoCategory, ZohoProduct[]>,
  )
}
