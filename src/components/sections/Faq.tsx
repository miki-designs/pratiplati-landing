// Cesta pitanja

import Pix from '@/components/art/Pix'

export default function Faq() {
  return (
    <section className="sec faq-sec" id="pitanja" aria-labelledby="h-faq">
      <div className="wrap faq-grid">
        <div className="faq-side">
          <Pix rows={['...####...', '.########.', '###....###', '##......##', '........##', '.......###', '.....####.', '....###...', '....##....', '....##....', '..........', '..........', '....##....', '....##....']} className="faq-pix" decorative step={0.03} />
          <p className="eyebrow">Česta pitanja</p>
          <h2 className="h2" id="h-faq">Odgovori pre prvog razgovora.</h2>
          <div className="ask">
            <b>Niste našli odgovor?</b>
            <p>Pošaljite nam upit i javićemo vam se sa odgovorom.</p>
            <a className="btn btn-cta" href="#ponuda">Pošaljite upit</a>
          </div>
        </div>
        <div className="faq">
          <details className="qa" open><summary><span className="qn">01</span><span className="qt">Da li PratiPlati prima novac?</span><i aria-hidden="true"></i></summary><div className="ans">Ne. Uplate i dalje idu direktno na račun vaše organizacije. PratiPlati služi za evidenciju, praćenje i upravljanje procesom uplata.</div></details>
          <details className="qa"><summary><span className="qn">02</span><span className="qt">Kako PratiPlati evidentira uplatu?</span><i aria-hidden="true"></i></summary><div className="ans">Član nakon plaćanja fotografiše ili prilaže dokaz o uplati kroz aplikaciju. Vi ili ovlašćeni saradnik pregledate dokaz i potvrđujete uplatu, nakon čega se status obaveze ažurira.</div></details>
          <details className="qa"><summary><span className="qn">03</span><span className="qt">Kako PratiPlati zna da uplata kasni?</span><i aria-hidden="true"></i></summary><div className="ans">Sistem prati rok i status svake obaveze i prepoznaje kada ona nije izmirena na vreme.</div></details>
          <details className="qa"><summary><span className="qn">04</span><span className="qt">Kako funkcionišu podsetnici?</span><i aria-hidden="true"></i></summary><div className="ans">PratiPlati šalje podsetnike članovima čije obaveze nisu izmirene, prema pravilima koja ste unapred postavili.</div></details>
          <details className="qa"><summary><span className="qn">05</span><span className="qt">Da li članovi moraju da instaliraju aplikaciju?</span><i aria-hidden="true"></i></summary><div className="ans">Ne. PratiPlati radi direktno u internet pregledaču na telefonu, tabletu ili računaru.</div></details>
          <details className="qa"><summary><span className="qn">06</span><span className="qt">Šta ako dokaz o uplati nije ispravan?</span><i aria-hidden="true"></i></summary><div className="ans">Dokaz možete da odbijete i navedete razlog. Član vidi razlog i može da pošalje novi dokaz.</div></details>
          <details className="qa"><summary><span className="qn">07</span><span className="qt">Možemo li da prenesemo postojeći spisak?</span><i aria-hidden="true"></i></summary><div className="ans">Da. Postojeće podatke možete da uvezete iz XLSX ili CSV fajla.</div></details>
          <details className="qa"><summary><span className="qn">08</span><span className="qt">Da li svi korisnici vide iste podatke?</span><i aria-hidden="true"></i></summary><div className="ans">Ne. Administrator, saradnici i članovi imaju različite nivoe pristupa i vide samo ono što im je potrebno.</div></details>
          <details className="qa"><summary><span className="qn">09</span><span className="qt">Da li je PratiPlati namenjen samo određenoj vrsti organizacije?</span><i aria-hidden="true"></i></summary><div className="ans">Ne. Namenjen je organizacijama koje imaju članove, redovne obaveze i potrebu da prate uplate.</div></details>
        </div>
        <div className="ask ask-m">
          <b>Niste našli odgovor?</b>
          <p>Pošaljite nam upit i javićemo vam se sa odgovorom.</p>
          <a className="btn btn-cta" href="#ponuda">Pošaljite upit</a>
        </div>
      </div>
    </section>
  )
}
