'use client'

// Zaglavlje preko heroja. Ispod 1100px linkovi idu u meni koji se otvara dugmetom.

import { useEffect, useRef, useState } from 'react'
import LogoMark from '@/components/art/LogoMark'
import { APP_LOGIN_URL, NAV } from '@/lib/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const header = useRef<HTMLElement>(null)
  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        button.current?.focus()
      }
    }
    const onClick = (e: MouseEvent) => {
      if (!header.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [open])

  return (
    <header ref={header} className="hd dark" style={{ background: 'transparent' }}>
      <div className="wrap hd-in">
        <a className="logo" href="/#top" aria-label="PratiPlati, početak stranice">
          <LogoMark tone="light" />
          PratiPlati
        </a>
        <nav className="nav" aria-label="Glavna navigacija">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hd-r">
          <a className="login" href={APP_LOGIN_URL}>
            Prijava
          </a>
          <a className="btn btn-cta" href="/#ponuda">
            <span className="long">Zatražite ponudu</span>
            <span className="short">Ponuda</span>
          </a>
          <button
            ref={button}
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mnav"
            aria-label={open ? 'Zatvorite meni' : 'Otvorite meni'}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav
        className="mnav"
        id="mnav"
        aria-label="Meni"
        hidden={!open}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) setOpen(false)
        }}
      >
        {NAV.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <a className="mnav-login" href={APP_LOGIN_URL}>
          Prijava
        </a>
      </nav>
    </header>
  )
}
