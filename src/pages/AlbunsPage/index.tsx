import React, { useState, useEffect } from "react";
import api from "../../services/api";

//Custom
import "./styles.css";

//Components
import Header from "../../components/Header";
import AlbumItem, { Album } from "../../components/AlbumItem";

function AlbumsPage() {
  const [albums, setAlbums] = useState([]);

  var url = decodeURI(window.location.pathname);
  var cutUrl = url.split("/");
  const albumName = cutUrl[cutUrl.length - 1];

  var date = new Date();
  const date_now = date.getTime();

  useEffect(() => {
    api
      .get("?method=album.search", {
        params: {
          album: albumName && "Nada",
          format: "json",
        },
      })
      .then((response) => {
        setAlbums(response.data["results"]["albummatches"]["album"]);
        localStorage.setItem(date_now.toString(), `Álbum ${albumName}`);
      });
  }, []);

  return (
    <>
      <Header />
      <div id="album-result" className="container">
        <div className="album-block">
          <h2>
            Resultados encontrados para{" "}
            <h1 className="album-name">{albumName}</h1>
          </h2>
          <hr />
          <main className="album-list">
            {albums.map((album: Album) => {
              return <AlbumItem key={album.name} album={album} />;
            })}
          </main>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default AlbumsPage;
