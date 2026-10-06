// Ilustracije od zaobljenih kvadratica, istim jezikom kao logo.
// '#' je glavna boja, 'a' druga, 'b' treca (boje dolaze iz --pix1, --pix2, --pix3).

const STEP = 18
const SIZE = 15
const RADIUS = 3.5
const TONE: Record<string, string> = { '#': 'p1', a: 'p2', b: 'p3' }

type Props = {
  rows: string[]
  className?: string
  /** Kratak opis za citac ekrana. Bez opisa ilustracija je samo ukras. */
  label?: string
  decorative?: boolean
  /** Kasnjenje animacije po dijagonali, u udelu animacije */
  step?: number
}

export default function Pix({ rows, className, label, decorative, step = 0.04 }: Props) {
  const width = Math.max(...rows.map((r) => r.length)) * STEP
  const height = rows.length * STEP
  const a11y = decorative || !label ? { 'aria-hidden': true } : { role: 'img', 'aria-label': label }

  return (
    <svg className={className ? `pix ${className}` : 'pix'} viewBox={`0 0 ${width} ${height}`} {...a11y}>
      {rows.flatMap((row, y) =>
        [...row].map((ch, x) =>
          TONE[ch] ? (
            <rect
              key={`${x}.${y}`}
              className={TONE[ch]}
              x={x * STEP + 1.5}
              y={y * STEP + 1.5}
              width={SIZE}
              height={SIZE}
              rx={RADIUS}
              style={{ '--d': ((x + y) * step).toFixed(2) }}
            />
          ) : null,
        ),
      )}
    </svg>
  )
}
