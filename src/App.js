import React from "react";
import { TablesContainer } from "./components/Table/Tables";
import { SearchContainer } from "./components/Search/Search";

import "./styles.css";
import { Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="wrapper">
      <div className="app">
        <SearchContainer />
        <Route path="/:id?" render={() => <TablesContainer />} />
      </div>
    </div>
  );
};
