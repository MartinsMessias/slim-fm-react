import React from "react";
//Custom
import "./styles.css";
import ArtistItem from "../../components/ArtistItem";
//Components

function ArtistsPage() {
  return (
    <div className="container">
      <div className="results">
        <h4 className="artist">
          Você buscou por
          <h1 className="artist-name">Michael Jackson</h1>
        </h4>
        <hr />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
      </div>
    </div>
  );
}

export default ArtistsPage;
