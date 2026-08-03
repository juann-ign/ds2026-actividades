import express from "express";

const app = express();
const PORT = 3000;

interface Libro {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  precio: number;
  imagen: string;
  disponible: boolean;
  descripcion?: string;
  olId?: string;
}

const libros: Libro[] = [
  {
    id: "1",
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    precio: 2800,
    imagen: "https://covers.openlibrary.org/b/olid/OL17228124M-L.jpg",
    disponible: false,
  },
  {
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    genero: "Literatura experimental",
    precio: 2600,
    imagen: "https://covers.openlibrary.org/b/olid/OL37767344M-L.jpg",
    disponible: true,
  },
  {
    id: "6",
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

const autores = [
  {
    id: "1",
    nombre: "Gabriel García Márquez",
    nacionalidad: "Colombiana",
    nacimiento: 1927,
  },
  {
    id: "2",
    nombre: "Julio Cortázar",
    nacionalidad: "Argentina",
    nacimiento: 1914,
  },
  {
    id: "3",
    nombre: "George Orwell",
    nacionalidad: "Británica",
    nacimiento: 1903,
  },
];

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería — ¡hola desde un contenedor! 🐳" });
});

app.get("/libros", (req, res) => {
  const { disponible } = req.query;
  if (disponible !== undefined) {
    const filtrado = libros.filter(
      (l) => l.disponible === (disponible === "true"),
    );
    return res.json(filtrado);
  }
  res.json(libros);
});

app.get("/autores", (_req, res) => {
  res.json(autores);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
