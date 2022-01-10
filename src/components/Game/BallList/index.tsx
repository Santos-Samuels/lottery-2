import { Ball } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import { useEffect, useState } from "react";
import { Container } from "./style";


const BallsList: React.FC = () => {
  const {currentGameId, getRoleById} = useApp()
  const [ballsNumber, setBallsNumber] = useState<number[]>([])

  useEffect(() => {
    let numbers: number[] = []

    for (let i = 1; i <= getRoleById(currentGameId).range; i++) {
      numbers.push(i)
  
      if (i === getRoleById(currentGameId).range)
        setBallsNumber(numbers)
    }
    
  }, [currentGameId])

  return <Container>{ballsNumber.map((number) => <Ball key={number} number={number} />)}</Container>;
};

export default BallsList;
