import styled from "styled-components";

export const Button = styled.button<{color: string, active: boolean}>`
  margin-right: 20px;
  background-color: ${props => props.active ? props.color : '#FFFFFF'};;
  color: ${props => props.active ? '#FFFFFF' : props.color};
  border: 2px solid ${props => props.color};
  border-radius: 25px;
  padding: 6px 15px;
  font-weight: 600;
  font-style: italic;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.color};
    color: #FFFFFF;
  }
`