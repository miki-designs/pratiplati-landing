// Zatrazite ponudu: tekst i forma

import OfferForm from '@/components/OfferForm'

export default function Offer() {
  return (
    <section className="sec offer-sec dark" id="ponuda" aria-labelledby="h-offer">
      <div className="wrap offer-grid">
        <div className="offer-side">
          <p className="eyebrow">Zatražite ponudu</p>
          <h2 className="h2" id="h-offer">Želite PratiPlati u svojoj organizaciji?</h2>
          <p className="lead">Pošaljite nam nekoliko osnovnih informacija i javićemo vam se sa ponudom i narednim koracima.</p>
          <ul className="assure">
            <li><svg className="ico" aria-hidden="true"><use href="#i-check" /></svg>Slanje upita vas ni na šta ne obavezuje.</li>
            <li><svg className="ico" aria-hidden="true"><use href="#i-clock" /></svg>Odgovaramo sa ponudom i narednim koracima.</li>
            <li><svg className="ico" aria-hidden="true"><use href="#i-shield" /></svg>Podatke koristimo samo za vaš upit.</li>
          </ul>
        </div>
        <OfferForm />
      </div>
    </section>
  )
}
