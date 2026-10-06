'use client'

// Rukom crtane strelice (.curl) se iscrtaju celim potezom kad udju u ekran, vrh tek posle linije.
// Bez podrske ili uz smanjeno kretanje strelice su odmah nacrtane.

import { useEffect } from 'react'

export default function CurlObserver() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion:reduce)').matches) return
    const root = document.documentElement
    root.classList.add('draw-on')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.7 },
    )
    document.querySelectorAll('.curl').forEach((c) => io.observe(c))
    return () => {
      io.disconnect()
      root.classList.remove('draw-on')
    }
  }, [])

  return null
}
