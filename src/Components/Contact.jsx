import React, { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contactInfo = [
  { id: 1, label: 'Email', value: 'hello@aetheris.com' },
  { id: 2, label: 'Phone', value: '+1 (555) 020-4488' },
  { id: 3, label: 'Studio', value: '48 Vantage Row, New York, NY' },
]

const Contact = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      gsap.from(infoRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: apna API / EmailJS / backend call yahan lagana
    console.log(formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '13px',
    padding: '14px 16px',
    width: '100%',
    fontFamily: 'inherit',
    letterSpacing: '0.5px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  return (
    <section id="contact" ref={sectionRef} className="position-relative w-100 bg-black" style={{ paddingTop: '3rem', paddingBottom: '7rem' }}>
      <Container fluid className="px-4 px-lg-5">
        <div className="d-flex flex-column align-items-center text-center mb-5">
          <span className="mb-3 text-cyan-400 font-orbitron"
            style={{
              border: '1px solid rgba(34,211,238,0.4)',
              background: 'rgba(8,51,68,0.6)',
              fontSize: '11px',
              letterSpacing: '3px',
              padding: '6px 18px',
              borderRadius: '999px',
            }}
          >
            ✦ GET IN TOUCH ✦
          </span>
          <h2 className="font-orbitron fw-bold text-white text-uppercase" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '6px' }}>
            Let's Connect
          </h2>
          <p className="font-orbitron text-secondary mt-2" style={{ fontSize: '12px', letterSpacing: '2px', opacity: 0.6, maxWidth: '480px' }}>
            QUESTIONS, COLLABORATIONS, OR STOCKIST INQUIRIES — WE'D LOVE TO HEAR FROM YOU
          </p>
        </div>
        <Row className="g-5">
          <Col xs={12} lg={7}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col xs={12} md={6}>
                  <label className="d-block mb-2 font-orbitron text-secondary" style={{ fontSize: '10px', letterSpacing: '2px', opacity: 0.7 }}>NAME</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange}  required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(34,211,238,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                    placeholder="Your name"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <label
                    className="d-block mb-2 font-orbitron text-secondary"
                    style={{ fontSize: '10px', letterSpacing: '2px', opacity: 0.7 }}
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(34,211,238,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                    placeholder="you@example.com"
                  />
                </Col>
                <Col xs={12}>
                  <label
                    className="d-block mb-2 font-orbitron text-secondary"
                    style={{ fontSize: '10px', letterSpacing: '2px', opacity: 0.7 }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(34,211,238,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                    placeholder="Tell us what's on your mind..."
                  />
                </Col>
                <Col xs={12} className="mt-4">
                  <button
                    type="submit"
                    style={{
                      textDecoration: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    className="relative inline-flex items-center justify-center px-4 py-3 uppercase tracking-[3px] text-white overflow-hidden bg-black/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
                  >
                    <span className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-cyan-400 to-blue-500 animate-border1"></span>
                    <span className="absolute top-0 right-0 w-[2px] h-full bg-linear-to-b from-transparent via-cyan-400 to-blue-500 animate-border2"></span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-l from-transparent via-cyan-400 to-blue-500 animate-border3"></span>
                    <span className="absolute top-0 left-0 w-[2px] h-full bg-linear-to-t from-transparent via-cyan-400 to-blue-500 animate-border4"></span>
                    <span className="relative z-10 font-orbitron" style={{ fontSize: '12px' }}>
                      Send Message
                    </span>
                  </button>

                  {submitted && (
                    <p
                      className="font-orbitron text-cyan-400 mt-3"
                      style={{ fontSize: '11px', letterSpacing: '1px' }}
                    >
                      ✓ Message sent. We'll get back to you shortly.
                    </p>
                  )}
                </Col>
              </Row>
            </form>
          </Col>

          {/* Right: Info */}
          <Col xs={12} lg={5}>
            <div
              ref={infoRef}
              className="h-100 d-flex flex-column justify-content-between"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '4px',
                padding: '2.5rem',
              }}
            >
              <div>
                <h3
                  className="font-orbitron fw-bold text-white text-uppercase mb-4"
                  style={{ fontSize: '16px', letterSpacing: '3px' }}
                >
                  Direct Contact
                </h3>

                {contactInfo.map((item) => (
                  <div key={item.id} className="mb-4">
                    <span
                      className="d-block font-orbitron text-cyan-400 mb-1"
                      style={{ fontSize: '10px', letterSpacing: '2px' }}
                    >
                      {item.label.toUpperCase()}
                    </span>
                    <span
                      className="d-block font-orbitron text-secondary"
                      style={{ fontSize: '13px', letterSpacing: '0.5px', opacity: 0.85 }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="d-flex gap-3 mt-4">
                {['IG', 'X', 'FB'].map((social) => (
                  
                  <a  key={social}
                    href="#"
                    className="d-flex align-items-center justify-content-center font-orbitron"
                    style={{
                      width: '38px',
                      height: '38px',
                      border: '1px solid rgba(34,211,238,0.4)',
                      borderRadius: '50%',
                      color: '#22d3ee',
                      fontSize: '10px',
                      textDecoration: 'none',
                      transition: 'background 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34,211,238,0.15)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact