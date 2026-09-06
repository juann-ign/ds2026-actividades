import { prisma } from "../src/config/prisma";
import bcrypt from "bcrypt";

const categorias = [
  { nombre: "Novela" },
  { nombre: "Fantasía" },
  { nombre: "Distopía" },
  { nombre: "Fábula" },
  { nombre: "Literatura Experimental" },
  { nombre: "Cuento" },
];

const autores = [
  {
    nombre: "Gabriel García Márquez",
    nacionalidad: "Colombia",
    nacimiento: 1927,
  },
  {
    nombre: "Julio Cortázar",
    nacionalidad: "Argentina",
    nacimiento: 1914,
  },
  {
    nombre: "George Orwell",
    nacionalidad: "Reino Unido",
    nacimiento: 1903,
  },
  {
    nombre: "Patrick Rothfuss",
    nacionalidad: "Estados Unidos",
    nacimiento: 1973,
  },
  {
    nombre: "Antoine de Saint-Exupéry",
    nacionalidad: "Francia",
    nacimiento: 1900,
  },
  {
    nombre: "Paulo Coelho",
    nacionalidad: "Brasil",
    nacimiento: 1947,
  },
  {
    nombre: "Jorge Luis Borges",
    nacionalidad: "Argentina",
    nacimiento: 1899,
  },
  {
    nombre: "Isabel Allende",
    nacionalidad: "Chile",
    nacimiento: 1942,
  },
  {
    nombre: "Franz Kafka",
    nacionalidad: "Alemania",
    nacimiento: 1883,
  },
  {
    nombre: "Fiódor Dostoyevski",
    nacionalidad: "Rusia",
    nacimiento: 1821,
  },
];

const libros = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    cat: ["Novela"],
    precio: 2800,
    imagen: "https://covers.openlibrary.org/b/olid/OL17228124M-L.jpg",
    disponible: false,
  },
  {
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    cat: ["Fantasía", "Novela"],
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
    cat: ["Novela", "Distopía"],
    precio: 1900,
    imagen: "https://covers.openlibrary.org/b/olid/OL33338961M-L.jpg",
    descripcion:
      "En un futuro totalitario, Winston Smith trabaja reescribiendo la historia para el Partido. Su rebelión silenciosa contra el Gran Hermano lo llevará a descubrir que la verdad es el arma más peligrosa.",
    disponible: false,
  },
  {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    cat: ["Fábula"],
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
    cat: ["Literatura Experimental", "Novela"],
    precio: 2600,
    imagen: "https://covers.openlibrary.org/b/olid/OL37767344M-L.jpg",
    disponible: true,
  },
  {
    titulo: "El alquimista",
    autor: "Paulo Coelho",
    cat: ["Novela"],
    precio: 1750,
    imagen: "https://covers.openlibrary.org/b/olid/OL1103908M-L.jpg",
    descripcion:
      "Santiago, un joven pastor andaluz, emprende un viaje desde España hasta las pirámides de Egipto en busca de un tesoro. En el camino descubre que el verdadero tesoro está en escuchar el corazón.",
    olId: "OL796465W",
    disponible: true,
  },
  {
    titulo: "Ficciones",
    autor: "Jorge Luis Borges",
    cat: ["Cuento"],
    precio: 2100,
    imagen: "https://covers.openlibrary.org/b/olid/OL24982057M-L.jpg",
    descripcion:
      "Una recopilación de relatos breves que desafían los conceptos del tiempo, el infinito, los laberintos y la identidad a través de ficciones magistrales e intelectuales.",
    olId: "OL634211W",
    disponible: true,
  },
  {
    titulo: "La casa de los espíritus",
    autor: "Isabel Allende",
    cat: ["Novela"],
    precio: 2950,
    imagen: "https://covers.openlibrary.org/b/olid/OL24367352M-L.jpg",
    descripcion:
      "La crónica familiar de los Trueba abarca cuatro generaciones, entrelazando el destino de sus miembros con los turbulentos cambios políticos y sociales de Chile.",
    olId: "OL149812W",
    disponible: true,
  },
  {
    titulo: "La metamorfosis",
    autor: "Franz Kafka",
    cat: ["Novela", "Cuento"],
    precio: 1600,
    imagen: "https://covers.openlibrary.org/b/olid/OL24315264M-L.jpg",
    descripcion:
      "Gregor Samsa amanece una mañana convertido en un monstruoso insecto, desencadenando una profunda crisis y el rechazo de su propia familia.",
    olId: "OL15632W",
    disponible: true,
  },
  {
    titulo: "Crimen y castigo",
    autor: "Fiódor Dostoyevski",
    cat: ["Novela"],
    precio: 3100,
    imagen: "https://covers.openlibrary.org/b/olid/OL26123482M-L.jpg",
    descripcion:
      "Raskólnikov, un exestudiante empobrecido en San Petersburgo, comete un crimen impulsado por sus teorías filosóficas, enfrentándose después a una intensa tormenta moral y psicológica.",
    olId: "OL45123W",
    disponible: false,
  },
];

const usuarios = [
  {
    email: "admin@libreria.test",
    nombre: "Admin",
    rol: "ADMIN" as const,
    password: "Admin1234",
  },
  {
    email: "cliente@libreria.test",
    nombre: "Cliente",
    rol: "CLIENTE" as const,
    password: "Cliente1234",
  },
];

async function main() {
  await prisma.autor.createMany({ data: autores, skipDuplicates: true });
  await prisma.categoria.createMany({ data: categorias, skipDuplicates: true });

  for (const { autor, cat, ...datos } of libros) {
    const existe = await prisma.libro.findFirst({
      where: { titulo: datos.titulo },
    });
    if (existe) continue;
    await prisma.libro.create({
      data: {
        ...datos,
        autor: { connect: { nombre: autor } },
        categorias: { connect: cat.map((nombre) => ({ nombre })) },
      },
    });
  }
  for (const { password, ...datos } of usuarios) {
    await prisma.usuario.upsert({
      where: { email: datos.email },
      update: {},
      create: { ...datos, passwordHash: await bcrypt.hash(password, 10) },
    });
  }
}
main();
