import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Header.css";
import "../styles/Projects.css";

const projectsData = [
  {
    title: "MarketPlace",
    subtitle: "APLICAÇÃO WEB",
    description: "Marketplace online para compra e venda de produtos tecnológicos. Desenvolvido com HTML, CSS, JavaScript, Express, MySQL, integração com bcrypt para hashing de senhas e funcionalidades como modo noturno, usuários logados, inserção de produtos e carrinho de compras.",
    link: "https://github.com/joaomarcosribeiretee/projeto1",
    image: "/images/project1.png",
  },
  {
    title: "Flashcards",
    subtitle: "APLICAÇÃO MOBILE E DESKTOP",
    description: "Aplicativo para criação, organização e estudo de flashcards personalizados. Desenvolvido com HTML, CSS, JavaScript e Electron para versão desktop, e React Native para a versão mobile, garantindo uma experiência fluida em múltiplas plataformas.",
    link: "https://github.com/joaomarcosribeiretee/projeto2",
    image: "/images/project2.png",
  }
];

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
      
      <div className="corner-decor2">
        <img src="/icons/Retangulos.png" alt="Decoração" />
      </div>
      
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="projects-swiper"
      >
        <SwiperSlide>
          <div className="content-wrapper">
            <h1 className="projects-title">PORTFOLIO & PROJETOS</h1>
            <p className="projects-description">
              Aqui estão alguns dos projetos que desenvolvi, cada um focado em atender demandas específicas com soluções criativas.
              Se precisar de algo exclusivo ou quiser discutir sua ideia, entre em <span className="highlight">contato</span> comigo!
            </p>
            <a href="https://github.com/joaomarcosribeiretee" className="projects-link" target="_blank" rel="noopener noreferrer">
              Ver Projetos &gt;
            </a>
          </div>
        </SwiperSlide>

        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="content-wrapper">
              <h3 className="project-subtitle">{project.subtitle}</h3>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="projects-link">Acessar o App &gt;</a>
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
