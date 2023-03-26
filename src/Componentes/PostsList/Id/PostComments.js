import { useEffect, useState } from "react";
import Api from "../../../Api";
import {PostCommentStyled} from './../../../styles/PostCommentStyled'


export default function Comments({postId}) {

  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const resposta = await Api.get(`/posts/${postId}/comments`);
    const data = resposta.data;
    setComments(data);
  };

  useEffect(() => {
    getComments();
  }, []);

  
  return (
    <div>
      <PostCommentStyled>
        <h2>Comentários :</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <strong>Nome: {comment.name}</strong>
          <p>{comment.body}</p>
          <p>Email: {comment.email}</p>
        </div>
      ))}
      </PostCommentStyled>
      
      
    </div>
  );
}
