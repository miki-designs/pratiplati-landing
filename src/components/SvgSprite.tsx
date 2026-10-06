// SVG sprajt: logo (#pp) i ikonice (i-*). Koristi se preko <use href="#..." />.

export default function SvgSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="pp" viewBox="0 0 54 90">
        <g style={{ fill: 'var(--mk-tail,#A8B4C8)' }}><rect x="22" y="22" width="10" height="10" rx="2.5" /><rect x="22" y="58" width="10" height="10" rx="2.5" /><rect x="40" y="58" width="10" height="10" rx="2.5" /><rect x="22" y="76" width="10" height="10" rx="2.5" /><rect x="40" y="76" width="10" height="10" rx="2.5" /></g>
        <g style={{ fill: 'var(--mk-main,#011638)' }}><rect x="1.5" y="1.5" width="15" height="15" rx="3.5" /><rect x="1.5" y="19.5" width="15" height="15" rx="3.5" /><rect x="1.5" y="37.5" width="15" height="15" rx="3.5" /><rect x="1.5" y="55.5" width="15" height="15" rx="3.5" /><rect x="1.5" y="73.5" width="15" height="15" rx="3.5" /><rect x="19.5" y="1.5" width="15" height="15" rx="3.5" /><rect x="37.5" y="1.5" width="15" height="15" rx="3.5" /><rect x="37.5" y="19.5" width="15" height="15" rx="3.5" /><rect x="19.5" y="37.5" width="15" height="15" rx="3.5" /><rect x="37.5" y="37.5" width="15" height="15" rx="3.5" /></g>
      </symbol>
      <symbol id="i-play" viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z" fill="currentColor" /></symbol>
      <symbol id="i-coins" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="3" /><path d="M3.5 10h17M8 3v4M16 3v4M8 14h3M8 17h6" /></symbol>
      <symbol id="i-camera" viewBox="0 0 24 24"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.8l1.4-2h4.6l1.4 2h1.8A2.5 2.5 0 0 1 20 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5z" /><circle cx="12" cy="12.8" r="3.6" /></symbol>
      <symbol id="i-bell" viewBox="0 0 24 24"><path d="M6 10a6 6 0 1 1 12 0c0 5 2 6.5 2 6.5H4S6 15 6 10z" /><path d="M10 20a2.2 2.2 0 0 0 4 0" /></symbol>
      <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="2.5" /><path d="m4 7.5 8 6 8-6" /></symbol>
      <symbol id="i-sms" viewBox="0 0 24 24"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3.5V17h0A2.5 2.5 0 0 1 4 14.5z" /><path d="M8.5 10.5h7" /></symbol>
      <symbol id="i-layers" viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></symbol>
      <symbol id="i-key" viewBox="0 0 24 24"><circle cx="8" cy="15" r="4" /><path d="m11 12 8.5-8.5M16 7l2.5 2.5M14 9l2 2" /></symbol>
      <symbol id="i-lock" viewBox="0 0 24 24"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" /></symbol>
      <symbol id="i-link" viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></symbol>
      <symbol id="i-sheet" viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 15.5h6M12 10v8" /></symbol>
      <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" /></symbol>
      <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></symbol>
      <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z" /><path d="m9 12 2 2 4-4" /></symbol>
    </svg>
  )
}
