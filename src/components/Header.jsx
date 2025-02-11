import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Importamos `useNavigate`
import "../styles/Header.css";

const Header = () => {
  const location = useLocation(); // Obtém a URL atual
  const navigate = useNavigate(); // Controla a navegação manualmente
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Página Inicial");

  // Atualiza o estado `activeItem` conforme a URL muda
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveItem("Página Inicial");
        break;
      case "/about":
        setActiveItem("Sobre Mim");
        break;
      default:
        setActiveItem("Página Inicial");
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false); // Fecha o menu após clicar em um item
  };

  // 📌 Função para garantir que vá para Home antes de ir para a seção interna
  const handleSectionNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/"); // Força a volta para a página inicial antes de navegar para a seção
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Pequeno delay para garantir que a navegação ocorra corretamente
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Fecha o menu
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
            <Link to="/" onClick={() => handleMenuItemClick("Página Inicial")}>Página Inicial</Link>
          </li>

          {/* Sobre Mim */}
          <li className={activeItem === "Sobre Mim" ? "active" : ""}>
            <Link to="/about" onClick={() => handleMenuItemClick("Sobre Mim")}>Sobre Mim</Link>
          </li>

          {/* Seções dentro da Página Inicial */}
          <li className={activeItem === "Habilidades" ? "active" : ""}>
            <a href="#skills" onClick={() => handleSectionNavigation("skills")}>Habilidades</a>
          </li>
          <li className={activeItem === "Projetos" ? "active" : ""}>
            <a href="#projects" onClick={() => handleSectionNavigation("projects")}>Projetos</a>
          </li>
          <li className={activeItem === "Experiência" ? "active" : ""}>
            <a href="#experience" onClick={() => handleSectionNavigation("experience")}>Experiência</a>
          </li>
          <li className={activeItem === "Contato" ? "active" : ""}>
            <a href="#contact" onClick={() => handleSectionNavigation("contact")}>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
