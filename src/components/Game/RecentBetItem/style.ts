import styled from "styled-components";

export const Item = styled.article<{ color: string }>`
  border-left: 5px solid ${(props) => props.color};
  border-radius: 2px;
  padding: 5px 10px;
  margin: 20px 0;

  & h4 {
    font-size: 15px;
    margin-bottom: 8px;
    word-break: break-all;
  }

  & p {
    font-size: 14px;
    margin-bottom: 8px;
  }

  & span {
    color: ${(props) => props.color};
    font-weight: 600;
    font-size: 14px;
  }
`;