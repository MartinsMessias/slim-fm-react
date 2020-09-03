import React from "react";
import "./assets/styles/global.css";
import SearchPage from "./pages/SearchPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtistsPage from "./pages/ArtistsPage";

function App() {
  return (
    <>
      <Header />
      {/* <SearchPage /> */}
      <ArtistsPage />
      <Footer />
    </>
  );
}

export default App;
