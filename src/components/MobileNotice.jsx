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

      </div>
    </div>
  );
};

export default MobileNotice;
