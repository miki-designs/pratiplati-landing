import type { MetadataRoute } from 'next'
import { PRIVACY_UPDATED, SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/politika-privatnosti`, lastModified: new Date(PRIVACY_UPDATED.iso), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
