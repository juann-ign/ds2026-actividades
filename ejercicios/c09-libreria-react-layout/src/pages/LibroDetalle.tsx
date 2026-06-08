import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { libros } from "../types/Libro";
import "../assets/styles/LibroDetalle.css";

export default function LibroDetalle() {
  const { id } = useParams();
  const libro = libros.find((l) => l.id === Number(id));
  const [descripcion, setDescripcion] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (!libro) return;

    // Si tiene descripción local, no llamar a la API
    if (libro.descripcion) {
      setCargando(false);
      return;
    }

    setCargando(true);

    const fetchWork = libro.olId
      ? fetch(`https://openlibrary.org/works/${libro.olId}.json`)
      : fetch(
          `https://openlibrary.org/search.json?title=${encodeURIComponent(libro.titulo)}&author=${encodeURIComponent(libro.autor)}&limit=1`,
        )
          .then((r) => r.json())
          .then((data) => {
            const key = data.docs?.[0]?.key;
            if (!key) throw new Error("no key");
            return fetch(`https://openlibrary.org${key}.json`);
          });

    fetchWork
      .then((r) => r.json())
      .then((data) => {
        const desc = data.description;
        if (typeof desc === "string") setDescripcion(desc);
        else if (desc?.value) setDescripcion(desc.value);
        else setDescripcion(null);
      })
      .catch(() => setDescripcion(null))
      .finally(() => setCargando(false));
  }, [libro]);

  if (!libro) {
    return (
      <div className="detalle-notfound">
        <p>Libro no encontrado.</p>
        <Link to="/catalogo">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="detalle-wrapper">
      <Link to="/catalogo" className="detalle-volver">
        ← Volver al catálogo
      </Link>

      <div className="detalle-contenido">
        <img
          src={libro.imagen}
          alt={libro.titulo}
          className="detalle-imagen"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/400x260?text=Sin+imagen";
          }}
        />

        <div className="detalle-info">
          <span className="badge-genero">{libro.genero}</span>
          <h2 className="detalle-titulo">{libro.titulo}</h2>
          <p className="detalle-autor">{libro.autor}</p>
          <p className="detalle-precio">
            ${libro.precio.toLocaleString("es-AR")}
          </p>

          <div className="detalle-descripcion">
            {cargando && (
              <p className="detalle-cargando">Cargando descripción...</p>
            )}
            {!cargando && (descripcion || libro.descripcion) && (
              <p>{descripcion || libro.descripcion}</p>
            )}
            {!cargando && !descripcion && !libro.descripcion && (
              <p className="detalle-sin-desc">Sin descripción disponible.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
