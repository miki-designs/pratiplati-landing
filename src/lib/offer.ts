// Provera upita sa forme "Zatražite ponudu". Ista pravila vaze u pregledacu i na serveru.
// Bez alias uvoza, da bi scripts/offer-check.ts mogao da je pokrene direktno.

export const MEMBER_RANGES = ['do 50', 'od 51 do 150', 'od 151 do 300', 'više od 300']

export type Offer = { name: string; organization: string; email: string; phone: string; members: string; message: string }
export type OfferField = keyof Offer

export const OFFER_FIELDS: OfferField[] = ['name', 'organization', 'email', 'phone', 'members', 'message']
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
const MAX: Record<OfferField, number> = { name: 120, organization: 160, email: 160, phone: 40, members: 20, message: 3000 }

/** Poruka greske za jedno polje, ili prazan string ako je polje u redu */
export function fieldProblem(field: OfferField, raw: string): string {
  const v = raw.trim()
  if (!v) return field === 'message' ? '' : field === 'members' ? 'Izaberite broj članova.' : 'Ovo polje je obavezno.'
  if (v.length > MAX[field]) return 'Tekst je predugačak.'
  if (field === 'email' && !EMAIL.test(v)) return 'Unesite ispravnu email adresu.'
  if (field === 'phone' && (v.match(/\d/g) ?? []).length < 6) return 'Unesite ispravan broj telefona.'
  if (field === 'members' && !MEMBER_RANGES.includes(v)) return 'Izaberite broj članova.'
  return ''
}

/** Proverava ceo upit; vraca ocisceni upit ili greske po poljima */
export function validateOffer(input: Record<string, unknown>): { offer: Offer } | { errors: Partial<Record<OfferField, string>> } {
  const get = (k: OfferField) => (typeof input[k] === 'string' ? (input[k] as string) : '')
  const errors: Partial<Record<OfferField, string>> = {}
  for (const f of OFFER_FIELDS) {
    const p = fieldProblem(f, get(f))
    if (p) errors[f] = p
  }
  if (Object.keys(errors).length) return { errors }
  // jedan red: bez preloma u poljima koja idu u naslov ili zaglavlje mejla
  const line = (k: OfferField) => get(k).trim().replace(/\s+/g, ' ')
  return {
    offer: { name: line('name'), organization: line('organization'), email: line('email'), phone: line('phone'), members: line('members'), message: get('message').trim() },
  }
}

export function offerEmailText(o: Offer): string {
  return [
    `Ime i prezime: ${o.name}`,
    `Organizacija: ${o.organization}`,
    `Email: ${o.email}`,
    `Telefon: ${o.phone}`,
    `Broj članova: ${o.members}`,
    '',
    'Poruka:',
    o.message || '(bez poruke)',
  ].join('\n')
}
