import React, { useState, useEffect } from "react";
import api from "../../services/api";

//Custom
import "./styles.css";

//Components
import Header from "../../components/Header";
import AlbumItem, { Album } from "../../components/AlbumItem";

function AlbumsPage() {
  const [albums, setAlbums] = useState([]);

  var url = decodeURI(window.location.hash);
  var cutUrl = url.split("/");
  const albumName = cutUrl[cutUrl.length - 1];

  useEffect(() => {
    api
      .get("?method=album.search", {
        params: {
          album: albumName,
          format: "json",
        },
      })
      .then((response) => {
        setAlbums(response.data["results"]["albummatches"]["album"]);
      })
      .catch(() => {
        alert("Erro na busca!");
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
              return <AlbumItem key={album.url} album={album} />;
            })}
          </main>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default AlbumsPage;
