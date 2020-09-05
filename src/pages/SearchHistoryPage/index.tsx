import React from "react";
//Custom
import "./styles.css";
// import Footer from "../../components/Footer";
import Header from "../../components/Header";

function SearchHistoryPage() {
  const history = Object.entries(localStorage);

  return (
    <>
      <Header />
      <div id="search-history-list" className="container">
        <div className="search-history-results">
          <h1 className="history-title">Seu histórico de pesquisas</h1>
          <hr />
          <ul className="history-list">
            {history.map((item) => {
              console.log(item);
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
