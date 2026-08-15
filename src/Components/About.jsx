<<<<<<< HEAD
import React, { useEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductEight from '../assets/ProductEight.png'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { id: 1, label: 'Years of Innovation', value: '08+' },
  { id: 2, label: 'Garments Engineered', value: '120K+' },
  { id: 3, label: 'Global Retail Partners', value: '35+' },
  { id: 4, label: 'Materials Patented', value: '06' },
]

const About = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imgRef = useRef(null)
  const statsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.from(imgRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.from(statsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 55%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="position-relative w-100 bg-black" style={{ paddingTop: '3rem', paddingBottom: '7rem' }}>
      <Container fluid className="px-4 px-lg-5">
        <Row className="align-items-center g-5">
          {/* Left: Text */}
          <Col xs={12} lg={6}>
            <div ref={textRef}>
              <span className="d-inline-block mb-3 text-cyan-400 font-orbitron" style={{ border: '1px solid rgba(34,211,238,0.4)',background: 'rgba(8,51,68,0.6)',fontSize: '11px',letterSpacing: '3px',padding: '6px 18px',borderRadius: '999px',}}>
                ✦ OUR STORY ✦
              </span>

              <h2 className="font-orbitron fw-bold text-white text-uppercase mb-4" style={{ fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '5px' }}>
                Built For The <br /> Next Generation
              </h2>

              <p className="font-orbitron text-secondary mb-3" style={{ fontSize: '13px', letterSpacing: '1px', opacity: 0.75, lineHeight: 1.9 }}>
                AETHERIS was born from a simple obsession: apparel that performs
                as intelligently as it looks. We fuse advanced material science
                with minimal, future-facing design — every stitch engineered,
                every silhouette intentional.
              </p>

              <p className="font-orbitron text-secondary mb-4" style={{ fontSize: '13px', letterSpacing: '1px', opacity: 0.6, lineHeight: 1.9 }}>
                From lab to street, our pieces are tested against real-world
                conditions before they ever reach the collection.
              </p>

              
              <a href="#" style={{ textDecoration: 'none' }} className="relative inline-flex items-center justify-center px-4 py-3 uppercase tracking-[3px] text-white overflow-hidden bg-black/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                <span className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-cyan-400 to-blue-500 animate-border1"></span>
                <span className="absolute top-0 right-0 w-[2px] h-full bg-linear-to-b from-transparent via-cyan-400 to-blue-500 animate-border2"></span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-l from-transparent via-cyan-400 to-blue-500 animate-border3"></span>
                <span className="absolute top-0 left-0 w-[2px] h-full bg-linear-to-t from-transparent via-cyan-400 to-blue-500 animate-border4"></span>
                <span className="relative z-10 font-orbitron" style={{ fontSize: '12px' }}>
                  Our Philosophy
                </span>
              </a>
            </div>
          </Col>

          {/* Right: Image */}
          <Col xs={12} lg={6}>
            <div ref={imgRef} className="position-relative overflow-hidden" style={{borderRadius: '4px', border: '1px solid rgba(255,255,255,0.08)',aspectRatio: '4 / 3.2',}}>
              <img src={ProductEight} alt="About Aetheris" className="w-100 h-100" style={{ objectFit: 'cover' }}/>
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}/>
            </div>
          </Col>
        </Row>

        {/* Stats row */}
        <Row className="g-4 mt-4">
          {stats.map((stat, i) => (
            <Col key={stat.id} xs={6} lg={3}>
              <div ref={(el) => (statsRef.current[i] = el)} className="text-center py-4"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '4px',
                }}
              >
                <h3 className="font-orbitron fw-bold text-cyan-400 mb-1" style={{ fontSize: 'clamp(22px, 3vw, 30px)', letterSpacing: '2px' }}>
                  {stat.value}
                </h3>
                <span className="font-orbitron text-secondary d-block" style={{ fontSize: '10px', letterSpacing: '1.5px', opacity: 0.6 }}>
                  {stat.label}
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

=======
import React, { useEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductEight from '../assets/ProductEight.png'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { id: 1, label: 'Years of Innovation', value: '08+' },
  { id: 2, label: 'Garments Engineered', value: '120K+' },
  { id: 3, label: 'Global Retail Partners', value: '35+' },
  { id: 4, label: 'Materials Patented', value: '06' },
]

const About = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imgRef = useRef(null)
  const statsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.from(imgRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.from(statsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 55%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="position-relative w-100 bg-black" style={{ paddingTop: '3rem', paddingBottom: '7rem' }}>
      <Container fluid className="px-4 px-lg-5">
        <Row className="align-items-center g-5">
          {/* Left: Text */}
          <Col xs={12} lg={6}>
            <div ref={textRef}>
              <span className="d-inline-block mb-3 text-cyan-400 font-orbitron" style={{ border: '1px solid rgba(34,211,238,0.4)',background: 'rgba(8,51,68,0.6)',fontSize: '11px',letterSpacing: '3px',padding: '6px 18px',borderRadius: '999px',}}>
                ✦ OUR STORY ✦
              </span>

              <h2 className="font-orbitron fw-bold text-white text-uppercase mb-4" style={{ fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '5px' }}>
                Built For The <br /> Next Generation
              </h2>

              <p className="font-orbitron text-secondary mb-3" style={{ fontSize: '13px', letterSpacing: '1px', opacity: 0.75, lineHeight: 1.9 }}>
                AETHERIS was born from a simple obsession: apparel that performs
                as intelligently as it looks. We fuse advanced material science
                with minimal, future-facing design — every stitch engineered,
                every silhouette intentional.
              </p>

              <p className="font-orbitron text-secondary mb-4" style={{ fontSize: '13px', letterSpacing: '1px', opacity: 0.6, lineHeight: 1.9 }}>
                From lab to street, our pieces are tested against real-world
                conditions before they ever reach the collection.
              </p>

              
              <a href="#" style={{ textDecoration: 'none' }} className="relative inline-flex items-center justify-center px-4 py-3 uppercase tracking-[3px] text-white overflow-hidden bg-black/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                <span className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-cyan-400 to-blue-500 animate-border1"></span>
                <span className="absolute top-0 right-0 w-[2px] h-full bg-linear-to-b from-transparent via-cyan-400 to-blue-500 animate-border2"></span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-l from-transparent via-cyan-400 to-blue-500 animate-border3"></span>
                <span className="absolute top-0 left-0 w-[2px] h-full bg-linear-to-t from-transparent via-cyan-400 to-blue-500 animate-border4"></span>
                <span className="relative z-10 font-orbitron" style={{ fontSize: '12px' }}>
                  Our Philosophy
                </span>
              </a>
            </div>
          </Col>

          {/* Right: Image */}
          <Col xs={12} lg={6}>
            <div ref={imgRef} className="position-relative overflow-hidden" style={{borderRadius: '4px', border: '1px solid rgba(255,255,255,0.08)',aspectRatio: '4 / 3.2',}}>
              <img src={ProductEight} alt="About Aetheris" className="w-100 h-100" style={{ objectFit: 'cover' }}/>
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}/>
            </div>
          </Col>
        </Row>

        {/* Stats row */}
        <Row className="g-4 mt-4">
          {stats.map((stat, i) => (
            <Col key={stat.id} xs={6} lg={3}>
              <div ref={(el) => (statsRef.current[i] = el)} className="text-center py-4"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '4px',
                }}
              >
                <h3 className="font-orbitron fw-bold text-cyan-400 mb-1" style={{ fontSize: 'clamp(22px, 3vw, 30px)', letterSpacing: '2px' }}>
                  {stat.value}
                </h3>
                <span className="font-orbitron text-secondary d-block" style={{ fontSize: '10px', letterSpacing: '1.5px', opacity: 0.6 }}>
                  {stat.label}
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

>>>>>>> 218ab3f7061f0852bbf6f7278afb7cda83ecbf6f
export default About