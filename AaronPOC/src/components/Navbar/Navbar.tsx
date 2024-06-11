import { Col, Container, Image, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import navLogo from '../../assets/StickleyDesignsLogo.png'

import './Navbar.css'

const StickleyDesignsNavbar = () => {
  return (
    <Navbar id="navbar" expand="lg px-2">
      <Container>
        <Col xs={4} sm={6} md={4} lg={2}>
          <Navbar.Brand href="/">
            <Image src={navLogo} alt="navigation logo" className="navImage" />
          </Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="stickley-designs-menu" />
        <Navbar.Collapse
          id="stickley-designs-menu"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={NavLink} to="/designers">
              Designers
            </Nav.Link>
            <Nav.Link as={NavLink} to="/showcase">
              Showcase
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default StickleyDesignsNavbar
