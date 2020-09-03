import React from "react";
//Custom
import "./styles.css";
import ArtistItem from "../../components/ArtistItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
//Components

function ArtistsPage() {
  return (
    <>
      <div id="artist-result" className="container">
        <div className="artist-block">
          <h4>
            Você buscou por
            <h1 className="artist-name">Michael Jackson</h1>
          </h4>
          <hr />
          <div className="artist-history-list">
            <ArtistItem />
            <ArtistItem />
            <ArtistItem />
            <ArtistItem />
            <ArtistItem />
            <ArtistItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistsPage;
