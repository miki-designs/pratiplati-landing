'use client'

// Licni link (?za=ime): javlja vlasniku sajta mejlom da je link otvoren, jednom po tabu

import { useEffect } from 'react'
import { notifyLinkOpen } from '@/app/actions'
import { linkTag } from '@/lib/link-tag'

export default function LinkOpenPing() {
  useEffect(() => {
    const url = new URL(location.href)
    const tag = linkTag(url.searchParams.get('za'))
    if (!tag) return
    // oznaka se sklanja iz adrese, da se ne prenese dalje ako osoba kopira link
    url.searchParams.delete('za')
    history.replaceState(history.state, '', url)
    try {
      if (sessionStorage.getItem('za') === tag) return
      sessionStorage.setItem('za', tag)
    } catch {}
    notifyLinkOpen(tag).catch(() => {})
  }, [])

  return null
}
