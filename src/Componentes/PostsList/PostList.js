import { useEffect, useState } from "react";
import { Container } from "./../../styles/PostListStyled";
import Post from "./Post/Post";
import Header from "./../Header/index";
import Api from "../../Api";

function App() {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    const resposta = await Api.get(`/posts`);
    const data = resposta.data;
    setPosts(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <h3>Últimos Posts :</h3>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            Body={post.body}
            Id={post.id}
            Iduser={post.userId}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
