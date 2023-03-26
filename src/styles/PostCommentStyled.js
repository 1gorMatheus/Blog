import styled from "styled-components";

export const PostCommentStyled = styled.article`
div{
    background: ${(props) => props.theme.postBackgroundColor};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 16px 24px;
  margin-top: 8px;
}
  h2{
    margin-left:24px;
  }
  @media (max-width: 768px) {
      h2 {
        font-size: 1rem;
      }
    }
`;
