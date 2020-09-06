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
        <img
          className="artist-item-img"
          src={
            artist.image[3]["#text"]
              ? artist.image[3]["#text"]
              : "https://via.placeholder.com/64"
          }
          alt="Artist img"
        />
        <div className="artist-item-body">
          <strong className="artirts-item-name">{artist.name}</strong>
          <h6>{artist.listeners} ouvintes</h6>
        </div>
        <div className="artist-info-icon">
          <RiPlayMiniFill />
        </div>
      </article>
    </a>
  );
};

export default ArtistItem;
