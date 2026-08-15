<<<<<<< HEAD
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`z-50 overflow-hidden transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'fixed top-0 left-0 w-full rounded-none'
          : 'rounded-2xl position-absolute top-5 left-1/2 -translate-x-1/2 w-[80%]'
      }`}
    >
      <Navbar
        expand="lg"
        variant="dark"
        className={`py-3 backdrop-blur-xl transition-all duration-500 ${
          isScrolled
            ? 'bg-black/90 py-2'
            : 'bg-linear-to-r from-black/70 via-gray-900/40 to-black/70 py-3'
        }`}
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="fw-bold text-uppercase py-0 d-flex flex-column align-items-start" style={{ letterSpacing: '2.5px', textDecoration: 'none' }}>
            <span className="lh-1 font-orbitron text-white">AETHERIS</span>
            <span className="fw-normal font-orbitron" style={{ fontSize: '0.50rem', letterSpacing: '4px', color: '#aaaaaa' }}>
            APPAREL TECHNOLOGIES
            </span>
          </Navbar.Brand>
          {/* Mobile Toggle Button */}
          <Navbar.Toggle aria-controls="luxury-navbar-nav" />
          {/* Navbar Links */}
          <Navbar.Collapse id="luxury-navbar-nav">
            <Nav className="mx-auto my-2 my-lg-0 fw-semibold text-uppercase">
              <Nav.Link href="#home" style={{fontSize:'12px'}} className="relative px-3 text-white font-orbitron after:absolute after:left-3 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-[70%] hover:text-cyan-400">Home</Nav.Link>
              <Nav.Link href="#collection" style={{fontSize:'12px'}} className="relative px-3 text-white font-orbitron after:absolute after:left-3 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-[70%] hover:text-cyan-400">Collection</Nav.Link>
              <Nav.Link href="#new-arrivals" style={{fontSize:'12px'}} className="relative px-3 text-white font-orbitron after:absolute after:left-3 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-[70%] hover:text-cyan-400">New Arrivals</Nav.Link>
              <Nav.Link href="#about"  style={{fontSize:'12px'}} className="relative px-3 text-white font-orbitron after:absolute after:left-3 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-[70%] hover:text-cyan-400">About</Nav.Link>
              <Nav.Link href="#contact" style={{fontSize:'12px'}} className="relative px-3 text-white font-orbitron after:absolute after:left-3 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-[70%] hover:text-cyan-400">Contact</Nav.Link>
            </Nav>
            {/* Right Side Icons / CTA */}
           <a href="#" style={{textDecoration:'none'}} className="relative inline-flex items-center justify-center px-3 py-2 uppercase tracking-[3px] text-white overflow-hidden bg-black/40 backdrop-blur-mdborde border-cyan-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            <span className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-cyan-400 to-blue-500 animate-border1"></span>
            <span className="absolute top-0 right-0 w-[2px] h-full bg-linear-to-b from-transparent via-cyan-400 to-blue-500 animate-border2"></span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-l from-transparent via-cyan-400 to-blue-500 animate-border3"></span>
            <span className="absolute top-0 left-0 w-[2px] h-full bg-linear-to-t from-transparent via-cyan-400 to-blue-500 animate-border4"></span>
            <span className="relative z-10 font-orbitron" style={{fontSize:'12px'}}>Shop Now</span> 
          </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

=======
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`z-50 overflow-hidden transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'fixed top-0 left-0 w-full rounded-none'
          : 'rounded-2xl position-absolute top-5 left-1/2 -translate-x-1/2 w-[80%]'
      }`}
    >
      <Navbar
        expand="lg"
        variant="dark"
        className={`py-3 backdrop-blur-xl transition-all duration-500 ${
          isScrolled
            ? 'bg-black/90 py-2'
            : 'bg-linear-to-r from-black/70 via-gray-900/40 to-black/70 py-3'
        }`}
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="fw-bold text-uppercase py-0 d-flex flex-column align-items-start" style={{ letterSpacing: '2.5px', textDecoration: 'none' }}>
            <span className="lh-1 font-orbitron text-white">AETHERIS</span>
            <span className="fw-normal font-orbitron" style={{ fontSize: '0.50rem', letterSpacing: '4px', color: '#aaaaaa' }}>
            APPAREL TECHNOLOGIES
            </span>
          </Navbar.Brand>
          {/* Mobile Toggle Button */}
          <Navbar.Toggle aria-controls="luxury-navbar-nav" />
          {/* Navbar Links */}
          <Navbar.Collapse id="luxury-navbar-nav">
            <Nav className="mx-auto my-2 my-lg-0 fw-semibold text-uppercase">
              <Nav.Link href="#home" style={{fontSize:'12px'}} className="relative px-3 text-white font-orbitron after:absolute after:left-3 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-[70%] hover:text-cyan-400">Home</Nav.Link>
              <Nav.Link href="#collection" style={{fontSize:'12px'}} className="relative px-3 text-white font-orbitron after:absolute after:left-3 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-[70%] hover:text-cyan-400">Collection</Nav.Link>
              <Nav.Link href="#new-arrivals" style={{fontSize:'12px'}} className="relative px-3 text-white font-orbitron after:absolute after:left-3 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-[70%] hover:text-cyan-400">New Arrivals</Nav.Link>
              <Nav.Link href="#about"  style={{fontSize:'12px'}} className="relative px-3 text-white font-orbitron after:absolute after:left-3 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-[70%] hover:text-cyan-400">About</Nav.Link>
              <Nav.Link href="#contact" style={{fontSize:'12px'}} className="relative px-3 text-white font-orbitron after:absolute after:left-3 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-[70%] hover:text-cyan-400">Contact</Nav.Link>
            </Nav>
            {/* Right Side Icons / CTA */}
           <a href="#" style={{textDecoration:'none'}} className="relative inline-flex items-center justify-center px-3 py-2 uppercase tracking-[3px] text-white overflow-hidden bg-black/40 backdrop-blur-mdborde border-cyan-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            <span className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-cyan-400 to-blue-500 animate-border1"></span>
            <span className="absolute top-0 right-0 w-[2px] h-full bg-linear-to-b from-transparent via-cyan-400 to-blue-500 animate-border2"></span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-linear-to-l from-transparent via-cyan-400 to-blue-500 animate-border3"></span>
            <span className="absolute top-0 left-0 w-[2px] h-full bg-linear-to-t from-transparent via-cyan-400 to-blue-500 animate-border4"></span>
            <span className="relative z-10 font-orbitron" style={{fontSize:'12px'}}>Shop Now</span> 
          </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

>>>>>>> 218ab3f7061f0852bbf6f7278afb7cda83ecbf6f
export default Header;