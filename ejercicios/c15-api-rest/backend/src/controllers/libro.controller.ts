import { Request, Response } from "express";
import * as service from "../services/libro.services";

export function getAll(req: Request, res: Response) {
  console.log("--> GET /api/libros solicitado");
  const { disponible } = req.query;
  const filter = disponible !== undefined ? disponible === "true" : undefined;
  return res.json(service.findAll(filter));
}

export function getById(req: Request, res: Response) {
  const libro = service.findById(req.params.id as string);
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
  return res.json(libro);
}

export function create(req: Request, res: Response) {
  return res.status(201).json(service.create(req.body));
}

export function update(req: Request, res: Response) {
  const libro = service.update(req.params.id as string, req.body);
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
  return res.json(libro);
}

export function remove(req: Request, res: Response) {
  const borrado = service.remove(req.params.id as string);
  if (!borrado) return res.status(404).json({ error: "Libro no encontrado" });
  return res.status(204).send();
}
