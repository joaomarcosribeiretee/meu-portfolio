import React from "react";
import PageTransition from "../components/PageTransition";
import "../styles/Home.css"; 

const Home = () => {
  return (
    <PageTransition>
      <div className="home-container">
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
        <main className="content">
          <h1 className="home-text">Olá! Eu sou João Marcos.</h1>
          <p className="home-text2">
            Tenho 20 anos, sou <strong>desenvolvedor front-end</strong>, engenheiro de
            <strong> JavaScript, HTML e CSS</strong>, e estudante de
            <strong> Ciência da Computação</strong>. Sempre busco novas formas de transformar
            tecnologia em experiências incríveis, explorando também o back-end e mergulhando no
            universo da Inteligência Artificial.
          </p>
          <p className="home-text2">
            Esse é meu <strong>portfólio</strong>! Aqui você conhece meu trabalho e minha paixão
            por desenvolvimento! 💻🚀
          </p>
        </main>
      </div>
    </PageTransition>
  );
};

export default Home;
