import { useState, useEffect } from "react";

interface FetchState<T> {
  datos: T | null;
  cargando: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [datos, setDatos] = useState<T | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelado = false;

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`Error ${r.status}: ${r.statusText}`);
        return r.json() as Promise<T>;
      })
      .then((data) => {
        if (!cancelado) setDatos(data);
      })
      .catch((e: unknown) => {
        if (!cancelado)
          setError(e instanceof Error ? e.message : "Error desconocido");
      })
      .finally(() => {
        if (!cancelado) setCargando(false);
      });

    return () => {
      cancelado = true;
    };
  }, [url]);

  return { datos, cargando, error };
}
