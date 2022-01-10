import { useApp } from "@src/hooks/useapp";
import { useEffect, useState } from "react";
import { Button } from "./style";

const Ball: React.FC<{number: number}> = (props) => {
  const [isActive, setIsActive] = useState(false)
  const {currentGameId, getRoleById, currentBet, addBetNumber, removeBetNumber} = useApp()

  const onClickHandler = () => {
    if (!isActive) {
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
    <Button value={props.number} active={isActive} color={getRoleById(currentGameId).color} onClick={onClickHandler}>
      <h2>{props.number.toString().padStart(2, "0")}</h2>
    </Button>
  );
};

export default Ball;