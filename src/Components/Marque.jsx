import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import arrow from '../assets/arrow.png'

const Marque = () => {

  const trackRef = useRef(null)  
  const marqueeTweenRef = useRef(null)
  const arrowTweenRef = useRef(null)

  const items = [
    'INTELLIGENT DESIGN',
    'LIMITLESS PERFORMANCE',
    'ENGINEERED FOR THE ELEMENTS',
    'LIMITLESS PERFORMANCE',
    'BUILT FOR THE FUTURE',
    'LIMITLESS PERFORMANCE',
    'ENGINEERED FOR THE ELEMENTS',
    'INTELLIGENT DESIGN',
  ]
  
   useEffect(() => {
    marqueeTweenRef.current = gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 40,
      ease: "none",
    })
    arrowTweenRef.current = gsap.to(".marquee-arrow", {  
      rotate: 180,
      duration: 0.5,
      paused: true,
    })
    let scrollTimeout
    const handleWheel = (dets) => {
      const direction = dets.deltaY > 0 ? 1 : -1
      gsap.to(marqueeTweenRef.current, {
        timeScale: direction,
        overwrite: true,
      })
      if (direction > 0) {
        arrowTweenRef.current.play()
      } else {
        arrowTweenRef.current.reverse()
      }
    }
    window.addEventListener("wheel", handleWheel)
    return () => {
      window.removeEventListener("wheel", handleWheel)
      marqueeTweenRef.current?.kill()
      arrowTweenRef.current?.kill()
      clearTimeout(scrollTimeout)
    }
  }, [])
  return (
    <div className="overflow-hidden">
      <div className="move bg-black py-3 overflow-hidden relative border-y border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.25)]">
        <div ref={trackRef} className="flex w-max">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="shrink-0 flex items-center gap-[2vw] px-[1.5vw]">
              <h2 className="font-orbitron font-bold uppercase tracking-[0.15em] text-white whitespace-nowrap">
                {item}
              </h2>
              <img src={arrow} alt="" className="marquee-arrow h-[3.5vw] w-auto object-contain opacity-70" style={{ filter: 'invert(70%) sepia(60%) saturate(1500%) hue-rotate(150deg) brightness(1.1)' }}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marque