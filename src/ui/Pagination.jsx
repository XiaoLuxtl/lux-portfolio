/* eslint-disable react/prop-types */
import { useId } from "react";

export function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const pid = useId();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="join">
      {/* <button onClick={() => handlePageChange(page-1)} className="join-item btn">
        «
      </button> */}

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={pid + page}
            className="join-item btn btn-outline"
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      )}

      {/* <button onClick={() => handlePageChange(page+1)} className="join-item btn">
        »
      </button> */}
    </div>
  );
}
