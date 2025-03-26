import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import PageTransition4 from "../components/PageTransition4";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_60a8f28", // seu service_id
        "template_l75l4vf", // substitua pelo seu template_id
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Z5f16b-UG0q8Kb3pG" // substitua pela sua Public Key (API key)
      )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/docs/JoaoMarcos_CV.pdf`; // Corrigido o caminho
    link.setAttribute("download", "JoaoMarcos_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Confete reforçado
    confetti({
      particleCount: 250,
      spread: 180,
      startVelocity: 50,
      origin: { y: 0.6 },
    });
  };

  return (
    <PageTransition4>
      <div className="contact-container">

        <div className="contact-form">
          <h1 className="contact-title">Contato.</h1>
          <p className="contact-description">
            Entre em contato ou envie-me um e-mail para  {"   "}
            <a href="mailto:jmribeirete@hotmail.com"> jmribeirete@hotmail.com</a>
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <div className="form-buttons">
              <button type="submit" className="submit-btn">Enviar</button>

              <button type="button" className="download-btn" onClick={handleDownload}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9V13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9.9a.5.5 0 0 0-1 0V13H1.5V9.9a.5.5 0 0 0-1 0z" />
                    <path d="M7.646 10.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.293V1.5a.5.5 0 0 0-1 0v7.793L5.354 7.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                  CURRÍCULO
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageTransition4>
  );
};

export default Contact;
