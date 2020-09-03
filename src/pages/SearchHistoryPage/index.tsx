import React from "react";
//Custom
import "./styles.css";

function SearchHistoryPage() {
  return (
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
  );
}

export default SearchHistoryPage;
