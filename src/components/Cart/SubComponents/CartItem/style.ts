import styled from "styled-components";

export const Item = styled.article<{color: string}>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  & button {
    height: 50px;
    font-size: 20px;
    border: none;
    background-color: transparent;
    padding: 0;
    margin-right: 5px;
    cursor: pointer;
    color: #888888;
  }

  & li {
    margin: 10px;
    border-left: 4px solid ${props => props.color};
    border-radius: 4px;
    list-style: none;
    padding: 8px;
  }

  & li h4 {
    color: #868686;
    margin-bottom: 3px;
  }

  & li strong {
    text-transform: initial;
    font-size: 15px;
    color: ${props => props.color};
  }

  & li span {
    margin-left: 5px;
    font-size: 15px;
    font-style: normal;
  }
`;