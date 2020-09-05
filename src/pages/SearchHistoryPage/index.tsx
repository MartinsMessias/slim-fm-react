import React from "react";
//Custom
import "./styles.css";
// import Footer from "../../components/Footer";
import Header from "../../components/Header";

function SearchHistoryPage() {
  return (
    <>
      <Header />
      <div id="search-history-list" className="container">
        <div className="search-history-results">
          <h1 className="history-title">Seu histórico de pesquisas</h1>
          <hr />
          <ul className="history-list">
            <li>Michael Jackson</li>
            <li>Michael Jackson</li>
            <li>Michael Jackson</li>
            <li>Michael Jackson</li>
            <li>Michael Jackson</li>
            <li>Michael Jackson</li>
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default SearchHistoryPage;
