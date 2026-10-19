// Privatnost

import Pix from '@/components/art/Pix'

export default function Privacy() {
  return (
    <section className="sec priv" id="privatnost" aria-labelledby="h-priv">
      <div className="wrap priv-grid">
        <div className="reveal"><Pix rows={['..aaa..', '.a...a.', '.a...a.', '#######', '#######', '###.###', '###.###', '#######']} label="Katanac od kvadratića, kao u logotipu PratiPlati" /></div>
        <div>
          <p className="eyebrow">Privatnost</p>
          <h2 className="h2" id="h-priv">Vaši podaci ostaju dostupni samo onima kojima su namenjeni.</h2>
          <p className="lead">Pristup podacima zavisi od uloge korisnika, a podaci svake organizacije odvojeni su od podataka drugih organizacija.</p>
          <div className="priv-items">
            <div className="pi reveal"><svg className="ico" aria-hidden="true"><use href="#i-layers" /></svg><h3>Odvojene organizacije</h3><p>Podaci jedne organizacije nisu dostupni korisnicima druge.</p></div>
            <div className="pi reveal"><svg className="ico" aria-hidden="true"><use href="#i-key" /></svg><h3>Kontrolisan pristup</h3><p>Svaki korisnik vidi samo podatke i funkcije koji pripadaju njegovoj ulozi.</p></div>
            <div className="pi reveal"><svg className="ico" aria-hidden="true"><use href="#i-lock" /></svg><h3>Privatni dokazi</h3><p>Dokazi o uplati nisu javno dostupni i mogu im pristupiti samo ovlašćeni korisnici.</p></div>
            <div className="pi reveal"><svg className="ico" aria-hidden="true"><use href="#i-link" /></svg><h3>Kontrolisan ulazak u sistem</h3><p>Novi članovi pristupaju organizaciji preko pozivnog linka i procesa odobravanja.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
