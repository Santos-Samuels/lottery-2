import styled from "styled-components";

export const Container = styled.div`
  font-style: italic;
  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  width: 100%;
`;

export const SaveButton = styled.button`
  font-size: 30px;
  background-color: #f4f4f4;
  color: #27c383;
  font-weight: 600;
  font-style: italic;
  border-top: 1px solid #e2e2e2;
  padding: 20px;
  width: 100%;
  border: none;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #d8d7d7;
  }
`;

export const CartTitle = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  margin: 30px 15px;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & i {
    font-size: 40px;
    cursor: pointer;
  }
`;