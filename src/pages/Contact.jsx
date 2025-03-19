import React, { useState } from "react";
import PageTransition from "../components/PageTransition";
import "../styles/Contact.css";


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!"); // Simulação de envio
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <PageTransition>
    <div className="contact-container">
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
      <div className="contact-form">
        <h1 className="contact-title">Contato.</h1>
        <p className="contact-description">
        Entre em contato ou envie-me um e-mail diretamente para {" "}
          <a href="mailto:jmribeirete@hotmail.com">jmribeirete@hotmail.com</a>
        </p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Mensagem" value={formData.message} onChange={handleChange} required />

          <div className="form-buttons">
    <button type="submit" className="submit-btn">Enviar</button>
    <a href="/docs/JoaoMarcos_CV.pdf" download className="download-btn">CURRÍCULO</a>
  </div>
        </form>
      </div>
    </div>
    </PageTransition>
  );
};

export default Contact;
