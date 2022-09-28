import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currPage }) => {
  const pageNumbers = [];
  const [isMousedOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseOut = () => {
    setMouseOver(false);
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className="page-link"
          >
            <button
              className="page-button"
              style={{
                backgroundColor:
                  number === currPage
                    ? "rgba(164, 164, 164, 0.279)"
                    : isMousedOver
                    ? "rgba(228, 228, 228, 0.231)"
                    : "white",
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
