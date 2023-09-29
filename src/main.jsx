import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot en lugar de ReactDOM
import "./app.css"; // Importar el archivo CSS global
import App from "./App";

const root = document.getElementById("root");

const reactRoot = createRoot(root); // Crea el root de React

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
