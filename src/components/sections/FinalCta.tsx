// Zavrsni poziv na akciju

import VideoButton from '@/components/video/VideoButton'
import Image from 'next/image'
import posterCta from '@/assets/poster-cta.jpg'

export default function FinalCta() {
  return (
    <section className="final" aria-labelledby="h-final">
      <div className="wrap">
        <div className="final-card dark">
          <div className="dots" aria-hidden="true"></div>
          <div className="reveal">
            <h2 className="h2" id="h-final">Spremni da evidencija i podsetnici rade umesto vas?</h2>
            <p className="lead">Zatražite ponudu za svoju organizaciju. Ako želite prvo da vidite ceo tok, video traje jedan minut.</p>
            <div className="ctas">
              <a className="btn btn-cta" href="#ponuda">Zatražite ponudu</a>
              <VideoButton className="btn btn-ghost"><span className="play-dot" aria-hidden="true"><svg viewBox="0 0 24 24"><use href="#i-play" /></svg></span>Pogledajte video</VideoButton>
            </div>
          </div>
          <div className="final-vis">
            <svg className="spark" viewBox="0 0 60 60" aria-hidden="true"><path d="M30 6v12M48 14l-8 8M54 32H42" /></svg>
            <VideoButton className="poster" aria-label="Pustite video: kako PratiPlati radi, 1 minut">
              <Image src={posterCta} alt="" sizes="(max-width: 900px) 100vw, 560px" />
              <span className="play" aria-hidden="true"><svg viewBox="0 0 24 24" style={{ color: '#FAFAF7' }}><use href="#i-play" /></svg></span>
              <span className="dur" aria-hidden="true">1:00</span>
            </VideoButton>
            <svg className="curl" viewBox="0 0 190 120" aria-hidden="true"><path style={{ '--len': '400' }} d="M182 10c-30 6-58 30-52 56 5 22 34 20 30-2-4-24-44-26-74-4-22 16-42 34-70 44" /><path style={{ '--len': '60' }} d="M30 92l-16 13 20 3" /></svg>
          </div>
        </div>
      </div>
    </section>
  )
}
