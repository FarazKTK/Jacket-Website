import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const helpLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'Track Order', href: '#' },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    console.log('subscribe:', email)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="position-relative w-100 bg-black" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <Container fluid className="px-4 px-lg-5" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
        <Row className="g-5">
          {/* Brand */}
          <Col xs={12} lg={4}>
            <div className="d-flex flex-column align-items-start mb-3" style={{ letterSpacing: '2.5px' }}>
              <span className="lh-1 font-orbitron text-white fw-bold" style={{ fontSize: '18px' }}>
                AETHERIS
              </span>
              <span
                className="fw-normal font-orbitron"
                style={{ fontSize: '9px', letterSpacing: '4px', color: '#aaaaaa', marginTop: '4px' }}
              >
                APPAREL TECHNOLOGIES
              </span>
            </div>
            <p
              className="font-orbitron text-secondary"
              style={{ fontSize: '12px', letterSpacing: '0.5px', opacity: 0.6, lineHeight: 1.9, maxWidth: '320px' }}
            >
              Intelligent design engineered at the intersection of material science
              and form. Built for the next generation.
            </p>

            <div className="d-flex gap-3 mt-4">
              {['IG', 'X', 'FB', 'TT'].map((social) => (
                
                <a  key={social}
                  href="#"
                  className="d-flex align-items-center justify-content-center font-orbitron"
                  style={{
                    width: '36px',
                    height: '36px',
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
          </Col>

          {/* Quick Links */}
          <Col xs={6} lg={2}>
            <h4
              className="font-orbitron text-white text-uppercase mb-4"
              style={{ fontSize: '11px', letterSpacing: '2px' }}
            >
              Explore
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-3 m-0">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  
                  <a  href={link.href}
                    className="font-orbitron text-secondary"
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.5px',
                      opacity: 0.65,
                      textDecoration: 'none',
                      transition: 'opacity 0.3s ease, color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1'
                      e.currentTarget.style.color = '#22d3ee'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.65'
                      e.currentTarget.style.color = ''
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Help Links */}
          <Col xs={6} lg={2}>
            <h4
              className="font-orbitron text-white text-uppercase mb-4"
              style={{ fontSize: '11px', letterSpacing: '2px' }}
            >
              Support
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-3 m-0">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  
                  <a  href={link.href}
                    className="font-orbitron text-secondary"
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.5px',
                      opacity: 0.65,
                      textDecoration: 'none',
                      transition: 'opacity 0.3s ease, color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1'
                      e.currentTarget.style.color = '#22d3ee'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.65'
                      e.currentTarget.style.color = ''
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Newsletter */}
          <Col xs={12} lg={4}>
            <h4
              className="font-orbitron text-white text-uppercase mb-4"
              style={{ fontSize: '11px', letterSpacing: '2px' }}
            >
              Stay Updated
            </h4>
            <p
              className="font-orbitron text-secondary mb-3"
              style={{ fontSize: '12px', letterSpacing: '0.5px', opacity: 0.6, lineHeight: 1.8 }}
            >
              Subscribe for early access to drops, exclusive offers, and lab updates.
            </p>

            <form onSubmit={handleSubscribe} className="d-flex" style={{ gap: '8px' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '4px',
                  color: '#fff',
                  fontSize: '12px',
                  padding: '12px 14px',
                  width: '100%',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(34,211,238,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
              <button
                type="submit"
                className="font-orbitron text-black fw-bold"
                style={{
                  background: '#22d3ee',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0 18px',
                  fontSize: '11px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#67e3f9')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#22d3ee')}
              >
                JOIN
              </button>
            </form>

            {subscribed && (
              <p className="font-orbitron text-cyan-400 mt-3" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                ✓ You're on the list.
              </p>
            )}
          </Col>
        </Row>

        {/* Bottom bar */}
        <div
          className="d-flex flex-wrap justify-content-between align-items-center mt-5 pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', gap: '12px' }}
        >
          <span
            className="font-orbitron text-secondary"
            style={{ fontSize: '10px', letterSpacing: '1px', opacity: 0.5 }}
          >
            © {new Date().getFullYear()} AETHERIS APPAREL TECHNOLOGIES. ALL RIGHTS RESERVED.
          </span>
          <div className="d-flex gap-4">
            
            <a  href="#"
              className="font-orbitron text-secondary"
              style={{ fontSize: '10px', letterSpacing: '1px', opacity: 0.5, textDecoration: 'none' }}
            >
              Privacy Policy
            </a>
            
             <a href="#"
              className="font-orbitron text-secondary"
              style={{ fontSize: '10px', letterSpacing: '1px', opacity: 0.5, textDecoration: 'none' }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer