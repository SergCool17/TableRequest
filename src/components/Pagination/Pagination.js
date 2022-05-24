import React from "react";
import "./pagination.css";

export const Pagination = ({ numbers, changeCurrentPage }) => {
  const changePage = (e) => {
    e.preventDefault();
    let num = e.target.id;
    changeCurrentPage(num);
  };
  const pageNumbers = numbers.map((number) => {
    return (
      <span
        key={number}
        id={number}
        onClick={(e) => {
          changePage(e);
        }}
      >
        {number}
      </span>
    );
  });

  return (
    <div className="table__pagination">
      <span></span>
      {pageNumbers}
      <span></span>
    </div>
  );
};
