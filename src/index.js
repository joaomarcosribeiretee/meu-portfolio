import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Pegue o elemento com ID "root" no HTML
const rootElement = document.getElementById("root");

// Crie a raiz com React 18
const root = ReactDOM.createRoot(rootElement);

// Renderize o componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
