// Pregled: replika glavnog ekrana direktora

export default function Overview() {
  return (
    <section className="sec overview" id="pregled" aria-labelledby="h-ov">
      <div className="blob" aria-hidden="true"></div>
      <div className="dots" aria-hidden="true"></div>
      <div className="wrap">
        <div className="ov-head">
          <p className="eyebrow">Pregled</p>
          <h2 className="h2" id="h-ov">Jasan i brz pregled svega što se dešava sa uplatama.</h2>
          <p className="lead">Na jednom ekranu vidite ukupno stanje uplata, obaveze koje kasne, poslate podsetnike i sve što zahteva vašu pažnju.</p>
        </div>
        <div className="screen-stage">
          <div className="app tilt" role="img" aria-label="Glavni pregled PratiPlati: uplaćeno 96 od 128, 12 dokaza čeka potvrdu, 20 kasni, obaveze po statusu, poslati podsetnici i grupe.">
            <div className="app-bar"><i></i><i></i><i></i><span></span></div>
            <div className="app-hd">
              <span className="app-brand"><svg aria-hidden="true" style={{ '--mk-main': '#011638', '--mk-tail': '#A8B4C8' }}><use href="#pp" /></svg>PratiPlati</span>
              <span className="app-nav"><span className="on">Pregled</span><span>Grupe</span><span>Zahtevi <span className="cnt">3</span></span><span>Članovi</span><span>Podsetnici</span></span>
              <span className="app-user"><span>Milica Stojanović<small>Direktor</small></span><span className="av">MS</span></span>
            </div>
            <div className="app-body">
              <div className="app-title"><div><span className="kick">Organizacija</span><b>Muzička škola Harmonija</b></div><span className="kick" style={{ letterSpacing: '.04em', textTransform: 'none', fontWeight: '600' }}>Oktobar 2026</span></div>
              <div className="panel" style={{ gridColumn: '1/-1' }}>
                <h4>Stanje meseca</h4>
                <div className="tiles"><div className="tile dk">Uplaćeno ovog meseca<b>96 <span>/ 128</span></b></div><div className="tile">Dokazi za potvrdu<b>12</b></div><div className="tile">Kasni<b>20</b></div><div className="tile">Zahtevi za članstvo<b>3</b></div></div>
              </div>
              <div className="panel">
                <h4>Obaveze po statusu</h4>
                <div className="stat-row"><div className="stat">Nije dostavljeno<b>14</b></div><div className="stat">Čeka pregled<b>12</b></div><div className="stat">Potvrđeno<b>96</b></div><div className="stat">Odbijeno<b>6</b></div></div>
                <table className="tbl"><thead><tr><th>Grupa</th><th className="hide-s">Saradnik</th><th className="num-r">Iznos</th><th>Kasni</th></tr></thead>
                  <tbody><tr><td><b>Gitara I</b></td><td className="hide-s">Dragan Ristić</td><td className="num-r">3.500 RSD</td><td>3</td></tr><tr><td><b>Klavir I</b></td><td className="hide-s">Ivana Lazić</td><td className="num-r">4.000 RSD</td><td>5</td></tr><tr><td><b>Violina I</b></td><td className="hide-s">Marija Kostić</td><td className="num-r">4.500 RSD</td><td>2</td></tr></tbody></table>
              </div>
              <div className="panel">
                <h4>Podsetnici ovog meseca</h4>
                <div className="rem-big"><b>34</b><small style={{ color: 'var(--muted)', fontWeight: '700' }}>poslato</small></div>
                <div className="rem"><div>Rok uskoro<small>18</small></div><div>Nema potvrde uplate<small>10</small></div><div>Dokaz nije prihvaćen<small>6</small></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
