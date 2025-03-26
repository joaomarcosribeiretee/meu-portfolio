import React, { useState, useEffect } from "react";
import PageTransition6 from "../components/PageTransition6";
import "../styles/Skills.css";

const Skills = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 50); // Reduzi o delay para evitar lag na transição
  }, []);
  
  return (
    <PageTransition6>
      <div className={`skills-container ${fadeIn ? "fade-in" : "fade-out"}`}>
  
        {/* NOVO WRAPPER PARA CENTRALIZAR O CONTEÚDO */}
        <div className="content-wrapper">
          <h1 className="skills-title">TECNOLOGIAS</h1>
          
          <p className="skills-subtitle">
            Meu foco é o <strong>desenvolvimento front-end e mobile.</strong>
          </p>
  
          <p className="skills-description">
            Domino tecnologias como <strong>HTML, CSS, JavaScript, React, React Native, Express e Electron</strong>, 
            desenvolvendo interfaces funcionais para a web e aplicativos móveis. 
            Tenho experiência no back-end com <strong>Python</strong>, resolvendo problemas e gerenciando bancos de dados 
            como <strong>MySQL</strong> de forma eficiente.
          </p>
  
          <p className="skills-linkedin">
            Confira meu 
            <span style={{ marginRight: "10px", marginLeft: "10px"}}>
              <a href="https://www.linkedin.com/in/joaomarcosribeirete/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link">
                LinkedIn
              </a>
            </span> 
            para conhecer mais sobre meu trabalho e habilidades.
          </p>
  
          {/* 🔹 Grade de Ícones das Tecnologias */}
          <div className="skills-grid">
            {[
              { src: `${process.env.PUBLIC_URL}/icons/tec/HTML.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/CSS.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/JavaSCript.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/Vue.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/Node.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/React.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/Fgima.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/Python.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/MYSQL.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/VS.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/Git.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/Vegas.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/Photoshop.svg` },
              { src: `${process.env.PUBLIC_URL}/icons/tec/Premiere.svg` },
            ].map((tech, index) => (
              <div key={index} className="skill-item">
                <img src={tech.src} alt="Tecnologia" className="skill-icon" />
              </div>
            ))}
            <div className="corner-decor">
              <img src={`${process.env.PUBLIC_URL}/icons/Retangulos.png`} alt="Decoração" />
            </div>
          </div>
        </div>
      </div>
    </PageTransition6>
  );
};

export default Skills;
