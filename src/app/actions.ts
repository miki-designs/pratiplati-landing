'use server'

// Mejlovi vlasniku sajta preko Resend API-ja (bez dodatnog paketa): upiti sa forme i otvoreni licni linkovi

import { CONTACT_EMAIL, SITE_URL } from '@/lib/site'
import { linkTag } from '@/lib/link-tag'
import { offerEmailText, validateOffer, type OfferField } from '@/lib/offer'

export type OfferResult = { ok: true } | { ok: false; error: string; fields?: Partial<Record<OfferField, string>> }

const MIN_FILL_MS = 2000 // brze od ovoga popunjava samo bot

/** Salje mejl vlasniku sajta; vraca null kad kljuc nije postavljen */
async function mailOwner(subject: string, text: string, replyTo?: string): Promise<boolean | null> {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    // shortcut: bez kljuca lokalno samo ispisujemo poruku; na Vercelu kljuc mora biti postavljen
    console.info(`[mejl nije poslat jer nema RESEND_API_KEY] ${subject}\n${text}`)
    return null
  }
  // shortcut: nema ogranicenja broja slanja po IP adresi; dodati (npr. Upstash) ako krene spam
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.OFFER_FROM ?? 'PratiPlati <upit@notify.pratiplati.com>',
      to: [process.env.OFFER_TO ?? CONTACT_EMAIL],
      reply_to: replyTo,
      subject,
      text,
    }),
  })
  if (!res.ok) console.error('Resend greska', res.status, await res.text())
  return res.ok
}

export async function sendOffer(formData: FormData): Promise<OfferResult> {
  // zamka za botove: skriveno polje koje covek ne vidi
  if (formData.get('website')) return { ok: true }

  const started = Number(formData.get('started'))
  if (!started || Date.now() - started < MIN_FILL_MS) return { ok: false, error: 'Molimo pokušajte ponovo za trenutak.' }

  const result = validateOffer(Object.fromEntries(formData))
  if ('errors' in result) return { ok: false, error: 'Proverite označena polja.', fields: result.errors }
  const offer = result.offer

  const sent = await mailOwner(`Novi upit: ${offer.organization}`, offerEmailText(offer), offer.email)
  if (sent === null) {
    return process.env.NODE_ENV !== 'production' ? { ok: true } : { ok: false, error: `Slanje trenutno ne radi. Pišite nam na ${CONTACT_EMAIL}.` }
  }
  if (!sent) return { ok: false, error: `Slanje nije uspelo. Pokušajte ponovo ili pišite na ${CONTACT_EMAIL}.` }
  return { ok: true }
}

/** Licni link (?za=ime) je otvoren u pregledacu */
export async function notifyLinkOpen(raw: string): Promise<void> {
  const tag = linkTag(raw)
  if (!tag) return
  const when = new Intl.DateTimeFormat('sr-Latn-RS', { timeZone: 'Europe/Belgrade', dateStyle: 'medium', timeStyle: 'short' }).format(new Date())
  await mailOwner(`Otvoren link: ${tag}`, `Neko je otvorio lični link „${tag}“ (${when}).\n\nLink: ${SITE_URL}/?za=${encodeURIComponent(tag)}`)
}
