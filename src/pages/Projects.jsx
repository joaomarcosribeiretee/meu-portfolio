import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import PageTransition from "../components/PageTransition";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Header.css";
import "../styles/Projects.css";

const projectsData = [
  {
    title: "LIGAMASTER",
    subtitle: "APLICAÇÃO WEB",
    description: `
      Aplicativo para criação e gestão de campeonatos esportivos, permitindo organizar times, partidas e tabelas de desempenho de forma prática e eficiente.
      <br/><br/>
      <strong>Desenvolvido com:</strong> HTML, CSS, JavaScript, Express e MySQL, proporcionando funcionalidades como cadastro de campeonatos, gerenciamento de times e jogadores, geração automática de partidas e acompanhamento de desempenho em tempo real.
    `,
    link: "https://github.com/joaomarcosribeiretee/projeto2",
    media: { type: "video", src: "/videos/ligamaster.mp4" },
  },
  {
    title: "MARKETPLACE",
    subtitle: "APLICAÇÃO WEB",
    description: `
      Marketplace online para compra e venda de produtos tecnológicos.
      <br/><br/>
      <strong>Desenvolvido com:</strong> HTML, CSS, JavaScript, Express, MySQL, integração com bcrypt para hashing de senhas e funcionalidades como registro de usuários, login, cadastro de produtos e carrinho de compras.
    `,
    link: "https://github.com/joaomarcosribeiretee/projeto2",
    media: { type: "video", src: "/videos/ligamaster.mp4" },
  },
  {
    title: "FLASHCARDS",
    subtitle: "APLICAÇÃO MOBILE E DESKTOP",
    description: `
      Aplicativo para criação, organização e estudo de flashcards personalizados.
      <br/><br/>
      <strong>Desenvolvido com:</strong> HTML, CSS, JavaScript e Electron para a versão desktop, e React Native para a versão mobile, garantindo uma experiência fluida em múltiplas plataformas.
    `,
    link: "https://github.com/joaomarcosribeiretee/projeto2",
    media: { type: "video", src: "/videos/ligamaster.mp4" },
  },
];

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 50);
  }, []);

  return (
    <PageTransition>
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

        <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={50} slidesPerView={1} className="projects-swiper">
          <SwiperSlide className="first-slide">
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
              <div className="project-slide">
                <div className="project-text">
                  <h3 className="project-subtitle">{project.subtitle}</h3>
                  <h2 className="project-title">{project.title}</h2>
                  {/* Renderização correta da descrição com HTML */}
                  <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="projects-link">
                    Acessar o App &gt;
                  </a>
                </div>
                <div className="project-media-container">
                  {project.media.type === "image" ? (
                    <img src={project.media.src} alt={project.title} className="project-media" />
                  ) : (
                    <video controls className="project-media">
                      <source src={project.media.src} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Onda na parte inferior */}
        <div className="wave-container2">
          <svg className="wave-svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#737373" fillOpacity="0.6" d="M0,256L205.7,288L411.4,128L617.1,256L822.9,160L1028.6,320L1234.3,256L1440,32L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
