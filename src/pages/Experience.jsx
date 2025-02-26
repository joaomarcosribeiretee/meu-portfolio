import React from "react";
import PageTransition from "../components/PageTransition";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <PageTransition>
    <div className="experience-container">
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
        <h1 className="experience-title">Experiência Profissional.</h1>

        <div className="experience-item">
          <div className="timeline-marker"></div>
          <div className="experience-info">
            <h2>Estagiário Desenvolvedor Unity | VRGLASS <span className="year">2022-2023</span></h2>
            <p>
              Atuei no planejamento e desenvolvimento de programas para criação de jogos, com foco em assegurar a integridade e o desempenho dos sistemas
              através da detecção e correção de erros de programação. Colaborei com a equipe para implementar melhorias nos processos e funcionalidades,
              garantindo a estabilidade dos projetos e uma experiência de qualidade para os usuários.
            </p>
          </div>
        </div>

        <div className="experience-item">
          <div className="timeline-marker"></div>
          <div className="experience-info">
            <h2>Analista de Testes Jr | VIRTUALTOWN <span className="year">2023-2025</span></h2>
            <p>
              Responsável por executar testes manuais e automatizados para garantir a qualidade e funcionalidade do software. Proficiência no uso do <strong>Jira Software</strong> para gerenciar e acompanhar o ciclo de vida dos testes de forma eficiente. Além disso, utilizo <strong>HTML, CSS, JavaScript</strong> e <strong>Express</strong> para desenvolver painéis funcionais, otimizando processos e atividades frequentes no fluxo de trabalho.
            </p>
          </div>
        </div>

        <h1 className="experience-title">Experiência Acadêmica.</h1>

        <div className="experience-item">
          <div className="timeline-marker"></div>
          <div className="experience-info">
            <h2>Ciência da Computação | PUC-SP <span className="year">2022-2023</span></h2>
            <p>
              Graduação em Ciência da Computação na PUC-SP, com formação voltada para áreas como desenvolvimento de software, algoritmos, inteligência artificial, bancos de dados e engenharia de software.
            </p>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Experience;
