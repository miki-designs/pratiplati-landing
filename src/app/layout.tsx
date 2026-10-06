import type { Metadata, Viewport } from 'next'
// Manrope je u projektu (npm paket), pa sajt ne zove Google servere
import '@fontsource-variable/manrope'
import '@/styles'
import SvgSprite from '@/components/SvgSprite'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'PratiPlati',
    locale: 'sr_RS',
    title: 'PratiPlati | Jedan sistem za potpunu kontrolu nad uplatama',
    description: SITE_DESCRIPTION,
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: '#011638',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr-Latn">
      <body>
        <a className="skip" href="#main">
          Preskoči na sadržaj
        </a>
        <SvgSprite />
        {children}
      </body>
    </html>
  )
}
