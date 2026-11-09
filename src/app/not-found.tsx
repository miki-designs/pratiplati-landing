import type { Metadata } from 'next'
import Header from '@/components/Header'
import { OG_BASE } from '@/lib/site'
import Footer from '@/components/sections/Footer'

const TITLE = 'Stranica ne postoji'
const DESCRIPTION = 'Ova adresa ne postoji na sajtu PratiPlati. Vratite se na početnu stranu ili pogledajte kako PratiPlati prati uplate.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { ...OG_BASE, title: `${TITLE} | PratiPlati`, description: DESCRIPTION },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="legal-hero dark">
          <div className="wrap">
            <p className="eyebrow">Greška 404</p>
            <h1 className="h2">Ova stranica ne postoji.</h1>
            <p className="lead">Možda je link pogrešno prepisan ili je stranica premeštena.</p>
            <a className="btn btn-cta" href="/" style={{ marginTop: 32 }}>
              Na početnu stranu
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
