import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Página Inicial");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveItem("Página Inicial");
        break;
      case "/about":
        setActiveItem("Sobre Mim");
        break;
      case "/skills":
        setActiveItem("Skills");
        break;
      default:
        setActiveItem("Página Inicial");
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (item, path) => {
    setActiveItem(item);
    setMenuOpen(false);
    navigate(path);
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
          {/* Página Inicial */}
          <li className={activeItem === "Página Inicial" ? "active" : ""}>
            <Link to="/" onClick={() => handleMenuItemClick("Página Inicial", "/")}>Página Inicial</Link>
          </li>

          {/* Sobre Mim */}
          <li className={activeItem === "Sobre Mim" ? "active" : ""}>
            <Link to="/about" onClick={() => handleMenuItemClick("Sobre Mim", "/about")}>Sobre Mim</Link>
          </li>

          {/* Skills */}
          <li className={activeItem === "Skills" ? "active" : ""}>
            <Link to="/skills" onClick={() => handleMenuItemClick("Skills", "/skills")}>Habilidades</Link>
          </li>

          {/* 🔹 Seções dentro da Página Inicial */}
          <li className={activeItem === "Projetos" ? "active" : ""}>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              Projetos
            </a>
          </li>
          <li className={activeItem === "Experiência" ? "active" : ""}>
            <a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}>
              Experiência
            </a>
          </li>
          <li className={activeItem === "Contato" ? "active" : ""}>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
