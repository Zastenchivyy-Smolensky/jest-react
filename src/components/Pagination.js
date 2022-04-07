import React, { useState } from "react";

export const Pagination = ({ max }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const pageIndexArray = [...Array(max)].map((_, index) => index + 1);

  return (
    <div>
      <ul>
        {pageIndexArray.map((index) => (
          <li key={`paginationItem_${index}`}>
            {index} {index === currentIndex && <span>◀︎ now</span>}
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          disabled={currentIndex <= 1}
        >
          prev
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          disabled={currentIndex >= max}
        >
          next
        </button>
      </div>
    </div>
  );
};
