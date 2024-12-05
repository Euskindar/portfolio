// Importa los estilos CSS
import "./App.css";
import { TwitterFollowCard } from "./TwitterCardComponent";

function App() {
  return (
    <>
      <TwitterFollowCard
        userName="midudev"
        user="MIGE ANGEL UWU"
        isFollowed={false}
      />
      <TwitterFollowCard
        userName="pheralb"
        user="PABLITO COMUINICA"
        isFollowed={false}
      />
      <TwitterFollowCard
        userName="elonmusk"
        user="EL RICACHUELO DEL PUEBLO"
        isFollowed={false}
      />
      <TwitterFollowCard
        userName="vxnder"
        user="VAnder de Arcane"
        isFollowed={false}
      />
    </>
  );
}

// Exporta el componente App como el componente predeterminado
export default App;
