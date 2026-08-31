import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import type { Libro } from "../types/Libro";
import "../assets/styles/LibroCard.css";

type Props = {
  libro: Libro;
};

export default function LibroCard({ libro }: Props) {
  const [meGusta, setMeGusta] = useState(false);

  return (
    <Card className="card-libro">
      <Card.Img
        variant="top"
        src={libro.imagen}
        alt={libro.titulo}
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/400x260?text=Sin+imagen";
        }}
      />
      <Card.Body className="d-flex flex-column">
        <span className="badge-genero mb-2">{libro.genero}</span>

        <Card.Title>{libro.titulo}</Card.Title>
        <Card.Subtitle className="mb-2">{libro.autor}</Card.Subtitle>

        <div className="d-flex justify-content-between align-items-center mt-auto pt-3 card-libro-divisor">
          <span className="card-libro-precio">
            ${libro.precio.toLocaleString("es-AR")}
          </span>

          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-megusta"
              onClick={() => setMeGusta(!meGusta)}
              title={meGusta ? "Quitar me gusta" : "Me gusta"}
            >
              {meGusta ? "❤️" : "🤍"}
            </button>

            <Link
              to={`/libros/${libro.id}`}
              className="btn btn-libreria btn-sm"
            >
              Ver más
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
