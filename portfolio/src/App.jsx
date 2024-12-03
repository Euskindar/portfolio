// Importa el hook useState de React
import { useState } from "react";
// Importa el logo de React
import reactLogo from "./assets/react.svg";
// Importa el logo de Vite
import viteLogo from "/vite.svg";
// Importa los estilos CSS
import "./App.css";

function App() {
  // Declara una variable de estado 'count' y su función actualizadora 'setCount' con un valor inicial de 0
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          {" "}
          {/* Enlace a la página de Vite */}
          <img src={viteLogo} className="logo" alt="Vite logo" />{" "}
          {/* Imagen del logo de Vite */}
        </a>
        <a href="https://react.dev" target="_blank">
          {" "}
          {/* Enlace a la página de React */}
          <img src={reactLogo} className="logo react" alt="React logo" />{" "}
          {/* Imagen del logo de React */}
        </a>
      </div>
      <h1>Vite + React</h1> {/* Título de la aplicación */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {" "}
          {/* Botón que incrementa 'count' al hacer clic */}
          count is {count} {/* Muestra el valor actual de 'count' */}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR{" "}
          {/* Indicación para editar y guardar el archivo para probar el Hot Module Replacement (HMR) */}
        </p>
      </div>
      s
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more{" "}
        {/* Texto que sugiere hacer clic en los logos para aprender más */}
      </p>
    </>
  );
}

// Exporta el componente App como el componente predeterminado
export default App;
