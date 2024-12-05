// Importa los estilos CSS
import "./App.css";
import { TwitterFollowCard } from "./TwitterCardComponent";

function App() {
  return (
    <>
      <TwitterFollowCard
        userName="midudev"
        user="Pepito DURAN"
        isFollowed={false}
      />
      <TwitterFollowCard
        userName="midudev"
        user="Pepito DURAN"
        isFollowed={false}
      />
      <TwitterFollowCard
        userName="midudev"
        user="Pepito DURAN"
        isFollowed={false}
      />
      <TwitterFollowCard
        userName="midudev"
        user="Pepito DURAN"
        isFollowed={false}
      />
    </>
  );
}

// Exporta el componente App como el componente predeterminado
export default App;
