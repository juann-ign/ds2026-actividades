import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import LibroCard from "../components/LibroCard";
import type { Libro } from "../types/Libro";
import { useFetch } from "../hooks/useFetch";
import "../assets/styles/Destacados.css";

type Props = {
  librosNuevos: Libro[];
};

export default function Catalogo({ librosNuevos }: Props) {
  const { datos, cargando, error } = useFetch<Libro[]>("/libros.json");

  const todosLosLibros = [...(datos ?? []), ...librosNuevos];

  if (cargando) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <Spinner animation="border" role="status" variant="success">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          <Alert.Heading>No se pudo cargar el catálogo</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

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
          {todosLosLibros.map((libro) => (
            <Col key={libro.id} xs={12} md={6} lg={4}>
              <LibroCard libro={libro} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
