import React from "react";
//Custom
import "./styles.css";
import ArtistItem from "../../components/ArtistItem";
//Components

function ArtistsPage() {
  return (
    <div id="artist-result" className="container">
      <div className="artist-block">
        <h4>
          Você buscou por
          <h1 className="artist-name">Michael Jackson</h1>
        </h4>
        <hr />
        <ul className="artist-history-list">
          <li>
            <ArtistItem />
          </li>
          <li>
            <ArtistItem />
          </li>{" "}
          <li>
            <ArtistItem />
          </li>{" "}
          <li>
            <ArtistItem />
          </li>{" "}
          <li>
            <ArtistItem />
          </li>{" "}
          <li>
            <ArtistItem />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ArtistsPage;
