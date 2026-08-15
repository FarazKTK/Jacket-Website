import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const cursor = useRef(null)
  const follower = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      })

      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
      })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <div ref={cursor} className="fixed top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00eaff,0_0_25px_rgba(0,234,255,0.8)] pointer-events-none z-[99999] max-md:hidden"/>
      <div ref={follower} className="fixed top-0 left-0 w-9 h-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/60 shadow-[0_0_15px_rgba(0,234,255,0.25),inset_0_0_10px_rgba(0,234,255,0.1)] pointer-events-none z-[99998] max-md:hidden"/>
    </>
  )
}

export default CustomCursor