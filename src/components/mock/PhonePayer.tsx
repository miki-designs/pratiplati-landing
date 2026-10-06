// Maketa telefona: ekran korisnika sa obavezom, dokazom o uplati i prethodnim uplatama

import LogoMark from '@/components/art/LogoMark'
import StatusBar from './StatusBar'
import Uplatnica from './Uplatnica'

const HISTORY = ['Septembar 2026.', 'Avgust 2026.']

export default function PhonePayer() {
  return (
    <div className="phone">
      <div className="scr">
        <StatusBar />
        <div className="pm">
          <div className="pm-head">
            <span className="pm-brand">
              <LogoMark />
              PratiPlati
            </span>
            <span className="pm-av">JP</span>
          </div>
          <div className="pm-hi">
            <small>Zdravo, Jelena</small>
            <b>Moje obaveze</b>
          </div>
          <div className="pm-card">
            <div className="pm-row">
              <span className="kick">Oktobar 2026</span>
              <span className="badge b-wait">ČEKA UPLATU</span>
            </div>
            <b className="pm-amt">
              3.500<small>RSD</small>
            </b>
            <span className="pm-sub">Luka · Gitara I · rok 10. 10. 2026.</span>
          </div>
          <div className="pm-card">
            <span className="kick">Dokaz o uplati</span>
            <div className="pm-photo">
              <Uplatnica id="upl-phone" />
            </div>
            <div className="pm-file">
              <span>uplatnica.jpg</span>
              <small>248 KB</small>
            </div>
            <span className="pm-btn">Dostavi dokaz</span>
          </div>
          <div className="pm-list">
            <span className="kick">Prethodne uplate</span>
            {HISTORY.map((month) => (
              <div key={month}>
                <span>{month}</span>
                <span className="badge b-paid">PLAĆENO</span>
              </div>
            ))}
          </div>
        </div>
        <span className="home" />
      </div>
    </div>
  )
}
