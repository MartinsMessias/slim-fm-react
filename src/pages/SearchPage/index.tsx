import React, { useState } from "react";
import { Link } from "react-router-dom";

//Custom
import "./styles.css";

//Components
import Header from "../../components/Header";
import { RiSearchLine } from "react-icons/ri";

function SearchPage() {
  const [searchValue, setSearchValue] = useState("");

  function handleSaveHistory() {
    let date_now = new Date().getTime();
    localStorage.setItem(date_now.toString(), searchValue);
  }

  return (
    <>
      <Header />
      <div className="center">
        <p className="title">
          Digite o nome de um artista ou de um álbum para pesquisar
        </p>
        <input
          name="artist"
          type="text"
          className="search-bar-input"
          placeholder="Ex: Michael Jackson"
          autoComplete="off"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <div className="search-buttons">
          <Link
            className="button-primary"
            to={`search-artist/${searchValue}`}
            onClick={handleSaveHistory}
          >
            <span className="button-primary-text">Pesquisar artista</span>
            <span className="button-primary-child">
              <RiSearchLine />
            </span>
          </Link>
          <Link
            className="button-primary"
            to={`search-album/${searchValue}`}
            onClick={handleSaveHistory}
          >
            <span className="button-primary-text">Pesquisar álbum</span>
            <span className="button-primary-child">
              <RiSearchLine />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
