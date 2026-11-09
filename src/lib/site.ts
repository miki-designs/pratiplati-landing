// Podaci o sajtu koji se koriste na vise mesta

/** Javna adresa landinga. Postavlja se na Vercelu kroz NEXT_PUBLIC_SITE_URL kad domen bude odlucen. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pratiplati.bymaricdigital.com'

/** Mejl za upite sa forme i za pitanja o privatnosti */
export const CONTACT_EMAIL = 'milos.maric.bg@gmail.com'

/** Telefon za razgovor i Viber (javno na sajtu) */
export const PHONE = '+381637840905'
export const PHONE_LABEL = '063 784 0905'

/** Prijava vodi u aplikaciju */
export const APP_LOGIN_URL = 'https://www.pratiplati.com/admin'

export const NAV = [
  { href: '/#kako-radi', label: 'Kako radi' },
  { href: '/#podsetnici', label: 'Podsetnici' },
  { href: '/#privatnost', label: 'Privatnost' },
  { href: '/#pitanja', label: 'Česta pitanja' },
]

export const SITE_TITLE = 'PratiPlati | Evidencija i praćenje uplata za organizacije'
export const SITE_DESCRIPTION =
  'PratiPlati vodi evidenciju obaveza, prati kašnjenja i šalje podsetnike, a članovi dostavljaju dokaz o uplati direktno kroz aplikaciju.'

export const SITE_NAME = 'PratiPlati'

/** Poslednja izmena politike privatnosti: tekst na stranici i datum u sitemap.xml */
export const PRIVACY_UPDATED = { iso: '2026-10-19', label: '19. oktobar 2026.' }

/** Zajednicka Open Graph polja. Stranica koja zada svoj openGraph zamenjuje ceo objekat iz layouta, pa ova polja ukljucuje sama. */
export const OG_BASE = { type: 'website', siteName: SITE_NAME, locale: 'sr_RS' } as const

/** Ista slika kao src/app/opengraph-image.jpg, za podstranice koje zadaju svoj openGraph (tada se slika iz fajla ne nasledjuje) */
export const OG_IMAGE = { url: '/opengraph-image.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: 'PratiPlati: telefon sa obavezom i dokazom o uplati' }
