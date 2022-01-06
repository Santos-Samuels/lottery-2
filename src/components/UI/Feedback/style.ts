import styled from "styled-components";

export const Article = styled.article<{color: string}>`
  background-color: ${props => props.color};
  border-radius: 5px;
  padding: 15px;
  position: fixed;
  bottom: 40px;
  right: 30px;
  color: #FFFFFF;
  font-style: normal;

  & span {
    margin-left: 10px;
  }
`