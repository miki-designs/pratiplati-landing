// Dokazi o uplati: tok od fotografije do evidentirane uplate

import Digit from '@/components/art/Digit'
import PhonePayer from '@/components/mock/PhonePayer'

export default function Proof() {
  return (
    <section className="sec" id="dokazi" aria-labelledby="h-proof">
      <div className="wrap">
        <div className="proof-head">
          <div><p className="eyebrow">Dokazi o uplati</p><h2 className="h2" id="h-proof">Od fotografije do evidentirane uplate.</h2></div>
          <div>
            <p className="lead" style={{ margin: '0' }}>Korisnik nakon plaćanja fotografiše uplatnicu ili prilaže postojeću sliku ili PDF. Dokaz stiže direktno u PratiPlati, gde ga pregledate i potvrđujete.</p>
            <p className="lead">Ako dokaz nije ispravan, možete ga odbiti uz razlog. Korisnik vidi razlog i može odmah da pošalje novi dokaz.</p>
          </div>
        </div>
        <div className="flow" role="img" aria-label="Tok dokaza: korisnik na telefonu, Dostavi dokaz, status Čeka potvrdu, Potvrdi, status Plaćeno.">
          <div className="track" aria-hidden="true"><i></i></div>
          <div className="nodes">
            <div className="node"><div className="node-vis" aria-hidden="true"><PhonePayer /></div><span className="dot-n" aria-hidden="true"><Digit n={1} /></span><div><b>Fotografija</b><br /><span>Korisnik slika uplatnicu ili bira PDF</span></div></div>
            <div className="node"><div className="node-vis" aria-hidden="true"><span className="pill-ui pu-blue">Dostavi dokaz</span></div><span className="dot-n" aria-hidden="true"><Digit n={2} /></span><div><b>Slanje</b><br /><span>Dokaz se vezuje za obavezu</span></div></div>
            <div className="node"><div className="node-vis" aria-hidden="true"><span className="badge b-pend">ČEKA POTVRDU</span></div><span className="dot-n" aria-hidden="true"><Digit n={3} /></span><div><b>Na pregledu</b><br /><span>Vi ili saradnik dobijate dokaz</span></div></div>
            <div className="node"><div className="node-vis" aria-hidden="true"><span className="pill-ui pu-blue">Potvrdi</span></div><span className="dot-n" aria-hidden="true"><Digit n={4} /></span><div><b>Potvrda</b><br /><span>Jedan klik, ili odbijanje uz razlog</span></div></div>
            <div className="node"><div className="node-vis" aria-hidden="true"><span className="badge b-paid">PLAĆENO</span></div><span className="dot-n" aria-hidden="true"><Digit n={5} /></span><div><b>Evidentirano</b><br /><span>Status se ažurira za sve</span></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
