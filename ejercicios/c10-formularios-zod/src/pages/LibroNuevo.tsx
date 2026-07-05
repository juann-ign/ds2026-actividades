import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Libro } from "../types/Libro";
import { libroSchema, type LibroValidado } from "../schemas/libroSchema";
import { CATEGORIAS, LISTA_CATEGORIAS, type Categoria } from "../data/generos";

const IMG_PLACEHOLDER = "https://placehold.co/300x400?text=Libro";

interface Props {
  onAgregar: (libro: Libro) => void;
}

function LibroNuevo({ onAgregar }: Props) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<LibroValidado, any, LibroValidado>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(libroSchema) as any,
    defaultValues: {
      titulo: "",
      autor: "",
      precio: undefined,
      genero: undefined,
      disponible: true,
    },
  });

  const onSubmit = (data: LibroValidado) => {
    onAgregar({
      id: crypto.randomUUID(),
      titulo: data.titulo,
      autor: data.autor,
      genero: data.genero,
      precio: data.precio,
      imagen: IMG_PLACEHOLDER,
      disponible: data.disponible,
    });

    navigate("/catalogo");
  };

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<
    Categoria | ""
  >("");

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="container py-4"
      style={{ maxWidth: 480 }}
    >
      <h2>Nuevo libro </h2>
      <Form.Group className="mb-3">
        <Form.Label>Título</Form.Label>
        <Form.Control {...register("titulo")} isInvalid={!!errors.titulo} />
        <Form.Control.Feedback type="invalid">
          {errors.titulo?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Autor</Form.Label>
        <Form.Control {...register("autor")} isInvalid={!!errors.autor} />
        <Form.Control.Feedback type="invalid">
          {errors.autor?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
          value={categoriaSeleccionada}
          onChange={(e) => {
            setCategoriaSeleccionada(e.target.value as Categoria);
            setValue("genero", "", { shouldValidate: true }); // resetear género al cambiar categoría
          }}
          className="mb-2"
        >
          <option value="" disabled>
            Seleccioná una categoría
          </option>
          {LISTA_CATEGORIAS.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Género</Form.Label>
        <Form.Select
          isInvalid={!!errors.genero}
          defaultValue=""
          disabled={!categoriaSeleccionada} // bloqueado hasta elegir categoría
          onChange={(e) =>
            setValue("genero", e.target.value, { shouldValidate: true })
          }
        >
          <option value="" disabled>
            {categoriaSeleccionada
              ? "Seleccioná un género"
              : "Primero elegí una categoría"}
          </option>
          {categoriaSeleccionada &&
            CATEGORIAS[categoriaSeleccionada].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.genero?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ej: 10000"
          {...register("precio")}
          isInvalid={!!errors.precio}
        />
        <Form.Control.Feedback type="invalid">
          {errors.precio?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Check
        type="checkbox"
        className="mb-3"
        label="Disponible"
        {...register("disponible")}
      />
      <Button type="submit">Agregar libro </Button>
    </Form>
  );
}
export default LibroNuevo;
