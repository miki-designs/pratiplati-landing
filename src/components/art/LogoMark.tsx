// Pikselni P iz SVG sprajta (#pp). Boje se menjaju preko --mk-main i --mk-tail.

type Props = { tone?: 'light' | 'dark'; className?: string; style?: React.CSSProperties }

export default function LogoMark({ tone = 'dark', className, style }: Props) {
  const colors = tone === 'light' ? { '--mk-main': '#FAFAF7', '--mk-tail': '#A8B4C8' } : { '--mk-main': '#011638', '--mk-tail': '#A8B4C8' }
  return (
    <svg aria-hidden="true" className={className} style={{ ...colors, ...style }}>
      <use href="#pp" />
    </svg>
  )
}
