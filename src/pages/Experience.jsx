import React from "react";
import PageTransition2 from "../components/PageTransition2";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <PageTransition2>
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
      <div className="experience-container">

        
        <div className="corner-decor3">
          <img src="/icons/Retangulos2.png" alt="Decoração" />
        </div>

        <div className="content-wrapper">
          <h1 className="experience-title">Experiência Profissional.</h1>

          <div className="experience-item">
            <div className="timeline">
              <img src="/icons/Circle.png" alt="Circle Icon" className="circle-icon" />
              <div className="timeline-line"></div>
            </div>
            <div className="experience-info">
              <h2>Estagiário Desenvolvedor Unity | VRGlass <span className="year">2022-2023</span></h2>
              <p>
                Atuei no planejamento e desenvolvimento de programas para criação de jogos, com foco em assegurar a integridade e o desempenho dos sistemas
                através da detecção e correção de erros. Colaborei com a equipe para implementar melhorias nos processos e funcionalidades,
                garantindo a estabilidade dos projetos e uma experiência de qualidade para os usuários.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="timeline">
              <img src="/icons/Circle.png" alt="Circle Icon" className="circle-icon" />
              <div className="timeline-line2"></div>
            </div>
            <div className="experience-info">
              <h2>Analista de Testes Jr | Virtual Town <span className="year">2023-2025</span></h2>
              <p>
              Responsável pela execução de testes manuais e automatizados, garantindo a qualidade e a funcionalidade do software. Possuo proficiência no uso do <strong>Jira Software</strong> para gerenciar e acompanhar todo o ciclo de vida dos testes de forma eficiente. Além disso, desenvolvi um <strong>painel funcional</strong> utilizando <strong>HTML, CSS, JavaScript</strong> e <strong>Express</strong>, com o objetivo de otimizar processos e automatizar tarefas recorrentes no fluxo de trabalho.
              </p>
            </div>
          </div>

          <h1 className="experience-title">Experiência Acadêmica.</h1>

          <div className="experience-item">
            <div className="timeline">
              <img src="/icons/Circle.png" alt="Circle Icon" className="circle-icon" />
              <div className="timeline-line3"></div>
            </div>
            <div className="experience-info">
              <h2>Ciência da Computação | PUC-SP <span className="year">2022-2023</span></h2>
              <p>
              Graduação em Ciência da Computação na PUC-SP, com formação voltada para áreas como desenvolvimento de software, algoritmos, inteligência artificial, bancos de dados e engenharia de sistemas. O curso proporciona uma base sólida, unindo teoria e prática, e prepara para resolver problemas complexos e criar soluções tecnológicas inovadoras.
              Ao longo da graduação, venho aplicando os conhecimentos adquiridos em projetos práticos, desenvolvendo habilidades técnicas e colaborativas diretamente alinhadas às demandas do mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition2>
  );
};

export default Experience;
