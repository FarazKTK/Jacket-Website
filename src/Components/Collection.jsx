import React, { useEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductOne from '../assets/ProductOne.png'
import ProductTwo from '../assets/ProductTwo.png'
import ProductThree from '../assets/ProductThree.png'
import ProductFour from '../assets/ProductFour.png'


gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    id: 1,
    name: 'AETHER JACKET',
    category: 'Outerwear',
    price: '$249',
    img: ProductOne,

  },
  {
    id: 2,
    name: 'CRYO HOODIE',
    category: 'Streetwear',
    price: '$129',
    img: ProductTwo,
  },
  {
    id: 3,
    name: 'NEXUS CARGO',
    category: 'Bottoms',
    price: '$159',
    img: ProductThree,
  },
  {
    id: 4,
    name: 'VOLT TEE',
    category: 'Essentials',
    price: '$59',
    img: ProductFour,
  },
]

const Collection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
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

  return (
    <div>
      <section id="collection" ref={sectionRef} className="position-relative w-100 bg-black py-5"
      style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <Container fluid className="px-4 px-lg-5">
        {/* Section Header */}
        <div className="d-flex flex-column align-items-center text-center mb-5">
          <span className="px-4 py-1.5 rounded-full text-cyan-400 mb-3"
            style={{
              border: '1px solid rgba(34,211,238,0.4)',
              background: 'rgba(8,51,68,0.6)',
              fontSize: '11px',
              letterSpacing: '3px',
              padding: '6px 18px',
              borderRadius: '999px',
            }}
          >
            ✦ THE COLLECTION ✦
          </span>
          <h2 className="font-orbitron fw-bold text-white text-uppercase" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '6px' }}>
            Engineered Essentials
          </h2>
          <p className="font-orbitron text-secondary mt-2" style={{ fontSize: '12px', letterSpacing: '2px', opacity: 0.6, maxWidth: '480px' }}>
            EACH PIECE BUILT AT THE INTERSECTION OF MATERIAL SCIENCE AND FORM
          </p>
        </div>

        {/* Product Grid */}
        <Row className="g-4">
          {products.map((product, i) => (
            <Col key={product.id} xs={12} sm={6} lg={3}>
              <div ref={(el) => (cardsRef.current[i] = el)} className="position-relative overflow-hidden group"
                style={{
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
                {/* Image */}
                <div className="position-relative overflow-hidden" style={{ aspectRatio: '3 / 4' }}>
                  <img src={product.img} alt={product.name} className="w-100 h-100"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)',
                    }}
                  />
                  {/* Category tag */}
                  <span className="position-absolute top-0 start-0 m-3 font-orbitron text-cyan-400"
                    style={{
                      fontSize: '9px',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      opacity: 0.85,
                    }}
                  >
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="px-3 py-3 d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="font-orbitron text-white mb-1" style={{ fontSize: '13px', letterSpacing: '1.5px' }}>
                      {product.name}
                    </h3>
                    <span className="font-orbitron text-secondary" style={{ fontSize: '12px', opacity: 0.7 }}>
                      {product.price}
                    </span>
                  </div>
                   <a href="#" className="d-flex align-items-center justify-content-center" style={{
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
            </Col>
          ))}
        </Row>
        {/* View All CTA */}
        <div className="d-flex justify-content-center mt-5">
          <a  href="#" style={{ textDecoration: 'none' }} className="relative inline-flex items-center justify-center px-4 py-3 uppercase tracking-[3px] text-white overflow-hidden bg-black/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            <span className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-cyan-400 to-blue-500 animate-border1"></span>
            <span className="absolute top-0 right-0 w-[2px] h-full bg-linear-to-b from-transparent via-cyan-400 to-blue-500 animate-border2"></span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-l from-transparent via-cyan-400 to-blue-500 animate-border3"></span>
            <span className="absolute top-0 left-0 w-[2px] h-full bg-linear-to-t from-transparent via-cyan-400 to-blue-500 animate-border4"></span>
            <span className="relative z-10 font-orbitron" style={{ fontSize: '12px' }}>View Full Collection</span>
          </a>
        </div>
      </Container>
    </section>
    </div>
  )
}

export default Collection