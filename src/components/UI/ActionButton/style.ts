import styled from "styled-components";

export const Button = styled.button<{active: boolean}>`
  background-color: ${props => props.active ? '#27C383' : '#F7F7F7'};
  color: ${props => props.active ? '#F7F7F7' : '#27C383'};;
  border: 1px solid #27C383;
  padding: 0 20px;
  height: 45px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s;
  cursor: pointer;
  
  &:hover {
    background-color:${props => props.active ? '#169e65' : '#27C383'};
    color: #F7F7F7;
  }

  & i {
    margin-right: 10px;
  }
`