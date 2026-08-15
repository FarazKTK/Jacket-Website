import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import vedio from '../assets/vedio.mp4'

const Hero = () => {
  const dotRef = useRef(null)
  const scrollIndicatorRef = useRef(null)

  useEffect(() => {
    const bounceTween = gsap.to(dotRef.current, {
      y: 16,
      duration: 1.4,
      repeat: -1,
      ease: 'bounce.out',
      repeatDelay: 0.6,
    })

    const fadeTween = gsap.to(scrollIndicatorRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollIndicatorRef.current,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
    })

    return () => {
      bounceTween.kill()
      fadeTween.kill()
    }
  }, [])

  return (
    <section className="position-relative w-100 vh-100 overflow-hidden">
      <video src={vedio} autoPlay loop muted playsInline className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"/>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background:'linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.35), rgba(0,0,0,0.8))',}}></div>
      <div className="position-relative z-2 w-100 h-100 d-flex justify-content-center align-items-center text-center">
        <div className="text-white">
        <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center gap-6">
          <span className="px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-400 text-xs font-semibold tracking-[3px] uppercase">
            ✦ WINTER 2026 COLLECTION ✦
          </span>
        </div>
          <h1 className="font-orbitron fw-bold text-uppercase" style={{ fontSize: 'clamp(45px, 8vw, 100px)',letterSpacing: '10px',}}>
            AETHERIS
          </h1>
          <p className="font-orbitron text-light mb-4" style={{fontSize: '12px', letterSpacing: '3px',opacity: '0.7'}}>
            INTELLIGENT DESIGN. LIMITLESS PERFORMANCE.
          </p>
           <a href="#" style={{textDecoration:'none'}} className="relative inline-flex items-center justify-center px-3 py-3 uppercase tracking-[3px] text-white overflow-hidden bg-black/40 backdrop-blur-md border-cyan-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            <span className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-cyan-400 to-blue-500 animate-border1"></span>
            <span className="absolute top-0 right-0 w-[2px] h-full bg-linear-to-b from-transparent via-cyan-400 to-blue-500 animate-border2"></span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-l from-transparent via-cyan-400 to-blue-500 animate-border3"></span>
            <span className="absolute top-0 left-0 w-[2px] h-full bg-linear-to-t from-transparent via-cyan-400 to-blue-500 animate-border4"></span>
            <span className="relative z-10 font-orbitron" style={{fontSize:'12px'}}>EXPLORE COLLECTION</span> 
          </a>
        </div>
      </div>
      <div ref={scrollIndicatorRef} className="position-absolute bottom-0 start-50 translate-middle-x mb-4 z-3 text-center">
        <span className="font-orbitron text-secondary" style={{fontSize: '10px',letterSpacing: '3px',}}>
          SCROLL
        </span>
        <div className="mx-auto mt-2" style={{width: '20px',height: '32px',border: '2px solid rgba(0, 220, 255, 0.5)',borderRadius: '20px',overflow:'hidden'}}>
          <div ref={dotRef} className="bg-info mx-auto mt-1 rounded-pill" style={{width: '4px',height: '8px',}}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero