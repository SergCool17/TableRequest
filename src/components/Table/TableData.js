import React from "react";

export const TableData = ({ id, title, body }) => {
  return (
    <tr>
      <td>
        <span>{id}</span>
      </td>
      <td>
        <span>{title}</span>
      </td>
      <td>
        <span>{body}</span>
      </td>
    </tr>
  );
};
