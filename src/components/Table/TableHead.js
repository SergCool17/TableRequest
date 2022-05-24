import React from "react";
import "./tables.css";

export const TableHead = ({ sortById, sortByTitle, sortByBody }) => {
  return (
    <thead className="table__head">
      <tr>
        <th>
          <span>ID</span>
          <span
            onClick={() => {
              sortById();
            }}
          >
            &#709;
          </span>
        </th>
        <th>
          <span>Заголовок</span>
          <span
            onClick={() => {
              sortByTitle();
            }}
          >
            &#709;
          </span>
        </th>
        <th>
          <span>Описание</span>
          <span
            onClick={() => {
              sortByBody();
            }}
          >
            &#709;
          </span>
        </th>
      </tr>
    </thead>
  );
};
