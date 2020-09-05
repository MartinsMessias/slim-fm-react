import React, { useState, FormEvent } from "react";
//Custom
import "./styles.css";
import { RiSearchLine } from "react-icons/ri";
//Components
import ButtonPrimary from "../../components/ButtonPrimary";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArtistsPage from "../ArtistsPage";
import api from "../../services/api";
import ArtistItem, { Artist } from "../../components/ArtistItem";

function SearchPage() {
  const [artistsList, setArtistsList] = useState(Object);
  const [artist, setArtist] = useState("");

  async function searchArtist(e: FormEvent) {
    e.preventDefault();

    const rsesponse = await api.get("?method=artist.search", {
      params: {
        artist,
        format: "json",
      },
    });

    console.log(rsesponse.data);
    setArtistsList(rsesponse.data);
    console.log(artistsList);
  }

  return (
    <>
      <Header />
      <form onSubmit={searchArtist}>
        <fieldset>
          <div className="center">
            <p className="title">Digite o nome de um artista para pesquisar</p>
            <input
              name="artist"
              type="text"
              className="search-bar-input"
              placeholder="Ex: Michael Jackson"
              onChange={(e) => {
                setArtist(e.target.value);
              }}
            />
            <button className="button-primary" type="submit">
              <span className="button-primary-text">Pesquisar</span>
              <span className="button-primary-child">
                <RiSearchLine />
              </span>
            </button>
          </div>
        </fieldset>
      </form>
      {/* <main>
        {artists.map((artist: Artist) => {
          return <ArtistItem key={artist.name} artist={artist} />;
        })}
      </main> */}
      <Footer />
    </>
  );
}

export default SearchPage;
