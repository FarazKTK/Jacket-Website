import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null)
  const barRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let val = 0
    const interval = setInterval(() => {
      val += Math.random() * 12
      if (val >= 100) {
        val = 100
        clearInterval(interval)

        gsap.to(barRef.current, {
          width: '100%',
          duration: 0.3,
          onComplete: () => {
            gsap.to(loaderRef.current, {
              opacity: 0,
              duration: 0.6,
              delay: 0.2,
              ease: 'power2.inOut',
              onComplete: () => {
                onComplete()
              },
            })
          },
        })
      }
      setProgress(Math.min(Math.floor(val), 100))
    }, 150)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center"
      style={{ zIndex: 999999 }}
    >
      <h1
        className="font-orbitron fw-bold text-uppercase text-white mb-4"
        style={{ fontSize: 'clamp(28px, 6vw, 60px)', letterSpacing: '8px' }}
      >
        AETHERIS
      </h1>

      <div
        className="relative overflow-hidden"
        style={{
          width: '220px',
          height: '2px',
          background: 'rgba(255,255,255,0.1)',
        }}
      >
        <div
          ref={barRef}
          className="absolute top-0 left-0 h-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
            transition: 'width 0.2s ease',
          }}
        />
      </div>

      <span
        className="font-orbitron text-cyan-400 mt-3"
        style={{ fontSize: '11px', letterSpacing: '3px' }}
      >
        {progress}%
      </span>
    </div>
  )
}

export default Loader