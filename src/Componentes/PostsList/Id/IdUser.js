import Api from "../../../Api";
import Header from "./../../Header/index";
import { IdUserStyled, PostIdUserStyled } from "./../../../styles/IdUserStyled";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Users() {
  const [idusers, setIdusers] = useState([]);
  const [postuser, setPostuser] = useState([]);

  const { id } = useParams();

  const getIdusers = async () => {
    const resposta = await Api.get(`/users/${id}`);
    const data = resposta.data;

    setIdusers(data);

    const postsResposta = await Api.get(`/posts?userId=${id}`);
    const postsData = postsResposta.data;

    setPostuser(postsData);
  };
  useEffect(() => {
    getIdusers();
  }, []);
  return (
    <div>
      <Header />
      <IdUserStyled>
        <ul>
          <li><h1>Nome: <p>{idusers.name}</p></h1></li>
          <li><h1>Username: <p>{idusers.username}</p></h1></li>
          <li><h1>Email: <p>{idusers.email}</p></h1></li>
          <li><h1>Cidade: <p>{idusers.address ? idusers.address.city : ""}</p></h1></li>
          <li><h1>Telefone:<p>{idusers.phone}</p> </h1></li>
          <li><h1>Site: <p>{idusers.website}</p></h1></li>
        </ul>
        <h2>Posts desse usuário:</h2>
      

      {postuser.map((post) => (
        <PostIdUserStyled>
          <h1>{post.title}</h1>
          <small>{post.body}</small>
          <button>
          <Link to={`/posts/${post.id}`}>Ver Mais</Link>
        </button>
        </PostIdUserStyled>
      ))}
      </IdUserStyled>
    </div>
  );
}
