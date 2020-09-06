import React from "react";
import { RiPlayMiniFill } from "react-icons/ri";

//Custom
import "./styles.css";

export interface Album {
  artist: string;
  name: string;
  url: string;
  image: any;
}

interface AlbumItemProps {
  album: Album;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ album }) => {
  return (
    <a href={album.url} className="album-link">
      <article className="album-item">
        <img
          className="album-item-img"
          src={
            album.image[3]["#text"]
              ? album.image[3]["#text"]
              : "https://via.placeholder.com/64"
          }
          alt="Album img"
        />
        <div className="album-item-body">
          <strong className="album-item-name">{album.name}</strong>
          <h6>{album.artist}</h6>
        </div>
        <div className="album-info-icon">
          <RiPlayMiniFill />
        </div>
      </article>
    </a>
  );
};

export default AlbumItem;
