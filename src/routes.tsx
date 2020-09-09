import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import SearchPage from "./pages/SearchPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import ArtistsPage from "./pages/ArtistsPage";
import AlbumsPage from "./pages/AlbunsPage";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SearchPage} />
      <Route path="/search-artist/:artist" exact component={ArtistsPage} />
      <Route path="/search-album/:album" exact component={AlbumsPage} />
      <Route path="/search-history" component={SearchHistoryPage} />
    </BrowserRouter>
  );
}

export default Routes;
