// Hero: naslov, glavna dugmad i poster videa

import VideoButton from '@/components/video/VideoButton'
import Image from 'next/image'
import posterHero from '@/assets/poster-hero.jpg'
import HeroPointer from '@/components/motion/HeroPointer'

export default function Hero() {
  return (
    <section className="hero dark" id="top" aria-labelledby="h-hero">
      <HeroPointer />
      <div className="clouds" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      <div className="hero-dots" aria-hidden="true"></div>
      <div className="wrap">
        <div className="hero-copy">
          <h1 className="h1" id="h-hero">Jedan sistem za potpunu kontrolu <em>nad uplatama.</em></h1>
          <p className="lede">Sve što biste inače pratili ručno, PratiPlati organizuje za vas: vodi evidenciju obaveza, prati kašnjenja i šalje podsetnike, dok korisnici dostavljaju dokaz o uplati direktno kroz aplikaciju.</p>
          <div className="ctas">
            <VideoButton className="btn btn-cta"><span className="play-dot" aria-hidden="true"><svg viewBox="0 0 24 24"><use href="#i-play" /></svg></span>Kako PratiPlati radi</VideoButton>
            <a className="btn btn-ghost" href="#ponuda">Zatražite ponudu</a>
          </div>
        </div>
      </div>
      <div className="stage wrap">
        <span className="float f1"><span className="badge b-pend">ČEKA POTVRDU</span><span>Luka P.<small>Gitara I · 3.500 RSD</small></span></span>
        <span className="float f2"><span className="badge b-paid">PLAĆENO</span><span>Mila P.<small>Potvrđeno danas u 18:42</small></span></span>
        <VideoButton className="poster tilt" aria-label="Pustite video: kako PratiPlati radi, 1 minut">
          <Image src={posterHero} alt="" preload sizes="(max-width: 1100px) 100vw, 1040px" />
          <span className="play" aria-hidden="true"><svg viewBox="0 0 24 24" style={{ color: '#FAFAF7' }}><use href="#i-play" /></svg></span>
          <span className="dur" aria-hidden="true">1:00</span>
        </VideoButton>
      </div>
    </section>
  )
}
