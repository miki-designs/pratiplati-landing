// Uloge: administrator, saradnik, korisnik

import Pix from '@/components/art/Pix'
import BigP from '@/components/art/BigP'

export default function Roles() {
  return (
    <section className="sec roles-sec dark" id="uloge" aria-labelledby="h-roles">
      <div className="wrap roles-grid">
        <div>
          <p className="eyebrow">Uloge</p>
          <h2 className="h2" id="h-roles">Svako vidi samo ono što mu je potrebno.</h2>
          <p className="lead">Administrator ima pregled cele organizacije, saradnici rade sa svojim korisnicima i obavezama, a korisnici prate sopstvene uplate i statuse.</p>
          <div className="role-list">
            <article className="role-row reveal"><Pix rows={['###.aaa', '###.aaa', '###.aaa', '.......', 'aaa.###', 'aaa.###', 'aaa.###']} className="role-pix" label="Pregled cele organizacije" /><div><div className="rr-top"><h3>Administrator</h3><span className="scope"><i className="s1"></i>Cela organizacija</span></div><p>Pregled cele organizacije, grupa, korisnika, uplata, dokaza i obaveza koje zahtevaju pažnju.</p></div></article>
            <article className="role-row reveal"><Pix rows={['......#', '.....##', '#...##.', '##.##..', '.###...', '..#....']} className="role-pix" label="Potvrda" /><div><div className="rr-top"><h3>Saradnik</h3><span className="scope"><i className="s2"></i>Svoje grupe</span></div><p>Radi sa svojim korisnicima i obavezama, pregleda dokaze i prati stanje koje mu je povereno.</p></div></article>
            <article className="role-row reveal"><Pix rows={['#####', '#aaa#', '#aaa#', '#aaa#', '#aaa#', '##a##', '#####']} className="role-pix" label="Telefon" /><div><div className="rr-top"><h3>Korisnik</h3><span className="scope"><i className="s3"></i>Samo svoje obaveze</span></div><p>Vidi svoje obaveze i statuse, dostavlja dokaz o uplati i prati šta se dešava sa svakom obavezom.</p></div></article>
          </div>
        </div>
        <figure className="scopes reveal">
          <BigP />
        </figure>
      </div>
    </section>
  )
}
