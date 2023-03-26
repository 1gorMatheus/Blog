import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme.headerBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  justify-content: space-between;

  h1 {
    font-size: 2.5rem;
  }
  a {
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
    h2{
      font-size: 2rem;
    }
  }
`;
