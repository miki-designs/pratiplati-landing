// Podnozje

import { APP_LOGIN_URL } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="ft dark">
      <div className="wrap">
        <div className="ft-in">
          <div><a className="logo" href="/#top"><svg aria-hidden="true" style={{ '--mk-main': '#FAFAF7', '--mk-tail': '#A8B4C8' }}><use href="#pp" /></svg>PratiPlati</a><p>Evidencija i praćenje uplata za organizacije.</p></div>
          <nav aria-label="Footer"><a href="/#kako-radi">Kako radi</a><a href="/#podsetnici">Podsetnici</a><a href="/#privatnost">Privatnost</a><a href="/#pitanja">Česta pitanja</a><a href="/#ponuda">Zatražite ponudu</a><a href={APP_LOGIN_URL}>Prijava</a><a href="/politika-privatnosti">Politika privatnosti</a></nav>
        </div>
        <div className="ft-bot"><span>© 2026 PratiPlati</span><a href="https://bymaricdigital.com/">Razvija Marić Digital</a></div>
      </div>
    </footer>
  )
}
