import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5 className="footer-marca">
              <img
                src="/logo_libreria_blanco.svg"
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top me-2"
              />
              Corteza
            </h5>
            <p className="footer-subtitulo">
              Tu librería de confianza desde 1914.
            </p>
          </Col>

          <Col md={4}>
            <h6 className="footer-titulo-seccion">Navegación</h6>
            <ul className="list-unstyled mt-2">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="#catalogo">Catálogo</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="footer-titulo-seccion">Contacto</h6>
            <ul className="list-unstyled mt-2 footer-contacto">
              <li>📍 Calle 14 474, La Plata</li>
              <li>📞 (2962) 423873</li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divisor" />

        <p className="footer-copyright">
          © {new Date().getFullYear()} Corteza — Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
}
