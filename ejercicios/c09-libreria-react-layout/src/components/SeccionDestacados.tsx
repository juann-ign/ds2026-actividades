import { Container, Row, Col } from "react-bootstrap";
import { libros } from "../types/Libro";
import LibroCard from "./LibroCard";

export default function SeccionDestacados() {
  return (
    <section className="seccion-destacados" id="destacados">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="seccion-titulo">Destacados del mes</h2>
            <p
              className="mt-3"
              style={{
                color: "#666",
                maxWidth: "500px",
                margin: "1rem auto 0",
              }}
            >
              Una selección especial de los títulos más celebrados por nuestra
              comunidad lectora.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {libros.map((libro) => (
            <Col key={libro.id} xs={12} md={6} lg={4}>
              <LibroCard libro={libro} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
