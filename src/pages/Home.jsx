// src/pages/Home.jsx
import React from "react";
import "../styles/Home.css"; // Importando o CSS atualizado

const Home = () => {
  return (
    <div className="home-container">
      <aside className="social-icons">
        <a href="https://www.instagram.com/joaomarcosribeirete/" target="_blank" rel="noopener noreferrer"> {/* href define o link */}
          <img src="/icons/instagram.svg" alt="Instagram" /> 
        </a>
        <a href="https://github.com/joaomarcosribeiretee" target="_blank" rel="noopener noreferrer">  {/* target="_blank" abre o link em nova aba*/}
          <img src="/icons/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/joaomarcosribeirete/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
      </aside>
      <main className="content">
        <h1>Olá! Eu sou João Marcos.</h1>
        <p>
          Tenho 20 anos, sou <strong>desenvolvedor front-end</strong>, engenheiro de
          <strong> JavaScript, HTML e CSS</strong>, e estudante de
          <strong> Ciência da Computação</strong>. Sempre busco novas formas de transformar
          tecnologia em experiências incríveis, explorando também o back-end e mergulhando no
          universo da Inteligência Artificial.
        </p>
        <p>
          Esse é meu <strong>portfólio</strong>! Aqui você conhece meu trabalho e minha paixão
          por desenvolvimento! 💻🚀
        </p>
      </main>
    </div>
  );
};

export default Home;
