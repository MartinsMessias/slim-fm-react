import React from "react";
import { useHistory } from "react-router-dom";
//Custom
import "./styles.css";
// import Footer from "../../components/Footer";
import Header from "../../components/Header";

function SearchHistoryPage() {
  const savedHistory = Object.entries(localStorage);
  const history = useHistory();

  function handleClearHistory() {
    localStorage.clear();
    history.push("/search-history");
  }

  return (
    <>
      <Header />
      <div id="search-history-list" className="container">
        <div className="search-history-results">
          <div className="search-history-header">
            <h1 className="search-history-title">Seu histórico de pesquisas</h1>
            <button
              className="search-history-clear-button"
              onClick={handleClearHistory}
            >
              Limpar histórico
            </button>
          </div>
          <hr />
          <ul className="history-list">
            {savedHistory.map((item) => {
              return (
                <li>
                  {new Date(parseInt(item[0])).toLocaleDateString("pt-BR")} -{" "}
                  {new Date(parseInt(item[0])).toLocaleTimeString("pt-BR")} -{" "}
                  {item[1]}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default SearchHistoryPage;
