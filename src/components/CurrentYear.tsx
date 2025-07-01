import { useState, useEffect } from "react";

export default function CurrentYear() {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    // Función para actualizar el año
    const updateYear = () => {
      const currentYear = new Date().getFullYear().toString();
      setYear(currentYear);
    };

    // Actualizar inmediatamente
    updateYear();
  }, []);

  return <span>{year}</span>;
}
