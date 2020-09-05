import React from "react";
import { RiPlayMiniFill } from "react-icons/ri";

//Custom
import "./styles.css";

export interface Artist {
  name: string;
  listeners: string;
  url: string;
  image: any;
}

interface ArtistItemProps {
  artist: Artist;
}

const ArtistItem: React.FC<ArtistItemProps> = ({ artist }) => {
  return (
    <a href={artist.url} className="artist-link">
      <article className="artist-item">
        <div className="artist-item-header">
          <img
            className="artist-item-img"
            src={artist.image[1]["#text"]}
            alt="Artist pic"
          />
          <div>
            <strong className="artirts-item-name">{artist.name}</strong>
            <h6>{artist.listeners} ouvintes</h6>
          </div>
          <div className="artist-info-icon">
            <RiPlayMiniFill />
          </div>
        </div>
      </article>
    </a>
  );
};

export default ArtistItem;
