'use client'

// Video u prozoru preko stranice. Otvara ga bilo koje VideoButton dugme.

import { useEffect, useRef } from 'react'

export const VIDEO_DIALOG_ID = 'vd'

export default function VideoDialog({ src, poster }: { src: string; poster: string }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const d = dialog.current
    if (!d) return
    const pause = () => video.current?.pause()
    d.addEventListener('close', pause)
    return () => d.removeEventListener('close', pause)
  }, [])

  return (
    <dialog
      ref={dialog}
      className="vd"
      id={VIDEO_DIALOG_ID}
      aria-label="Video: kako PratiPlati radi"
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close()
      }}
    >
      <button className="vd-x" type="button" aria-label="Zatvorite video" onClick={() => dialog.current?.close()}>
        <svg viewBox="0 0 24 24">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      <div className="vd-box">
        <video ref={video} controls playsInline preload="none" poster={poster}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </dialog>
  )
}
