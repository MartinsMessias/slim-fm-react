import React, { useState, useEffect } from "react";
import api from "../../services/api";

//Custom
import "./styles.css";

//Components
import ArtistItem, { Artist } from "../../components/ArtistItem";
import Header from "../../components/Header";

function ArtistsPage() {
  const [artists, setArtists] = useState([]);

  var url = decodeURI(window.location.hash);
  var cutUrl = url.split("/");
  const artistName = cutUrl[cutUrl.length - 1];

  var date = new Date();
  const date_now = date.getTime();

  useEffect(() => {
    api
      .get("?method=artist.search", {
        params: {
          artist: artistName ? artistName : "Nada",
          format: "json",
        },
      })
      .then((response) => {
        setArtists(response.data["results"]["artistmatches"]["artist"]);
        localStorage.setItem(date_now.toString(), artistName);
      });
  }, []);

  return (
    <>
      <Header />
      <div id="artist-result" className="container">
        <div className="artist-block">
          <h2>
            Resultados encontrados para{" "}
            <h1 className="artist-name">{artistName}</h1>
          </h2>
          <hr />
          <main className="artist-list">
            {artists.map((artist: Artist) => {
              return <ArtistItem key={artist.name} artist={artist} />;
            })}
          </main>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default ArtistsPage;
