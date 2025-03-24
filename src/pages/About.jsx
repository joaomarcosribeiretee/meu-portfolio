import React, { useEffect } from "react";
import PageTransition3 from "../components/PageTransition3";
import "../styles/About.css";

const About = () => {
  // Aplica o cursor personalizado ao montar o componente
  useEffect(() => {
    document.body.style.cursor = "url('../icons/tec/cursor.png') 16 16, auto";
    return () => {
      document.body.style.cursor = "auto"; // Restaura o cursor padrão ao sair da página
    };
  }, []);

  // Função para tocar o áudio correspondente
  const playSound = (soundFile) => {
    const audio = new Audio(`/audio/${soundFile}`);
    audio.play();
  };

  return (
    <PageTransition3>
      <div className="about-page">
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

        <div className="about-container">
          {/* Contêiner da Foto */}
          <div className="about-photo-container">
            <img src="/icons/sobrefoto.png" alt="Minha Foto" className="about-photo" />
          </div>

          {/* Texto "Sobre Mim" */}
          <div className="about-text">
            <div className="about-title-container">
              <h1>Sobre Mim</h1>
              <div className="about-icons">
                <img 
                  src="/icons/spider.png" 
                  alt="Spider-Man" 
                  className="about-icon" 
                  onClick={() => playSound("spider.mp3")} 
                />
                <img 
                  src="/icons/95.png" 
                  alt="95" 
                  className="about-icon icon-95" 
                  onClick={() => playSound("katchau.mp3")} 
                />
                <img 
                  src="/icons/thorfin.png" 
                  alt="Thorfinn" 
                  className="about-icon thorfinn-icon" 
                  onClick={() => playSound("thorfin.mp3")} 
                />
                <img 
                  src="/icons/flash.png" 
                  alt="Flash" 
                  className="about-icon flash-icon" 
                  onClick={() => playSound("flash.mp3")} 
                />
              </div>
            </div>
            <p>
              Olá! Meu nome é <strong>João Marcos Ribeirete Garbelini</strong>, nascido em Curitiba, 
              mas cresci em Santo Antônio da Platina, uma cidade no Paraná. Desde criança, a tecnologia sempre foi parte da minha vida
              – e tudo começou com os jogos. Foi no <strong>Minecraft</strong> que dei meus primeiros passos na <strong>programação</strong>, 
              criando mods e explorando a infinidade de possibilidades que um mundo virtual pode oferecer.
            </p>
            <p>
              Hoje, sou um <strong>desenvolvedor Front-End</strong> focado em transformar ideias em experiências digitais funcionais e atraentes. 
              Paralelamente, aprofundo meus conhecimentos no <strong>Back-End</strong> e estudo <strong>Inteligência Artificial</strong>,
              onde encontro grandes oportunidades de inovação. Sou apaixonado por <strong>design e edição</strong>, utilizando ferramentas como
              <strong> Adobe Premiere, Vegas PRO, DaVinci, Photoshop</strong> e <strong>Figma</strong> para criar vídeos e projetos de UI/UX. 
            </p>
            <p>
              Minha jornada na tecnologia ganhou forma quando decidi cursar <strong>Ciência da Computação na PUC-SP.</strong>
              A mudança para São Paulo foi um marco na minha vida — cheia de desafios, aprendizado e crescimento.
              Aqui, descobri que para criar algo grandioso, o <strong>trabalho em equipe e a comunicação</strong> são fundamentais.
            </p>
            <p>
              Entre uma linha de código e outra, gosto de manter o equilíbrio praticando esportes como <strong>musculação e futebol.</strong> 
              Mas meu lado nerd não fica de fora – <strong>jogos, filmes de ficção e animações</strong> fazem parte do que me inspira a criar e 
              a explorar novas ideias. A música também é uma grande companheira, dá uma olhada no meu perfil no  
              no  
              <span style={{ marginRight: "1px" }}> </span> {/* Adiciona espaçamento antes do link */}
              <a href="https://open.spotify.com/user/22lseke5ukek7jgd4sepaacoy?si=81add31631224262" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="spotify-link">
                Spotify 
              </a>       
              <span style={{ marginLeft: "1px" }}> </span> {/* Adiciona espaçamento depois do link */}
              e confira o que toca nos meus fones enquanto programo ou relaxo. 
            </p>
            <p>
              <strong>Tudo isso me dá o foco necessário para transformar ideias em realidade! 🚀</strong>
            </p>
          </div>
        </div>
      </div>
    </PageTransition3>
  );
};

export default About;
