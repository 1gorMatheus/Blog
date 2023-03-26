import styled from "styled-components";

export const Poststyle = styled.article`
  background: ${(props) => props.theme.postBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;
  margin-top: 8px;
  text-align: center;
  h2 {
    margin: 0 0 8px;
  }

  small {
    opacity: 0.7;
  }

  div {
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
  }
  button {
    width: 20%;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    font-weight: 800;
    a {
      color: ${(props) => props.theme.postBackgroundColor};
      text-decoration: none;
    }
    background: ${(props) => props.theme.textColor};
  }
  @media (max-width: 768px) {
    button {
      width: 36%;
      background-color: white;
      font-weight: 800;
    }
  }
`;
