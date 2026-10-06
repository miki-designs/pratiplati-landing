// Kako radi: tri koraka sa strelicama

import Pix from '@/components/art/Pix'

export default function HowItWorks() {
  return (
    <section className="sec" id="kako-radi" aria-labelledby="h-how" style={{ paddingBottom: 'clamp(40px,5vw,72px)' }}>
      <div className="wrap">
        <div className="how-head">
          <div><p className="eyebrow">Kako radi</p><h2 className="h2" id="h-how">Sve što se dešava sa uplatama, na jednom mestu.</h2></div>
          <p className="lead">Sve obaveze i uplate prolaze kroz isti sistem, pa u svakom trenutku imate jasnu sliku stanja. Odmah vidite šta je plaćeno, šta kasni i šta zahteva reakciju.</p>
        </div>
        <div className="steps">
          <svg className="curl sc1" viewBox="0 0 180 110" aria-hidden="true"><path style={{ '--len': '300' }} d="M8 30C30 8 70 4 92 22C110 38 96 62 80 52C64 42 82 14 112 18C142 22 158 50 160 86" /><path style={{ '--len': '40' }} d="M148 75l12 13 11-14" /></svg>
          <article className="step inv reveal">
            <div className="step-top"><Pix rows={['.a...a.', '#######', '#.....#', '#.a.a.#', '#.....#', '#.a.#.#', '#######']} className="step-pix" label="Kalendar" /><span className="num">01</span></div>
            <h3>Postavite obaveze</h3>
            <p>Za svaku grupu definišete iznos, rok i pravila naplate. PratiPlati od tog trenutka vodi evidenciju.</p>
            <div className="mini" aria-hidden="true">
              <span className="mini-label">Gitara I</span>
              <div className="mini-row"><span>Mesečni iznos</span><span className="mini-in">3.500 RSD</span></div>
              <div className="mini-row"><span>Rok za uplatu</span><span className="mini-in">10. u mesecu</span></div>
            </div>
          </article>
          <article className="step inv reveal">
            <div className="step-top"><Pix rows={['..###..', '#######', '##...##', '#..a..#', '##...##', '#######']} className="step-pix" label="Kamera" /><span className="num">02</span></div>
            <h3>Pratite uplate</h3>
            <p>Korisnik nakon plaćanja fotografiše ili prilaže dokaz o uplati direktno kroz PratiPlati. Dokaz se vezuje za njegovu obavezu, a vi ili ovlašćeni saradnik ga pregledate i potvrđujete.</p>
            <div className="mini" aria-hidden="true">
              <div className="mini-file"><i></i><span><b>uplatnica-oktobar.jpg</b><br /><small style={{ color: 'var(--muted)' }}>Luka P. · Oktobar 2026</small></span></div>
              <div className="mini-row"><span className="badge b-pend">ČEKA POTVRDU</span><span className="mini-btn">Potvrdi</span></div>
            </div>
          </article>
          <article className="step inv reveal">
            <div className="step-top"><Pix rows={['#######', '##...##', '#.#.#.#', '#..#..#', '#.....#', '#######']} className="step-pix" label="Koverta sa porukom" /><span className="num">03</span></div>
            <h3>Šaljite podsetnike</h3>
            <p>Kada uplata kasni, sistem šalje podsetnik prema zadatim pravilima, dok vi u svakom trenutku imate jasan pregled stanja.</p>
            <div className="mini" aria-hidden="true">
              <div className="mail-mini"><svg className="ico" aria-hidden="true"><use href="#i-mail" /></svg><span><b>Rok uskoro</b><br /><small style={{ color: 'var(--muted)' }}>Vuk Đ. · Oktobar 2026 · rok 10. 10.</small></span></div>
              <div className="mini-row"><span className="badge b-wait">5 dana pre roka</span><span style={{ fontWeight: '700' }}>Poslato</span></div>
            </div>
            <svg className="curl sc2" viewBox="0 0 180 110" aria-hidden="true"><path style={{ '--len': '301' }} d="M10 64C30 92 70 100 90 80C104 66 92 44 76 52C60 60 70 90 104 88C134 86 150 50 150 14" /><path style={{ '--len': '40' }} d="M139 26l11-14 11 14" /></svg>
          </article>
        </div>
      </div>
    </section>
  )
}
