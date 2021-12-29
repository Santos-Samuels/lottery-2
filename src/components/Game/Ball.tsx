import { useApp } from "@src/hooks/useapp";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button<{color: string, active: boolean}>`
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

interface IProps {
  number: number
}

const Ball: React.FC<IProps> = (props) => {
  const [isActive, setIsActive] = useState(false)
  const {currentGameRole, currentBet, addBetNumber, removeBetNumber} = useApp()

  const onClickHandler = () => {
    if (currentBet.length < currentGameRole.max_number && !isActive) {
      addBetNumber(props.number)
      return
    }
    
    setIsActive(false)
    removeBetNumber(props.number);
  }

  useEffect(() => {
    if (currentBet.length === 0) {
      setIsActive(false)
      return
    }

    if (currentBet.includes(props.number)) {
      setIsActive(true)
    }
  }, [currentBet])

  return (
    <Button value={props.number} active={isActive} color={currentGameRole.color} onClick={onClickHandler}>
      <h2>{props.number.toString().padStart(2, "0")}</h2>
    </Button>
  );
};

export default Ball;