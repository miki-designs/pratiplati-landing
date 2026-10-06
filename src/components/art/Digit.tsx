// Brojevi od 1 do 5 slozeni od kvadratica (krugovi u sekciji Dokazi o uplati)

const DIGITS: Record<number, string[]> = {
  1: ['.#.', '##.', '.#.', '.#.', '###'],
  2: ['###', '..#', '###', '#..', '###'],
  3: ['###', '..#', '.##', '..#', '###'],
  4: ['#.#', '#.#', '###', '..#', '..#'],
  5: ['###', '#..', '###', '..#', '###'],
}

export default function Digit({ n }: { n: keyof typeof DIGITS }) {
  return (
    <svg viewBox="0 0 54 90">
      {DIGITS[n].flatMap((row, y) =>
        [...row].map((ch, x) =>
          ch === '#' ? <rect key={`${x}.${y}`} x={x * 18 + 2.5} y={y * 18 + 2.5} width="13" height="13" rx="3" /> : null,
        ),
      )}
    </svg>
  )
}
