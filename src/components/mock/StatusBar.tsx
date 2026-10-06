// Statusna traka telefona: vreme, signal, wifi, baterija

export default function StatusBar() {
  return (
    <div className="sbar">
      <b>9:41</b>
      <span className="sb-ic">
        <svg viewBox="0 0 17 11">
          <rect x="0" y="7" width="3" height="4" rx=".8" />
          <rect x="4.6" y="5" width="3" height="6" rx=".8" />
          <rect x="9.2" y="2.6" width="3" height="8.4" rx=".8" />
          <rect x="13.8" y="0" width="3" height="11" rx=".8" />
        </svg>
        <svg viewBox="0 0 16 11.5">
          <path d="M8 11.5 5.7 9.1a3.3 3.3 0 0 1 4.6 0zM3.3 6.7a6.7 6.7 0 0 1 9.4 0l-1.6 1.6a4.4 4.4 0 0 0-6.2 0zM.8 4.2a10.2 10.2 0 0 1 14.4 0l-1.6 1.6a7.9 7.9 0 0 0-11.2 0z" />
        </svg>
        <i className="bat">
          <i />
        </i>
      </span>
    </div>
  )
}
