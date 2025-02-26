import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import "../styles/Projects.css";

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 50);
  }, []);

  return (
    <div className={`projects-container ${fadeIn ? "fade-in" : "fade-out"}`}>
      <aside className="social-icons">
        <a href="https://www.instagram.com/joaomarcosribeirete/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://github.com/joaomarcosribeiretee" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.svg" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/joaomarcosribeirete/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
        </a>
      </aside>

      <div className="content-wrapper">
        <h1 className="projects-title">PORTFOLIO & PROJETOS</h1>
        <p className="projects-description">
          Aqui estão alguns dos projetos que desenvolvi, cada um focado em atender demandas específicas com soluções criativas.
          Se precisar de algo exclusivo ou quiser discutir sua ideia, entre em <span className="highlight">contato</span> comigo!
        </p>
        <Link to="/projects" className="projects-link">Ver Projetos &gt;</Link>
      </div>
    </div>
  );
};

export default Projects;
