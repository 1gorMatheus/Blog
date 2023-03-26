import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PostComments from "./PostComments";
import Api from "../../../Api";
import Header from "./../../Header/index";
import { PostIdStyled } from "./../../../styles/PostIdStyled";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  const getPost = async () => {
    const resposta = await Api.get(`/posts/${id}/`);
    const data = resposta.data;
    setPosts(data);
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <Header />
      <PostIdStyled>
        <h1>{posts.title}</h1>
        <p>{posts.body}</p>
      </PostIdStyled>

      <PostComments postId={id} />
    </div>
  );
}
