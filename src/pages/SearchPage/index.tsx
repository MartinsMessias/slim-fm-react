import React, { useState } from "react";
import { Link } from "react-router-dom";

//Custom
import "./styles.css";

//Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { RiSearchLine } from "react-icons/ri";

function SearchPage() {
  const [artist, setArtist] = useState("");

  return (
    <>
      <Header />
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
        <Link className="button-primary" to={`search-result/${artist}`}>
          <span className="button-primary-text">Pesquisar</span>
          <span className="button-primary-child">
            <RiSearchLine />
          </span>
        </Link>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default SearchPage;
