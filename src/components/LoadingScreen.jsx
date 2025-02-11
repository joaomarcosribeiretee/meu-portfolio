import React, { useEffect, useState } from "react";
import "../styles/LoadingScreen.css";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFadingOut(true); // Inicia o fade-out
          setTimeout(onLoadingComplete, 400); // Aguarda o fade-out antes de finalizar
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Velocidade do preenchimento

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${isFadingOut ? "fade-out" : ""}`}>
      <div className="circle" style={{ "--progress": `${progress}%` }}>
        <img
          src="/icons/foto.png" // Substitua pelo caminho da sua foto
          alt="Foto do Usuário"
          className="profile-photo"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
