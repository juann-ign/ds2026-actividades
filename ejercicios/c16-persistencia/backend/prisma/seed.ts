import { prisma } from "../src/config/prisma";
const libros = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    precio: 2800,
    imagen: "https://covers.openlibrary.org/b/olid/OL17228124M-L.jpg",
    disponible: false,
  },
  {
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
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    genero: "Literatura experimental",
    precio: 2600,
    imagen: "https://covers.openlibrary.org/b/olid/OL37767344M-L.jpg",
    disponible: true,
  },
  {
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
    nombre: "Gabriel García Márquez",
    nacionalidad: "Colombiana",
    nacimiento: 1927,
  },
  {
    nombre: "Julio Cortázar",
    nacionalidad: "Argentina",
    nacimiento: 1914,
  },
  {
    nombre: "George Orwell",
    nacionalidad: "Británica",
    nacimiento: 1903,
  },
];

async function main() {
  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });
}
main();
