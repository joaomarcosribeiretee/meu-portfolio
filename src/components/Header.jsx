import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Página Inicial");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false); // Fecha o menu após clicar em um item
  };

  return (
    <header className="header">
      <button className="menu-button" onClick={toggleMenu}>
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          &times;
        </button>
        <ul>
          <li
            className={activeItem === "Página Inicial" ? "active" : ""}
            onClick={() => handleMenuItemClick("Página Inicial")}
          >
            <a href="#home">Página Inicial</a>
          </li>
          <li
            className={activeItem === "Sobre Mim" ? "active" : ""}
            onClick={() => handleMenuItemClick("Sobre Mim")}
          >
            <a href="#about">Sobre Mim</a>
          </li>
          <li
            className={activeItem === "Habilidades" ? "active" : ""}
            onClick={() => handleMenuItemClick("Habilidades")}
          >
            <a href="#skills">Habilidades</a>
          </li>
          <li
            className={activeItem === "Projetos" ? "active" : ""}
            onClick={() => handleMenuItemClick("Projetos")}
          >
            <a href="#projects">Projetos</a>
          </li>
          <li
            className={activeItem === "Experiência" ? "active" : ""}
            onClick={() => handleMenuItemClick("Experiência")}
          >
            <a href="#experience">Experiência</a>
          </li>
          <li
            className={activeItem === "Contato" ? "active" : ""}
            onClick={() => handleMenuItemClick("Contato")}
          >
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
