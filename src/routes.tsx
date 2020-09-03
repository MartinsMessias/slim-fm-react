import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import SearchPage from "./pages/SearchPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SearchPage} />
      <Route path="/search-history" component={SearchHistoryPage} />
    </BrowserRouter>
  );
}

export default Routes;
