import { z } from "zod";
import { LISTA_CATEGORIAS } from "../data/generos";

export const libroSchema = z.object({
  titulo: z.string().min(1, "El título es obligatorio"),
  autor: z.string().min(1, "El autor es obligatorio"),
  genero: z.string().min(1, "Seleccioná un género"),
  precio: z.coerce.number().positive("El precio debe ser mayor a 0"),
  disponible: z.boolean(),
});

export type LibroValidado = z.infer<typeof libroSchema>;
export { LISTA_CATEGORIAS };
