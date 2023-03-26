import React from "react";
import { Link } from "react-router-dom"; //importei minha biblioteca
import { Poststyle } from "./../../../styles/PostStyle";

export default function Post({ title, Body, Id, Iduser }) {
  return (
    <Poststyle>
      
      <h2>{title}</h2>
      <small>{Body}</small>
      <div>
        <button>
          <Link to={`/posts/${Id}`}>Ver Mais</Link>
        </button>
        <button>
          <Link to={`/users/${Iduser}`}>Visualizar Perfil do Usuário</Link>
        </button>
      </div>
    </Poststyle>
  );
}
