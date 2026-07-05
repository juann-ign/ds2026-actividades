import { Container, Row, Col } from "react-bootstrap";
import LibroCard from "../components/LibroCard";
import type { Libro } from "../types/Libro";
import "../assets/styles/Destacados.css";

type Props = {
  libros: Libro[];
};

export default function Catalogo({ libros }: Props) {
  return (
    <section className="seccion-destacados">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="seccion-titulo">Catálogo completo</h2>
            <p className="seccion-subtitulo">
              Explorá todos los títulos disponibles en nuestra librería.
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
