// Importa los estilos CSS
import "./App.css";

function App() {
  return (
    <article>
      <header>
        <img src=".\src\assets\react.svg" alt="icono de noseque de Twitter" />
        <div>
          <strong>Papito Perez</strong>
          <span>@PepitoPe</span>
        </div>
      </header>

      <aside>
        <button className="btn-30">
          <span className="text-container">
            <span className="text">Seguir</span>
          </span>
        </button>
      </aside>
    </article>
  );
}

// Exporta el componente App como el componente predeterminado
export default App;
