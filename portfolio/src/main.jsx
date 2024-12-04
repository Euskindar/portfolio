// Importamos StrictMode
import { StrictMode } from "react";

// Importamos la creacion de ROOT
import { createRoot } from "react-dom/client";

// Importar los estilos CSS
import "./index.css";

// Importar el componente APP
import App from "./App.jsx";

// Creamos el elemento y lo renderizamos
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
