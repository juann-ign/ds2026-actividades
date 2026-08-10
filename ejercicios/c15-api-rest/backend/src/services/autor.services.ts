import { Autor } from "../types/autor.types";

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

export function findAll() {
  return autores;
}

export function findById(id: string): Autor | undefined {
  return autores.find((a) => a.id === id);
}

export function create(data: Omit<Autor, "id">): Autor {
  const nuevo = { ...data, id: crypto.randomUUID() };
  autores.push(nuevo);
  return nuevo;
}

export function update(id: string, data: Omit<Autor, "id">): Autor | undefined {
  const i = autores.findIndex((a) => a.id === id);
  if (i === -1) return undefined;
  autores[i] = { ...data, id };
  return autores[i];
}

export function remove(id: string): boolean {
  const i = autores.findIndex((a) => a.id === id);
  if (i === -1) return false;
  autores.splice(i, 1);
  return true;
}
