import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import SearchPage from "./pages/SearchPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import ArtistsPage from "./pages/ArtistsPage";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SearchPage} />
      <Route path="/search-result/:artist" exact component={ArtistsPage} />
      <Route path="/search-history" component={SearchHistoryPage} />
    </BrowserRouter>
  );
}

export default Routes;
