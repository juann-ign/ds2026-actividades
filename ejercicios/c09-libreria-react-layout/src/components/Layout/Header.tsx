import { Navbar, Nav, Container } from "react-bootstrap";
import "../../assets/styles/Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="custom-header">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <img
            src="/logo_libreria.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top me-2"
          />
          <span className="brand-text">Corteza</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#catalogo">Catálogo</Nav.Link>
            <Nav.Link href="#contacto">Nosotros</Nav.Link>
            <button className="btn-login btn-outline-light btn-sm">
              Iniciar sesión
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
