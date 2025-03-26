import React from "react";
import PageTransition from "../components/PageTransition";
import "../styles/Home.css";

const Home = () => {
  return (
    <PageTransition>
      <div className="home-container">
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

        {/* Onda animada no rodapé */}
        <div className="wave-container">
          <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#737373" fillOpacity="0.6" d="M0,96L48,122.7C96,149,192,203,288,234.7C384,267,480,277,576,245.3C672,213,768,139,864,133.3C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
