import { Route, Switch } from "react-router-dom";
import React from "react";
import SearchPage from "./pages/SearchPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import ArtistsPage from "./pages/ArtistsPage";
import AlbumsPage from "./pages/AlbunsPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SearchPage} />
      <Route path="/search-artist/:artist" component={ArtistsPage} />
      <Route path="/search-album/:album" component={AlbumsPage} />
      <Route path="/search-history" component={SearchHistoryPage} />
    </Switch>
  );
}

export default Routes;
