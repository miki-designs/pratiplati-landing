// Veliki P logo u sekciji Uloge: kvadratici slova u plavom prelazu, ostali prigušeni

const LETTER: [number, number][] = [
  [1.5, 1.5], [1.5, 19.5], [1.5, 37.5], [1.5, 55.5], [1.5, 73.5],
  [19.5, 1.5], [37.5, 1.5], [37.5, 19.5], [19.5, 37.5], [37.5, 37.5],
]
const TAIL: [number, number][] = [[22, 22], [22, 58], [40, 58], [22, 76], [40, 76]]
const delay = (x: number, y: number, extra = 0) => (((x + y) / 18) * 0.08 + extra).toFixed(2)

export default function BigP() {
  return (
    <svg className="pix big-p" viewBox="0 0 54 90" role="img" aria-label="Logo PratiPlati od kvadratića">
      <defs>
        <linearGradient id="gP" x1="0" y1="90" x2="54" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3a86f5" />
          <stop offset=".5" stopColor="#5c9dff" />
          <stop offset="1" stopColor="#c2dbff" />
        </linearGradient>
      </defs>
      {LETTER.map(([x, y]) => (
        <rect key={`m${x}.${y}`} className="pm" x={x} y={y} width="15" height="15" rx="3.5" style={{ '--d': delay(x, y) }} />
      ))}
      {TAIL.map(([x, y]) => (
        <rect key={`t${x}.${y}`} className="pt" x={x} y={y} width="10" height="10" rx="2.5" style={{ '--d': delay(x, y, 0.1) }} />
      ))}
    </svg>
  )
}
