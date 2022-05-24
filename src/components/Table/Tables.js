import React, { useEffect } from "react";
import { TableHead } from "./TableHead";
import { TableData } from "./TableData";
import {
  getPosts,
  changeCurrentPage,
  sortById,
  sortByTitle,
  sortByBody
} from "../../redux/post-reducer";
import { Pagination } from "../Pagination/Pagination";
import { connect } from "react-redux";

import "./tables.css";

export const Tables = React.memo(
  ({
    currentPosts,
    changeCurrentPage,
    pagesCount,
    getPosts,
    sortById,
    sortByTitle,
    sortByBody,
    filterText
  }) => {
    useEffect(() => {
      getPosts();
      console.log("render");
    }, []);
    const numbers = [];
    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
      numbers.push(i);
    }

    return (
      <div className="container">
        <table className="table">
          <TableHead
            sortById={sortById}
            sortByTitle={sortByTitle}
            sortByBody={sortByBody}
          />

          <tbody className="table__body">
            {currentPosts.length > 0
              ? currentPosts
                  .filter((o) => o.title.includes(filterText))
                  .map((p) => (
                    <TableData
                      id={p.id}
                      title={p.title}
                      body={p.body}
                      key={p.id}
                    />
                  ))
              : null}
          </tbody>
        </table>

        <Pagination numbers={numbers} changeCurrentPage={changeCurrentPage} />
      </div>
    );
  }
);

let mapStateToProps = (state) => ({
  pagesCount: state.postsData.pagesCount,
  currentPosts: state.postsData.currentPosts,
  filterText: state.postsData.filterText
});

export const TablesContainer = connect(mapStateToProps, {
  getPosts,
  changeCurrentPage,
  sortById,
  sortByTitle,
  sortByBody
})(Tables);
