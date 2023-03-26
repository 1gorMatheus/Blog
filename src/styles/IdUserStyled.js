import styled from "styled-components";

export const IdUserStyled = styled.section`
  ul {
    list-style: none;
  }
  h2 {
    margin-left: 40px;
  }
  h1 {
    background: ${(props) => props.theme.postBackgroundColor};
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 16px;
    border-radius: 10px;
    margin-top: 8px;
    width: 50%;
  }

  /* div {
    background: ${(props) => props.theme.postBackgroundColor};
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 10px;
    margin-top: 8px;
    text-align: center;
    align-items: center;
    h1 {
      width: 98%;
      margin: 0 0 8px;
    }

    small {
      opacity: 0.7;
    }
    button {
      width: 20%;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      border: none;
      font-weight: 800;
      margin-top: 1rem;
      a {
        color: ${(props) => props.theme.postBackgroundColor};
        text-decoration: none;
      }
      background: ${(props) => props.theme.textColor};
    } */
  /* } */
  @media (max-width: 768px) {
    ul {
      padding: 0px;
      li {
        text-align: center;
        h1 {
          display: block;
          width: auto;
        }
      }
    }
    div {
      button {
        width: 36%;
      }
    }
  }
`;
export const PostIdUserStyled = styled.div`
background: ${(props) => props.theme.postBackgroundColor};
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 10px;
    margin-top: 8px;
    text-align: center;
    align-items: center;
    h1 {
      display: block;
      width: 98%;
      margin: 0 0 8px;
      text-align: center;
    }

    small {
      opacity: 0.7;
    }
    button {
      width: 20%;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      border: none;
      font-weight: 800;
      margin-top: 1rem;
      a {
        color: ${(props) => props.theme.postBackgroundColor};
        text-decoration: none;
      }
      background: ${(props) => props.theme.textColor};
    }
`

