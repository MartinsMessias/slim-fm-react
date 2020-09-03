import React from "react";
//Custom
import "./styles.css";
import { RiSearchLine } from "react-icons/ri";
//Components
import SearchBar from "../../components/SearchBar";
import ButtonPrimary from "../../components/ButtonPrimary";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArtistsPage from "../ArtistsPage";

function SearchPage() {
  return (
    <>
      <Header />
      <div className="center">
        <p className="title">Digite o nome de um artista para pesquisar</p>
        <div>
          <SearchBar />
        </div>
        <ButtonPrimary title="Pesquisar" link="/search-result">
          <RiSearchLine />
        </ButtonPrimary>
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;
