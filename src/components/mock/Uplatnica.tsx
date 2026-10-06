// Replika srpskog naloga za uplatu (Obrazac br. 1), popunjena rukom. Podaci su izmisljeni.

const HAND = "'Segoe Print','Bradley Hand','Marker Felt','Comic Sans MS',cursive"

export default function Uplatnica({ id = 'upl' }: { id?: string }) {
  const light = `${id}-light`
  return (
    <svg className="upl" viewBox="0 0 640 300" fontFamily="Arial,Helvetica,sans-serif" aria-hidden="true">
      <defs>
        <linearGradient id={light} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#0a1530" stopOpacity=".09" />
        </linearGradient>
      </defs>
      <rect width="640" height="300" fill="#fdfdfb" />

      {/* polja obrasca */}
      <g fill="none" stroke="#4a4f5a" strokeWidth="1.5">
        <line x1="318" y1="20" x2="318" y2="240" />
        <rect x="22" y="36" width="276" height="44" />
        <rect x="22" y="102" width="276" height="44" />
        <rect x="22" y="168" width="276" height="44" />
        <rect x="338" y="60" width="44" height="26" />
        <rect x="392" y="60" width="44" height="26" />
        <rect x="446" y="60" width="172" height="26" />
        <rect x="338" y="114" width="280" height="26" />
        <rect x="338" y="168" width="34" height="26" />
        <rect x="382" y="168" width="236" height="26" />
        <line x1="22" y1="262" x2="150" y2="262" />
        <line x1="178" y1="262" x2="306" y2="262" />
        <line x1="440" y1="262" x2="580" y2="262" />
      </g>

      {/* stampani natpisi */}
      <g fill="#5a5f6b" fontSize="9.5">
        <text x="22" y="30">уплатилац</text>
        <text x="22" y="96">сврха уплате</text>
        <text x="22" y="162">прималац</text>
        <text x="338" y="46" fontSize="8.5">шифра</text>
        <text x="338" y="56" fontSize="8.5">плаћања</text>
        <text x="392" y="56" fontSize="8.5">валута</text>
        <text x="446" y="56" fontSize="8.5">износ</text>
        <text x="338" y="109">рачун примаоца</text>
        <text x="338" y="163">модел и позив на број (одобрење)</text>
        <text x="22" y="275" fontSize="8.5">печат и потпис уплатиоца</text>
        <text x="178" y="275" fontSize="8.5">место и датум пријема</text>
        <text x="440" y="275" fontSize="8.5">датум валуте</text>
        <text x="618" y="292" fontSize="8" textAnchor="end">Образац бр. 1</text>
      </g>
      <text x="618" y="34" textAnchor="end" fontSize="15" fontWeight="700" letterSpacing="1.2" fill="#2a2e37">
        НАЛОГ ЗА УПЛАТУ
      </text>

      {/* popunjeno hemijskom */}
      <g fill="#2448a8" fontFamily={HAND}>
        <text x="32" y="64" fontSize="15">Јелена Петровић, Београд</text>
        <text x="32" y="130" fontSize="13.5">Школарина, Гитара I, октобар 2026.</text>
        <text x="32" y="196" fontSize="15">Музичка школа Хармонија</text>
        <text x="344" y="79" fontSize="13">189</text>
        <text x="396" y="79" fontSize="12.5">RSD</text>
        <text x="456" y="80" fontSize="16">=3.500,00</text>
        <text x="346" y="133" fontSize="14">160-0000001234567-89</text>
        <text x="344" y="187" fontSize="13">97</text>
        <text x="392" y="187" fontSize="13">1020-2026</text>
        <text x="186" y="256" fontSize="12">05.10.2026.</text>
      </g>
      <path d="M34 254c10-14 18-16 16-4-2 10 10-12 18-8 6 3-2 12 6 10 10-3 16-14 26-12" fill="none" stroke="#2448a8" strokeWidth="1.6" strokeLinecap="round" />

      {/* pecat poste */}
      <g transform="rotate(-14 512 226)" opacity=".5" fill="none" stroke="#5b47b3" strokeWidth="2">
        <circle cx="512" cy="226" r="40" />
        <circle cx="512" cy="226" r="29" strokeWidth="1.2" />
        <text x="512" y="221" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5b47b3" stroke="none">БЕОГРАД</text>
        <text x="512" y="236" textAnchor="middle" fontSize="10" fill="#5b47b3" stroke="none">05.10.26.</text>
        <text x="512" y="198" textAnchor="middle" fontSize="8" fill="#5b47b3" stroke="none">11000</text>
      </g>
      <rect width="640" height="300" fill={`url(#${light})`} />
    </svg>
  )
}
