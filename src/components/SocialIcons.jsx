import React from "react";
import "../styles/SocialIcons.css"; // (ou onde estiver o CSS dos ícones)

const SocialIcons = () => (
  <aside className="social-icons">
    <a href="https://www.instagram.com/joaomarcosribeirete/" target="_blank" rel="noopener noreferrer">
      <img src={`${process.env.PUBLIC_URL}/icons/instagram.svg`} alt="Instagram" />
    </a>
    <a href="https://github.com/joaomarcosribeiretee" target="_blank" rel="noopener noreferrer">
      <img src={`${process.env.PUBLIC_URL}/icons/github.svg`} alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/joaomarcosribeirete/" target="_blank" rel="noopener noreferrer">
      <img src={`${process.env.PUBLIC_URL}/icons/linkedin.svg`} alt="LinkedIn" />
    </a>
  </aside>
);

export default SocialIcons;
