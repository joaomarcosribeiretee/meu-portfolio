import React from 'react';
import SocialIcons from '../components/SocialIcons'; // ou o caminho certo
import '../styles/MobileNotice.css';

const MobileNotice = () => {
  return (
    <div className="mobile-notice">
      <div className="mobile-content">
        <h1>🚧 Em construção</h1>
        <p>Por enquanto, o portfólio está disponível apenas na versão desktop.</p>
        <p>Estou trabalhando para lançar a versão mobile em breve.</p>

        <div className="social-icons-wrapper-mobile">
          <SocialIcons />
        </div>

        <div className="wave-container-mobile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="0.4" d="M0,192L80,165.3C160,139,320,85,480,80C640,75,800,117,960,154.7C1120,192,1280,224,1360,240L1440,256V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0V192Z" />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default MobileNotice;
