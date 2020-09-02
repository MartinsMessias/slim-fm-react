import React from "react";

//Styles
import "./styles.css";

function Header() {
  return (
    <header>
      <h1 className="site-title">SlimFM</h1>
      <nav>
        <a href="#" className="menu-item">
          Pesquisar
        </a>
        <a href="#" className="menu-item">
          Histórico
        </a>
      </nav>
    </header>
  );
}

export default Header;
