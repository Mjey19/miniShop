import React from "react";
import "./Pagination.css";

function Pagination({ totalPosts, currentPage, cardCurrentPage }) {
  let arr: number[] = [];
  for (let i: number = 1; i <= Math.ceil(totalPosts / cardCurrentPage); i++) {
    arr.push(i);
  }
  return (
    <div className="pagination">
      {arr.map((item, index) => {
        return (
          <button key={index} onClick={() => currentPage(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
