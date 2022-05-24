import React from "react";
import { filterText } from "../../redux/post-reducer";
import { connect } from "react-redux";
import "./search.css";

const Search = ({ sendText }) => {
  const handleSubmit = (e) => {
    sendText(e.target.value);
  };
  return (
    <form className="search">
      <input
        type="text"
        placeholder="Поиск"
        className="search__input"
        defaultValue=""
        onChange={(e) => handleSubmit(e)}
      />
      <button type="submit" className="search__button">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendText: (text) => {
      dispatch(filterText(text));
    }
  };
};

export const SearchContainer = connect(null, mapDispatchToProps)(Search);
