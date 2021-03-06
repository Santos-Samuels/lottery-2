import styled from "styled-components"

export const Content = styled.div`
  font-size: 1.5rem;
  text-align: center;
  display: none;

  & h1,
  & h2 {
    margin: auto;
  }

  & h2 {
    width: 13rem;
    word-break: break-word;
  }

  & p {
    font-size: 1.2rem;
    background-color: #B5C401;
    color: #ffff;
    width: 100px;
    padding: 6px 0;
    border-radius: 25px;
    margin: 20px auto;
  }

  @media (min-width: 820px) {
    font-size: 2rem;
    display: block;
  }
`