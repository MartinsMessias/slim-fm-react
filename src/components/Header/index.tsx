import React from "react";

//Styles
import "./styles.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="site-title">SlimFM</h1>
      <nav>
        <Link to="/" className="menu-item">
          Pesquisar
        </Link>
        <Link to="/search-history" className="menu-item">
          Histórico
        </Link>
      </nav>
    </header>
  );
}

export default Header;
