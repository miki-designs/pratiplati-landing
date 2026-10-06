'use client'

// Oblaci u heroju blago prate kursor (samo mis i samo bez smanjenog kretanja).
// Postavlja --mx i --my na najblizi .hero element.

import { useEffect, useRef } from 'react'

export default function HeroPointer() {
  const marker = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const hero = marker.current?.closest<HTMLElement>('.hero')
    if (!hero) return
    if (!matchMedia('(pointer:fine)').matches || matchMedia('(prefers-reduced-motion:reduce)').matches) return
    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect()
      hero.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
      hero.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
    }
    hero.addEventListener('pointermove', move)
    return () => hero.removeEventListener('pointermove', move)
  }, [])

  return <span ref={marker} hidden />
}
