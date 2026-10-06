// Podaci o sajtu koji se koriste na vise mesta

/** Javna adresa landinga. Postavlja se na Vercelu kroz NEXT_PUBLIC_SITE_URL kad domen bude odlucen. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pratiplati.bymaricdigital.com'

/** Prijava vodi u aplikaciju */
export const APP_LOGIN_URL = 'https://www.pratiplati.com/admin'

export const NAV = [
  { href: '#kako-radi', label: 'Kako radi' },
  { href: '#podsetnici', label: 'Podsetnici' },
  { href: '#privatnost', label: 'Privatnost' },
  { href: '#pitanja', label: 'Česta pitanja' },
]

export const SITE_TITLE = 'PratiPlati | Evidencija i praćenje uplata za organizacije'
export const SITE_DESCRIPTION =
  'PratiPlati vodi evidenciju obaveza, prati kašnjenja i šalje podsetnike, a korisnici dostavljaju dokaz o uplati direktno kroz aplikaciju.'
