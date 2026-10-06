'use client'

// Forma "Zatražite ponudu": provera polja u pregledacu i poruka ispod svakog polja.
// Slanje na mejl (serverska akcija + zastita od spama) dolazi u sledecem koraku;
// za sada forma posle ispravnog unosa samo prikazuje potvrdu.

import { useRef, useState } from 'react'

type Field = 'name' | 'organization' | 'email' | 'phone' | 'members'
const REQUIRED: Field[] = ['name', 'organization', 'email', 'phone', 'members']
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

function problem(field: Field, value: string): string {
  const v = value.trim()
  if (!v) return field === 'members' ? 'Izaberite broj korisnika.' : 'Ovo polje je obavezno.'
  if (field === 'email' && !EMAIL.test(v)) return 'Unesite ispravnu email adresu.'
  return ''
}

export default function OfferForm() {
  const form = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [summary, setSummary] = useState('')
  const [sent, setSent] = useState(false)

  const valueOf = (name: Field | 'website') => (form.current?.elements.namedItem(name) as HTMLInputElement | null)?.value ?? ''

  // Kad je polje vec oznaceno kao pogresno, proverava se ponovo dok korisnik kuca
  function recheck(e: React.FormEvent<HTMLFormElement>) {
    const el = e.target as HTMLInputElement
    const f = el.name as Field
    if (f in errors && errors[f]) setErrors((prev) => ({ ...prev, [f]: problem(f, el.value) }))
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (valueOf('website')) return // zamka za botove
    const next: Partial<Record<Field, string>> = {}
    for (const f of REQUIRED) next[f] = problem(f, valueOf(f))
    setErrors(next)
    const firstBad = REQUIRED.find((f) => next[f])
    if (firstBad) {
      setSummary('Proverite označena polja.')
      ;(form.current?.elements.namedItem(firstBad) as HTMLElement | null)?.focus()
      return
    }
    setSummary('')
    setSent(true)
  }

  const invalid = (f: Field) => (f in errors ? (errors[f] ? 'true' : 'false') : undefined)
  const msg = (f: Field, id: string) => (
    <small className="fld-msg" id={id}>
      {errors[f] ?? ''}
    </small>
  )

  return (
    <form ref={form} className={`form reveal${sent ? ' sent' : ''}`} id="offer-form" noValidate onSubmit={submit} onInput={recheck} onChange={recheck}>
      <div className="fld">
        <label htmlFor="f-name">Ime i prezime</label>
        <input id="f-name" name="name" autoComplete="name" required aria-describedby="m-name" aria-invalid={invalid('name')} />
        {msg('name', 'm-name')}
      </div>
      <div className="fld">
        <label htmlFor="f-org">Naziv organizacije</label>
        <input id="f-org" name="organization" autoComplete="organization" required aria-describedby="m-org" aria-invalid={invalid('organization')} />
        {msg('organization', 'm-org')}
      </div>
      <div className="fld">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" autoComplete="email" required aria-describedby="m-email" aria-invalid={invalid('email')} />
        {msg('email', 'm-email')}
      </div>
      <div className="fld">
        <label htmlFor="f-phone">Telefon</label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" required aria-describedby="m-phone" aria-invalid={invalid('phone')} />
        {msg('phone', 'm-phone')}
      </div>
      <div className="fld full">
        <label htmlFor="f-count">Broj korisnika</label>
        <select id="f-count" name="members" required defaultValue="" aria-describedby="m-count" aria-invalid={invalid('members')}>
          <option value="">Izaberite</option>
          <option>do 50</option>
          <option>od 51 do 150</option>
          <option>od 151 do 300</option>
          <option>više od 300</option>
        </select>
        {msg('members', 'm-count')}
      </div>
      <div className="fld full">
        <label htmlFor="f-msg">
          Poruka <span>(opciono)</span>
        </label>
        <textarea id="f-msg" name="message" />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-web">Ne popunjavajte</label>
        <input id="f-web" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="err fld full" id="f-err" role="alert">
        {summary}
      </p>
      <button className="btn btn-cta" type="submit">
        Zatražite ponudu
      </button>
      <p className="form-note">Slanje upita vas ni na šta ne obavezuje. Podatke iz forme koristimo samo da bismo vam poslali ponudu.</p>
      <div className="form-ok" role="status">
        <svg className="ico" aria-hidden="true">
          <use href="#i-check" />
        </svg>
        Hvala! Upit je poslat. Javićemo vam se sa ponudom i narednim koracima.
      </div>
    </form>
  )
}
