import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Custom
import "./styles.css";

//Components
import Header from "../../components/Header";
import { RiSearchLine } from "react-icons/ri";

function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  function handleSearchArtist() {
    if (searchValue !== "") {
      localStorage.setItem(new Date().getTime().toString(), searchValue);
      history.push(`/search-artist/${searchValue}`);
    } else {
      history.push("/");
    }
  }

  function handleSearchAlbum() {
    if (searchValue !== "") {
      localStorage.setItem(new Date().getTime().toString(), searchValue);
      history.push(`/search-album/${searchValue}`);
    } else {
      history.push("/");
    }
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
          <a
            id="search-artist"
            className="button-primary"
            onClick={handleSearchArtist}
          >
            <span className="button-primary-text">Pesquisar artista</span>
            <span className="button-primary-child">
              <RiSearchLine />
            </span>
          </a>
          <a
            id="search-album"
            className="button-primary"
            onClick={handleSearchAlbum}
          >
            <span className="button-primary-text">Pesquisar álbum</span>
            <span className="button-primary-child">
              <RiSearchLine />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
