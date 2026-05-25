import { Container, Row, Col } from "react-bootstrap";
import { libros } from "../data/libros";

export default function Hero() {
  const libroDestacado = libros[4];

  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <p
              style={{
                color: "var(--color-dorado)",
                letterSpacing: "3px",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Bienvenido a nuestra librería
            </p>
            <h1 className="display-titulo">
              Donde cada libro
              <br />
              <span>cuenta una historia</span>
              <br />
              que te cambia.
            </h1>
            <p className="subtitulo mt-4 mb-4">
              Descubrí nuestra selección cuidada de títulos en todos los
              géneros.
            </p>
            <a href="#destacados" className="btn btn-libreria btn-lg">
              Ver catálogo
            </a>
          </Col>

          <Col
            lg={5}
            className="d-none d-lg-flex justify-content-center align-items-center"
          >
            <img
              src={libroDestacado.imagen}
              alt={libroDestacado.titulo}
              className="hero-libro-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
