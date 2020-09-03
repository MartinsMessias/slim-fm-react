import React from "react";
import { RiPlayMiniFill } from "react-icons/ri";

//Custom
import "./styles.css";

function ArtistItem() {
  return (
    <a href="#" className="artist-link">
      <article className="artist-item">
        <div className="artist-item-header">
          <img
            className="artist-img"
            src="https://lastfm.freetls.fastly.net/i/u/300x300/eeafe0954a68439f910e4ec9e0cda32a.webp"
            alt="Artist pic"
          />
          <div>
            <strong>Michael Jackson</strong>
          </div>
          <div className="artist-info-icon">
            <RiPlayMiniFill />
          </div>
        </div>
      </article>
    </a>
  );
}

export default ArtistItem;
