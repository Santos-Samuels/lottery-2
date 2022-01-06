import styled from "styled-components";

export const Button = styled.button<{color: string, active: boolean}>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? props.color : '#ADC0C4'};
  margin: 15px 15px 0 0;
  text-align: center;
  padding-top: 3px;
  color: #FFFFFF;
  font-style: normal;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: ${props => props.active ? props.color : '#868686'};
  }
`