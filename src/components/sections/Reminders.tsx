// Podsetnici: pravila, zakljucan ekran telefona i mejl

import PhoneLock from '@/components/mock/PhoneLock'

export default function Reminders() {
  return (
    <section className="sec remind dark" id="podsetnici" aria-labelledby="h-rem">
      <div className="dots" aria-hidden="true"></div>
      <div className="wrap rem-grid">
        <div className="reveal">
          <p className="eyebrow">Podsetnici</p>
          <h2 className="h2" id="h-rem">Automatski podsetnici, bez ručnog praćenja.</h2>
          <p className="lead">PratiPlati automatski prepoznaje kašnjenja i šalje podsetnike prema pravilima koja ste postavili, bez ručnog proveravanja svakog korisnika.</p>
          <ul className="rules">
            <li><span className="chk" aria-hidden="true"><svg viewBox="0 0 24 24"><use href="#i-check" /></svg></span><span>5 dana pre roka<small>Podsetnik pre nego što rok istekne</small></span></li>
            <li><span className="chk" aria-hidden="true"><svg viewBox="0 0 24 24"><use href="#i-check" /></svg></span><span>Na dan roka<small>Poslednji dan za uplatu</small></span></li>
            <li><span className="chk" aria-hidden="true"><svg viewBox="0 0 24 24"><use href="#i-check" /></svg></span><span>5 dana posle roka<small>Opomena kada rok prođe</small></span></li>
          </ul>
          <div className="channels"><span className="chan"><svg className="ico" aria-hidden="true"><use href="#i-mail" /></svg>E-pošta</span><span className="chan"><svg className="ico" aria-hidden="true"><use href="#i-sms" /></svg>SMS</span></div>
        </div>
        <div className="rem-vis reveal" role="img" aria-label="Primer podsetnika e-poštom i SMS-om za korisnika čija uplata kasni.">
          <div className="rem-ph"><PhoneLock /></div>
          <div className="mail-wrap">
            <span className="mail-cap"><svg className="ico" aria-hidden="true"><use href="#i-mail" /></svg>E-pošta koju korisnik dobija</span>
            <div className="mail-stack"><div className="mail">
              <div className="mail-top"><span className="mail-app"><svg aria-hidden="true" style={{ '--mk-main': '#FAFAF7', '--mk-tail': '#A8B4C8' }}><use href="#pp" /></svg></span><span className="mail-from"><b>PratiPlati</b><small>Za: Jelena Petrović</small></span><small className="mail-time">danas, 09:00</small></div>
              <p className="mail-subj">Podsetnik o uplatama</p>
              <p>Poštovana Jelena Petrović,</p>
              <div className="cat">ROK USKORO</div>
              <div className="it"><span><b>Luka Petrović</b><small>Oktobar 2026. · rok 10. 10.</small></span><span className="amt">3.500 RSD</span></div>
              <div className="cat">NEMA POTVRDE UPLATE</div>
              <div className="it late"><span><b>Mila Petrović</b><small>Septembar 2026. · rok je prošao</small></span><span className="amt">4.000 RSD</span></div>
              <span className="mail-btn">Dostavi dokaz</span>
              <p className="mail-note">Ako ste uplatu već izvršili, dostavite dokaz kroz PratiPlati i evidencija će biti usklađena.</p>
            </div></div>
          </div>
          </div>
      </div>
    </section>
  )
}
