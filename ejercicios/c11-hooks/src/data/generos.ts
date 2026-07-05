// src/data/generos.ts
export const CATEGORIAS = {
  Ficción: [
    "Novela literaria",
    "Realismo mágico",
    "Ciencia ficción",
    "Fantasía épica",
    "Distopía",
    "Terror y suspenso",
    "Romance",
    "Aventura",
    "Policial y noir",
    "Ficción histórica",
  ],
  "No ficción": [
    "Historia",
    "Biografía y memorias",
    "Ciencia y tecnología",
    "Filosofía",
    "Psicología",
    "Economía y negocios",
    "Política y sociedad",
    "Viajes y geografía",
    "Arte y cultura",
    "Gastronomía",
  ],
  "Infantil y juvenil": [
    "Álbum ilustrado",
    "Cuento infantil",
    "Ficción juvenil",
    "Fantasía juvenil",
  ],
  "Académico y técnico": [
    "Programación y software",
    "Derecho",
    "Medicina y salud",
    "Educación",
    "Ingeniería",
    "Matemática",
  ],
  Otros: [
    "Poesía",
    "Teatro y dramaturgia",
    "Cómic y novela gráfica",
    "Autoayuda",
    "Espiritualidad",
    "Humor",
  ],
} as const;

// Tipos derivados automáticamente de la estructura
export type Categoria = keyof typeof CATEGORIAS;
export type Genero = (typeof CATEGORIAS)[Categoria][number];

// Lista plana de todas las categorías para el select del operario
export const LISTA_CATEGORIAS = Object.keys(CATEGORIAS) as Categoria[];

// Función para obtener los géneros de una categoría
export const getGeneros = (categoria: Categoria) => CATEGORIAS[categoria];
