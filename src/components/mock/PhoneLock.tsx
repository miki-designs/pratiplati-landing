// Maketa telefona: zakljucan ekran sa obavestenjima o podsetnicima

import LogoMark from '@/components/art/LogoMark'
import StatusBar from './StatusBar'

const NOTES = [
  { kind: 'SMS · Podsetnik', when: 'sada', text: 'Rok za uplatu za Oktobar 2026. je 10. 10. Dokaz pošaljite kroz aplikaciju.' },
  { kind: 'E-pošta · Rok uskoro', when: 'sada', text: 'Luka Petrović, Oktobar 2026. 3.500 RSD' },
  { kind: 'SMS · Opomena', when: '15. sep.', text: 'Rok za uplatu za Septembar 2026. je prošao. Ako ste platili, pošaljite dokaz.' },
]

export default function PhoneLock() {
  return (
    <div className="phone">
      <div className="scr ls-bg">
        <StatusBar />
        <div className="ls">
          <div className="ls-top">
            <span className="ls-date">Ponedeljak, 5. oktobar</span>
            <b className="ls-time">9:41</b>
          </div>
          <div className="ls-stack">
            {NOTES.map((n) => (
              <div className="nt" key={n.kind}>
                <span className="nt-ic">
                  <LogoMark tone="light" />
                </span>
                <div>
                  <p className="nt-h">
                    <b>PratiPlati</b>
                    <small>{n.when}</small>
                  </p>
                  <p className="nt-t">{n.kind}</p>
                  <p>{n.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ls-bot">
            <span className="ls-btn">
              <svg viewBox="0 0 24 24">
                <path d="M8 3h8l-1.2 5H9.2z" />
                <path d="M9.2 8h5.6v12a1 1 0 0 1-1 1h-3.6a1 1 0 0 1-1-1z" />
                <path d="M12 12.5v3" />
              </svg>
            </span>
            <span className="ls-btn">
              <svg viewBox="0 0 24 24">
                <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.8l1.4-2h4.6l1.4 2h1.8A2.5 2.5 0 0 1 20 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5z" />
                <circle cx="12" cy="12.8" r="3.6" />
              </svg>
            </span>
          </div>
        </div>
        <span className="home" />
      </div>
    </div>
  )
}
