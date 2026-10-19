import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Politika privatnosti | PratiPlati',
  description: 'Kako PratiPlati obrađuje podatke koje ostavite na sajtu i kroz formu za ponudu.',
}

const UPDATED = '19. oktobar 2026.'

export default function PrivacyPolicy() {
  const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
  return (
    <>
      <Header />
      <main id="main">
        <section className="legal-hero dark">
          <div className="wrap">
            <p className="eyebrow">Pravne informacije</p>
            <h1 className="h2">Politika privatnosti</h1>
            <p className="lead">Kako obrađujemo podatke koje ostavite na ovom sajtu. Poslednja izmena: {UPDATED}</p>
          </div>
        </section>

        <article className="wrap legal">
          <h2>Ko obrađuje podatke</h2>
          <p>
            Podatke obrađuje PratiPlati (u daljem tekstu: mi). Za sva pitanja o podacima i za ostvarivanje vaših prava pišite nam na {mail}. Ova politika se
            odnosi na ovaj sajt i formu „Zatražite ponudu“. Za korišćenje same aplikacije PratiPlati važe njeni uslovi.
          </p>

          <h2>Koje podatke prikupljamo</h2>
          <ul>
            <li>
              <b>Kroz formu za ponudu:</b> ime i prezime, naziv organizacije, email, telefon, okvirni broj članova i poruku, ako je napišete.
            </li>
            <li>
              <b>Pri poseti sajtu:</b> zbirne podatke o posetama (koje stranice se otvaraju, iz koje zemlje, sa kog uređaja). Ovi podaci ne služe da vas
              lično prepoznamo.
            </li>
          </ul>

          <h2>Zašto ih koristimo</h2>
          <ul>
            <li>Podatke iz forme koristimo da odgovorimo na vaš upit i pošaljemo ponudu, na vaš zahtev, pre eventualnog dogovora o saradnji.</li>
            <li>Zbirne podatke o posetama koristimo da razumemo da li je sajt jasan i da ga poboljšamo, na osnovu našeg legitimnog interesa.</li>
          </ul>
          <p>Ne prodajemo podatke, ne koristimo ih za oglašavanje i ne šaljemo vam reklamne poruke bez vašeg pristanka.</p>

          <h2>Kolačići</h2>
          <p>
            Sajt ne koristi kolačiće za praćenje ni za oglašavanje. Merenje poseta radi bez kolačića. Font i video se učitavaju sa našeg servera, bez
            poziva ka drugim servisima.
          </p>

          <h2>Ko još ima pristup podacima</h2>
          <p>Koristimo pouzdane pružaoce usluga koji podatke obrađuju samo po našem nalogu i samo za navedene svrhe:</p>
          <ul>
            <li>
              <b>Vercel Inc.</b> (hosting sajta i merenje poseta)
            </li>
            <li>
              <b>Resend</b> (slanje upita sa forme na naš mejl)
            </li>
          </ul>
          <p>
            Serveri ovih pružalaca usluga mogu biti van Srbije, uključujući SAD. Prenos se obavlja uz mere zaštite koje oni obezbeđuju, kao što su
            standardne ugovorne klauzule.
          </p>

          <h2>Koliko dugo čuvamo podatke</h2>
          <p>
            Upite čuvamo najduže 12 meseci od poslednje komunikacije, osim ako počnemo saradnju. Tada podatke čuvamo dok saradnja traje i koliko
            propisi nalažu. Zbirne podatke o posetama čuvamo u obliku koji ne otkriva ko ste.
          </p>

          <h2>Vaša prava</h2>
          <p>
            Imate pravo da tražite pristup svojim podacima, njihovu ispravku ili brisanje, ograničenje obrade i prenos podataka, kao i da uložite prigovor
            na obradu. Zahtev pošaljite na {mail} i odgovorićemo najkasnije u roku od 30 dana.
          </p>
          <p>
            Ako smatrate da obrada nije u skladu sa zakonom, možete podneti pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o
            ličnosti, Bulevar kralja Aleksandra 15, Beograd, <a href="https://www.poverenik.rs">www.poverenik.rs</a>.
          </p>

          <h2>Izmene politike</h2>
          <p>Ako promenimo način obrade, ažuriraćemo ovu stranicu i datum poslednje izmene na vrhu.</p>
        </article>
      </main>
      <Footer />
    </>
  )
}
