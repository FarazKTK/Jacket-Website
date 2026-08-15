import React, { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ProductFive from '../assets/ProductFive.png'
import ProductSix from '../assets/ProductSix.png'
import ProductSeven from '../assets/ProductSeven.png'

gsap.registerPlugin(ScrollTrigger)

const arrivals = [
  {
    id: 1,
    name: 'PHASE PARKA',
    category: 'Outerwear',
    price: '$289',
    img: ProductFive,
  },
  {
    id: 2,
    name: 'ORBIT TRACK JACKET',
    category: 'Athleisure',
    price: '$179',
    img: ProductSix,
  },
  {
    id: 3,
    name: 'HALO SNEAKERS',
    category: 'Footwear',
    price: '$219',
    img: ProductSeven,
  },
  {
    id: 1,
    name: 'PHASE PARKA',
    category: 'Outerwear',
    price: '$289',
    img: ProductFive,
  },
   {
    id: 3,
    name: 'HALO SNEAKERS',
    category: 'Footwear',
    price: '$219',
    img: ProductSeven,
  },
   {
    id: 2,
    name: 'ORBIT TRACK JACKET',
    category: 'Athleisure',
    price: '$179',
    img: ProductSix,
  },
   {
    id: 3,
    name: 'HALO SNEAKERS',
    category: 'Footwear',
    price: '$219',
    img: ProductSeven,
  },
   {
    id: 1,
    name: 'PHASE PARKA',
    category: 'Outerwear',
    price: '$289',
    img: ProductFive,
  },
   {
    id: 2,
    name: 'ORBIT TRACK JACKET',
    category: 'Athleisure',
    price: '$179',
    img: ProductSix,
  },
   {
    id: 3,
    name: 'HALO SNEAKERS',
    category: 'Footwear',
    price: '$219',
    img: ProductSeven,
  },
   {
    id: 1,
    name: 'PHASE PARKA',
    category: 'Outerwear',
    price: '$289',
    img: ProductFive,
  },
   {
    id: 2,
    name: 'ORBIT TRACK JACKET',
    category: 'Athleisure',
    price: '$179',
    img: ProductSix,
  },
]

const Arrival = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const isAnimating = useRef(false)

  // Entrance animation on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.arrival-card', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Measure card width (card + gap) for slide math
  useEffect(() => {
    const measure = () => {
      if (cardRefs.current[0]) {
        const cardEl = cardRefs.current[0]
        const style = window.getComputedStyle(cardEl.parentElement)
        const gap = parseFloat(style.columnGap || style.gap || 0)
        setCardWidth(cardEl.offsetWidth + gap)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const goToSlide = (index) => {
    if (isAnimating.current) return
    const clamped = Math.max(0, Math.min(index, arrivals.length - 1))
    isAnimating.current = true
    gsap.to(trackRef.current, {
      x: -clamped * cardWidth,
      duration: 0.7,
      ease: 'power3.inOut',
      onComplete: () => {
        isAnimating.current = false
      },
    })
    setActiveIndex(clamped)
  }

  const handlePrev = () => goToSlide(activeIndex - 1)
  const handleNext = () => goToSlide(activeIndex + 1)

  // Basic drag/swipe support
  const dragState = useRef({ startX: 0, currentX: 0, dragging: false })

  const onPointerDown = (e) => {
    dragState.current.dragging = true
    dragState.current.startX = e.touches ? e.touches[0].clientX : e.clientX
  }
  const onPointerMove = (e) => {
    if (!dragState.current.dragging) return
    dragState.current.currentX = e.touches ? e.touches[0].clientX : e.clientX
  }
  const onPointerUp = () => {
    if (!dragState.current.dragging) return
    const delta = dragState.current.currentX - dragState.current.startX
    dragState.current.dragging = false
    if (delta > 60) handlePrev()
    else if (delta < -60) handleNext()
    dragState.current = { startX: 0, currentX: 0, dragging: false }
  }

  return (
    <section
      id="new-arrivals"
      ref={sectionRef}
      className="position-relative w-100 bg-black"
      style={{ paddingTop: '3rem', paddingBottom: '7rem' }}
    >
      <Container fluid className="px-4 px-lg-5">
        {/* Section Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-5 gap-3">
          <div>
            <span
              className="d-inline-block mb-3 text-cyan-400 font-orbitron"
              style={{
                border: '1px solid rgba(34,211,238,0.4)',
                background: 'rgba(8,51,68,0.6)',
                fontSize: '11px',
                letterSpacing: '3px',
                padding: '6px 18px',
                borderRadius: '999px',
              }}
            >
              ✦ JUST DROPPED ✦
            </span>
            <h2
              className="font-orbitron fw-bold text-white text-uppercase mb-0"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '6px' }}
            >
              New Arrivals
            </h2>
          </div>

          {/* Prev / Next controls */}
          <div className="d-flex align-items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous"
              className="d-flex align-items-center justify-content-center"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(34,211,238,0.4)',
                background: 'rgba(255,255,255,0.02)',
                color: '#22d3ee',
                fontSize: '18px',
                cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
                opacity: activeIndex === 0 ? 0.3 : 1,
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (activeIndex !== 0) e.currentTarget.style.background = 'rgba(34,211,238,0.15)'
              }}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === arrivals.length - 1}
              aria-label="Next"
              className="d-flex align-items-center justify-content-center"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(34,211,238,0.4)',
                background: 'rgba(255,255,255,0.02)',
                color: '#22d3ee',
                fontSize: '18px',
                cursor: activeIndex === arrivals.length - 1 ? 'not-allowed' : 'pointer',
                opacity: activeIndex === arrivals.length - 1 ? 0.3 : 1,
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (activeIndex !== arrivals.length - 1)
                  e.currentTarget.style.background = 'rgba(34,211,238,0.15)'
              }}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
            >
              →
            </button>
          </div>
        </div>

        <p
          className="font-orbitron text-secondary mb-4"
          style={{ fontSize: '12px', letterSpacing: '2px', opacity: 0.6, maxWidth: '360px' }}
        >
          THE LATEST FROM THE LAB — FRESH SILHOUETTES, LIMITED RUN
        </p>

        {/* Slider viewport */}
        <div
          style={{ overflow: 'hidden', cursor: 'grab' }}
          onMouseDown={onPointerDown}
          onMouseMove={onPointerMove}
          onMouseUp={onPointerUp}
          onMouseLeave={onPointerUp}
          onTouchStart={onPointerDown}
          onTouchMove={onPointerMove}
          onTouchEnd={onPointerUp}
        >
          <div ref={trackRef} className="d-flex gap-4" style={{ willChange: 'transform' }}>
            {arrivals.map((item, i) => (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[i] = el)}
                className="arrival-card position-relative overflow-hidden flex-shrink-0"
                style={{
                  width: 'min(340px, 80vw)',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.4s ease, transform 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34,211,238,0.5)'
                  e.currentTarget.style.transform = 'translateY(-6px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <span
                  className="position-absolute font-orbitron"
                  style={{
                    top: '14px',
                    right: '14px',
                    zIndex: 2,
                    fontSize: '9px',
                    letterSpacing: '2px',
                    color: '#000',
                    background: '#22d3ee',
                    padding: '4px 10px',
                    borderRadius: '2px',
                    fontWeight: 700,
                  }}
                >
                  NEW
                </span>

                <div className="position-relative overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', transition: 'transform 0.6s ease', pointerEvents: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    draggable={false}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)' }}
                  />
                  <span
                    className="position-absolute font-orbitron text-cyan-400"
                    style={{
                      bottom: '14px',
                      left: '14px',
                      fontSize: '9px',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      opacity: 0.85,
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                <div className="px-3 py-3 d-flex justify-content-between align-items-center">
                  <div>
                    <h3
                      className="font-orbitron text-white mb-1"
                      style={{ fontSize: '13px', letterSpacing: '1.5px' }}
                    >
                      {item.name}
                    </h3>
                    <span className="font-orbitron text-secondary" style={{ fontSize: '12px', opacity: 0.7 }}>
                      {item.price}
                    </span>
                  </div>
                  
                   <a href="#"
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '34px',
                      height: '34px',
                      border: '1px solid rgba(34,211,238,0.4)',
                      borderRadius: '50%',
                      color: '#22d3ee',
                      fontSize: '16px',
                      textDecoration: 'none',
                      transition: 'background 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34,211,238,0.15)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    +
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="d-flex justify-content-center gap-2 mt-4">
          {arrivals.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === activeIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '999px',
                border: 'none',
                background: i === activeIndex ? '#22d3ee' : 'rgba(255,255,255,0.2)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Arrival