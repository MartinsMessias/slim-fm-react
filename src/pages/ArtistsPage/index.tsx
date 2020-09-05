import React, { useState, FormEvent, useEffect, Component } from "react";
//Custom
import "./styles.css";
import ArtistItem, { Artist } from "../../components/ArtistItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import api from "../../services/api";
//Components

function ArtistsPage() {
  const [artists, setArtists] = useState([]);

  var url = window.location.pathname;
  var cutUrl = url.split("/");
  const artistName = cutUrl[cutUrl.length - 1];

  useEffect(() => {
    const response = api
      .get("?method=artist.search", {
        params: {
          artist: artistName,
          format: "json",
        },
      })
      .then((response) => {
        setArtists(response.data["results"]["artistmatches"]["artist"]);
      });
  }, []);

  return (
    <>
      <Header />
      <div id="artist-result" className="container">
        <div className="artist-block">
          <h4>
            Você buscou por
            <h1 className="artist-name">{artistName}</h1>
          </h4>
          <hr />
          <main>
            {artists.map((artist: Artist) => {
              return <ArtistItem key={artist.name} artist={artist} />;
            })}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArtistsPage;
