import 'react'

// Dozvoljava CSS promenljive u style objektu, na primer style={{ '--d': '0.04' }}
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}
