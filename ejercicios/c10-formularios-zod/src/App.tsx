import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import type { Libro } from "./types/Libro";
import LibroDetalle from "./pages/LibroDetalle";
import LibroNuevo from "./pages/LibroNuevo";

export const librosIniciales: Libro[] = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    precio: 2800,
    imagen: "https://covers.openlibrary.org/b/olid/OL17228124M-L.jpg",
    disponible: true,
  },
  {
    id: 2,
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    genero: "Fantasía épica",
    precio: 3200,
    imagen: "https://covers.openlibrary.org/b/olid/OL35632564M-L.jpg",
    descripcion:
      "Kvothe, el mago más temido de su época, narra su propia leyenda: desde su infancia entre actores ambulantes hasta sus años en la Universidad, donde aprendió a nombrar el viento.",
    olId: "OL8479867W",
    disponible: true,
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    genero: "Distopía",
    precio: 1900,
    imagen: "https://covers.openlibrary.org/b/olid/OL33338961M-L.jpg",
    descripcion:
      "En un futuro totalitario, Winston Smith trabaja reescribiendo la historia para el Partido. Su rebelión silenciosa contra el Gran Hermano lo llevará a descubrir que la verdad es el arma más peligrosa.",
    disponible: false,
  },
  {
    id: 4,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Fábula",
    precio: 1400,
    imagen: "https://covers.openlibrary.org/b/olid/OL47134272M-L.jpg",
    descripcion:
      "Un aviador perdido en el desierto conoce a un pequeño príncipe llegado de otro planeta. A través de sus viajes por el universo, el principito descubre los absurdos del mundo adulto y el valor de lo esencial.",
    olId: "OL10263W",
    disponible: true,
  },
  {
    id: 5,
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    genero: "Literatura experimental",
    precio: 2600,
    imagen: "https://covers.openlibrary.org/b/olid/OL37767344M-L.jpg",
    disponible: true,
  },
  {
    id: 6,
    titulo: "El alquimista",
    autor: "Paulo Coelho",
    genero: "Novela filosófica",
    precio: 1750,
    imagen: "https://covers.openlibrary.org/b/olid/OL1103908M-L.jpg",
    descripcion:
      "Santiago, un joven pastor andaluz, emprende un viaje desde España hasta las pirámides de Egipto en busca de un tesoro. En el camino descubre que el verdadero tesoro está en escuchar el corazón.",
    olId: "OL796465W",
    disponible: true,
  },
];

function App() {
  const [libros, setLibros] = useState<Libro[]>(librosIniciales);
  const agregarLibro = (nuevo: Libro) => setLibros([...libros, nuevo]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo libros={libros} />} />
        <Route
          path="/libros/nuevo"
          element={<LibroNuevo onAgregar={agregarLibro} />}
        />
        <Route path="/libros/:id" element={<LibroDetalle />} />
      </Routes>
    </Layout>
  );
}
export default App;
