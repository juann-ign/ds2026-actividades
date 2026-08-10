import { Request, Response } from "express";
import * as autores from "../services/autor.services";

export function getAll(req: Request, res: Response) {
  return res.json(autores.findAll());
}

export function getById(req: Request, res: Response) {
  const autor = autores.findById(req.params.id as unknown as string);
  if (!autor) return res.status(404).json({ error: "Autor no encontrado" });
  return res.json(autor);
}

export function create(req: Request, res: Response) {
  const nuevo = autores.create(req.body);
  return res.status(200).json(nuevo);
}

export function update(req: Request, res: Response) {
  const actualizado = autores.update(
    req.params.id as unknown as string,
    req.body,
  );
  if (!actualizado)
    return res.status(404).json({ error: "Autor no encontrado" });
  return res.json(actualizado);
}

export function remove(req: Request, res: Response) {
  const borrado = autores.remove(req.params.id as unknown as string);
  if (!borrado) return res.status(404).json({ error: "Autor no encontrado" });
  return res.status(204).send();
}
