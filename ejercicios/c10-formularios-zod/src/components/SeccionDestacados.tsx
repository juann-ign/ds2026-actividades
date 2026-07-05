import { Container, Row, Col } from "react-bootstrap";
import { librosIniciales as libros } from "../App";
import LibroCard from "./LibroCard";
import "../assets/styles/Destacados.css";

export default function SeccionDestacados() {
  return (
    <section className="seccion-destacados" id="destacados">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="seccion-titulo">Destacados del mes</h2>
            <p className="seccion-subtitulo">
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
