import { useState, useEffect } from "react";

export function usePagination({ initialData, itemsPerPage = 3 }) {
  const [data, setData] = useState(initialData); // Datos totales
  const [currentPage, setCurrentPage] = useState(1); // Número de página actual

  // Actualiza los datos mostrados en función del número de página actual
  const getCurrentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Cambia la página actual y obtiene los datos correspondientes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (initialData) {
      // Added: If initialData is defined
      setData(initialData);
    }
  }, [initialData]);

  return { currentPage, getCurrentData, handlePageChange };
}
