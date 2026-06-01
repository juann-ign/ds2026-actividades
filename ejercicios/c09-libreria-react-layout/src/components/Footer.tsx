import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5
              style={{
                fontFamily: "var(--fuente-titulo)",
                color: "var(--color-crema)",
              }}
            >
              <img
                src="/logo_libreria_blanco.svg"
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top me-2"
              />
              Corteza
            </h5>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(245,240,232,0.6)",
                marginTop: "0.75rem",
              }}
            >
              Tu librería de confianza desde 1914.
            </p>
          </Col>

          <Col md={4}>
            <h6
              style={{
                color: "var(--color-dorado)",
                textTransform: "uppercase",
                fontSize: "0.8rem",
              }}
            >
              Navegación
            </h6>
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
            <h6
              style={{
                color: "var(--color-dorado)",
                textTransform: "uppercase",
                fontSize: "0.8rem",
              }}
            >
              Contacto
            </h6>
            <ul
              className="list-unstyled mt-2"
              style={{ color: "rgba(245,240,232,0.6)", fontSize: "0.9rem" }}
            >
              <li>📍 Calle 14 474, La Plata</li>
              <li>📞 (2962) 423873</li>
            </ul>
          </Col>
        </Row>
        <hr
          style={{ borderColor: "rgba(212,168,83,0.2)", margin: "2rem 0 1rem" }}
        />
        <p
          style={{
            textAlign: "center",
            fontSize: "0.8rem",
            color: "rgba(245,240,232,0.4)",
          }}
        >
          © {new Date().getFullYear()} Corteza — Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
}
