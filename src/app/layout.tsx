import type { Metadata, Viewport } from 'next'
// Manrope je u projektu (npm paket), pa sajt ne zove Google servere
import '@fontsource-variable/manrope'
import '@/styles'
import { Analytics } from '@vercel/analytics/next'
import SvgSprite from '@/components/SvgSprite'
import { APP_LOGIN_URL, CONTACT_EMAIL, PHONE, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'sr_RS',
    title: 'PratiPlati | Jedan sistem za potpunu kontrolu nad uplatama',
    description: SITE_DESCRIPTION,
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: '#011638',
}

// Strukturisani podaci za pretrazivace i AI asistente: ko stoji iza sajta, sam sajt i aplikacija
const ORG_ID = `${SITE_URL}/#organizacija`
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      email: CONTACT_EMAIL,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: PHONE,
        email: CONTACT_EMAIL,
        areaServed: 'RS',
        availableLanguage: 'sr',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#sajt`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: 'sr-Latn',
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#aplikacija`,
      name: SITE_NAME,
      url: new URL(APP_LOGIN_URL).origin,
      description: SITE_DESCRIPTION,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      inLanguage: 'sr-Latn',
      publisher: { '@id': ORG_ID },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr-Latn">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\u003c') }} />
        <a className="skip" href="#main">
          Preskoči na sadržaj
        </a>
        <SvgSprite />
        {children}
        {/* posete bez kolacica; radi tek na Vercelu kad se ukljuci Web Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
