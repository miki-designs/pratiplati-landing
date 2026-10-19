'use server'

// Slanje upita sa forme na mejl preko Resend API-ja (bez dodatnog paketa)

import { CONTACT_EMAIL } from '@/lib/site'
import { offerEmailText, validateOffer, type OfferField } from '@/lib/offer'

export type OfferResult = { ok: true } | { ok: false; error: string; fields?: Partial<Record<OfferField, string>> }

const MIN_FILL_MS = 2000 // brze od ovoga popunjava samo bot

export async function sendOffer(formData: FormData): Promise<OfferResult> {
  // zamka za botove: skriveno polje koje covek ne vidi
  if (formData.get('website')) return { ok: true }

  const started = Number(formData.get('started'))
  if (!started || Date.now() - started < MIN_FILL_MS) return { ok: false, error: 'Molimo pokušajte ponovo za trenutak.' }

  const result = validateOffer(Object.fromEntries(formData))
  if ('errors' in result) return { ok: false, error: 'Proverite označena polja.', fields: result.errors }
  const offer = result.offer

  const key = process.env.RESEND_API_KEY
  if (!key) {
    // shortcut: bez kljuca lokalno samo ispisujemo upit; na Vercelu kljuc mora biti postavljen
    if (process.env.NODE_ENV !== 'production') {
      console.info('[upit, nije poslat jer nema RESEND_API_KEY]\n' + offerEmailText(offer))
      return { ok: true }
    }
    return { ok: false, error: `Slanje trenutno ne radi. Pišite nam na ${CONTACT_EMAIL}.` }
  }

  // shortcut: nema ogranicenja broja slanja po IP adresi; dodati (npr. Upstash) ako krene spam
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.OFFER_FROM ?? 'PratiPlati <upit@notify.pratiplati.com>',
      to: [process.env.OFFER_TO ?? CONTACT_EMAIL],
      reply_to: offer.email,
      subject: `Novi upit: ${offer.organization}`,
      text: offerEmailText(offer),
    }),
  })
  if (!res.ok) {
    console.error('Resend greska', res.status, await res.text())
    return { ok: false, error: `Slanje nije uspelo. Pokušajte ponovo ili pišite na ${CONTACT_EMAIL}.` }
  }
  return { ok: true }
}
