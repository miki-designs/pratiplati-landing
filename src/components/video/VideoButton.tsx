'use client'

// Dugme koje otvara video prozor i pusta video od pocetka

import { track } from '@vercel/analytics'
import { VIDEO_DIALOG_ID } from './VideoDialog'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function VideoButton({ children, ...rest }: Props) {
  function open() {
    const dialog = document.getElementById(VIDEO_DIALOG_ID) as HTMLDialogElement | null
    const video = dialog?.querySelector('video')
    if (!dialog || !video) return
    dialog.showModal()
    video.currentTime = 0
    video.play().catch(() => {})
    track('Pustio video') // shortcut: posebni dogadjaji se vide tek na Vercel Pro planu
  }

  return (
    <button type="button" {...rest} onClick={open}>
      {children}
    </button>
  )
}
