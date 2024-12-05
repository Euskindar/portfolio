// se utiliza para manejar el estado del botón
import { useState } from "react";

import PropTypes from "prop-types";

export function TwitterFollowCard({ userName, user }) {
  // useState para controlar el estado de seguimiento
  const [isFollowed, setIsFollowed] = useState(false);

  // Función para manejar el cambio de estado al pulsar el botón
  const handleFollowClick = () => {
    setIsFollowed(!isFollowed);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="icono de usuario de X"
        />
        <div className="tw-followCard-info">
          <strong>{user}</strong>
          <span className="tw-followCard-infoUser">@{userName}</span>
        </div>
      </header>

      <aside className="tw-asideButton">
        <button className="btn-followAnimado" onClick={handleFollowClick}>
          <span className="text-container">
            <span className="text">{isFollowed ? "No seguir" : "Seguir"}</span>
          </span>
        </button>
      </aside>
    </article>
  );
}

// Validaciones para comprobar que los parametros son pasados y sus tipos
TwitterFollowCard.propTypes = {
  userName: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
