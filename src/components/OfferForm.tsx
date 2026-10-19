'use client'

// Forma "Zatražite ponudu": provera polja u pregledacu (ista pravila kao na serveru),
// poruka ispod svakog polja i slanje preko serverske akcije.

import { useEffect, useRef, useState, useTransition } from 'react'
import { sendOffer } from '@/app/actions'
import { MEMBER_RANGES, OFFER_FIELDS, fieldProblem, type OfferField } from '@/lib/offer'

export default function OfferForm() {
  const form = useRef<HTMLFormElement>(null)
  const started = useRef(0)
  const [errors, setErrors] = useState<Partial<Record<OfferField, string>>>({})
  const [summary, setSummary] = useState('')
  const [sent, setSent] = useState(false)
  const [pending, startTransition] = useTransition()

  // vreme otvaranja stranice; server odbija upit poslat prebrzo (botovi)
  useEffect(() => {
    started.current = Date.now()
  }, [])

  const valueOf = (name: string) => (form.current?.elements.namedItem(name) as HTMLInputElement | null)?.value ?? ''

  function showErrors(next: Partial<Record<OfferField, string>>) {
    setErrors(next)
    const firstBad = OFFER_FIELDS.find((f) => next[f])
    if (firstBad) (form.current?.elements.namedItem(firstBad) as HTMLElement | null)?.focus()
    return Boolean(firstBad)
  }

  // Kad je polje vec oznaceno kao pogresno, proverava se ponovo dok korisnik kuca
  function recheck(e: React.FormEvent<HTMLFormElement>) {
    const el = e.target as HTMLInputElement
    const f = el.name as OfferField
    if (errors[f]) setErrors((prev) => ({ ...prev, [f]: fieldProblem(f, el.value) }))
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const next: Partial<Record<OfferField, string>> = {}
    for (const f of OFFER_FIELDS) next[f] = fieldProblem(f, valueOf(f))
    if (showErrors(next)) {
      setSummary('Proverite označena polja.')
      return
    }
    const data = new FormData(form.current!)
    data.set('started', String(started.current))
    setSummary('')
    startTransition(async () => {
      const res = await sendOffer(data)
      if (res.ok) return setSent(true)
      if (res.fields) showErrors(res.fields)
      setSummary(res.error)
    })
  }

  const invalid = (f: OfferField) => (f in errors ? (errors[f] ? 'true' : 'false') : undefined)
  const msg = (f: OfferField, id: string) => (
    <small className="fld-msg" id={id}>
      {errors[f] ?? ''}
    </small>
  )

  return (
    <form ref={form} className={`form reveal${sent ? ' sent' : ''}`} id="offer-form" noValidate onSubmit={submit} onInput={recheck} onChange={recheck}>
      <div className="fld">
        <label htmlFor="f-name">Ime i prezime</label>
        <input id="f-name" name="name" autoComplete="name" required maxLength={120} aria-describedby="m-name" aria-invalid={invalid('name')} />
        {msg('name', 'm-name')}
      </div>
      <div className="fld">
        <label htmlFor="f-org">Naziv organizacije</label>
        <input id="f-org" name="organization" autoComplete="organization" required maxLength={160} aria-describedby="m-org" aria-invalid={invalid('organization')} />
        {msg('organization', 'm-org')}
      </div>
      <div className="fld">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" autoComplete="email" required maxLength={160} aria-describedby="m-email" aria-invalid={invalid('email')} />
        {msg('email', 'm-email')}
      </div>
      <div className="fld">
        <label htmlFor="f-phone">Telefon</label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" required maxLength={40} aria-describedby="m-phone" aria-invalid={invalid('phone')} />
        {msg('phone', 'm-phone')}
      </div>
      <div className="fld full">
        <label htmlFor="f-count">Broj članova</label>
        <select id="f-count" name="members" required defaultValue="" aria-describedby="m-count" aria-invalid={invalid('members')}>
          <option value="">Izaberite</option>
          {MEMBER_RANGES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        {msg('members', 'm-count')}
      </div>
      <div className="fld full">
        <label htmlFor="f-msg">
          Poruka <span>(opciono)</span>
        </label>
        <textarea id="f-msg" name="message" maxLength={3000} aria-describedby="m-msg" aria-invalid={invalid('message')} />
        {msg('message', 'm-msg')}
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-web">Ne popunjavajte</label>
        <input id="f-web" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="err fld full" id="f-err" role="alert">
        {summary}
      </p>
      <button className="btn btn-cta" type="submit" disabled={pending} aria-busy={pending}>
        {pending ? 'Šaljem...' : 'Zatražite ponudu'}
      </button>
      <p className="form-note">
        Slanje upita vas ni na šta ne obavezuje. Podatke iz forme koristimo samo da bismo vam poslali ponudu. Više u{' '}
        <a href="/politika-privatnosti">politici privatnosti</a>.
      </p>
      <div className="form-ok" role="status">
        <svg className="ico" aria-hidden="true">
          <use href="#i-check" />
        </svg>
        Hvala! Upit je poslat. Javićemo vam se sa ponudom i narednim koracima.
      </div>
    </form>
  )
}
