export interface Libro {
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
