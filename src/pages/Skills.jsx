import React, { useState, useEffect } from "react";
import PageTransition from "../components/PageTransition";
import "../styles/Skills.css";

const Skills = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <PageTransition>
        {/* Ícones Sociais */}
        <aside className="social-icons">
          <a href="https://www.instagram.com/joaomarcosribeirete/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://github.com/joaomarcosribeiretee" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/joaomarcosribeirete/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </aside>


      <div className={`skills-container ${fadeIn ? "fade-in" : "fade-out"}`}>
        <div className="corner-decor">
          <img src="/icons/Retangulos.png" alt="Decoração" className="rectangles" />
        </div>
        <h1 className="skills-title">TECNOLOGIAS</h1>
        <p className="skills-subtitle">
          Meu foco é o <strong>desenvolvimento front-end e mobile.</strong>
        </p>
        <p className="skills-description">
          Domino tecnologias como <strong>HTML, CSS, JavaScript, React, React Native, Express e Electron</strong>, desenvolvendo interfaces funcionais para a web e aplicativos móveis. 
          Tenho experiência no back-end com <strong>Python</strong>, resolvendo problemas e gerenciando bancos de dados como <strong>MySQL</strong> de forma eficiente.
        </p>
        <p className="skills-linkedin">
          Confira meu <a href="https://www.linkedin.com/in/joaomarcosribeirete/" target="_blank" rel="noopener noreferrer">LinkedIn</a> para conhecer mais sobre meu trabalho e habilidades.
        </p>

        {/* 🔹 Grade de Ícones das Tecnologias */}
        <div className="skills-grid">
          {[
            { src: "/icons/tec/html.svg"},
            { src: "/icons/tec/css.svg"},
            { src: "/icons/tec/javascript.svg"},
            { src: "/icons/tec/vue.svg"},
            { src: "/icons/tec/node.svg"},
            { src: "/icons/tec/react.svg"},
            { src: "/icons/tec/fgima.svg"},
            { src: "/icons/tec/python.svg"},
            { src: "/icons/tec/mysql.svg"},
            { src: "/icons/tec/vs.svg"},
            { src: "/icons/tec/git.svg"},
            { src: "/icons/tec/vegas.svg"},
            { src: "/icons/tec/photoshop.svg"},
            { src: "/icons/tec/premiere.svg"},
          ].map((tech, index) => (
            <div key={index} className="skill-item">
              <img src={tech.src} alt={tech.name} className="skill-icon" />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
