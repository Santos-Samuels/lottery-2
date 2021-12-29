import { Ball } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import { Fragment, ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BallsList: React.FC = () => {
  const {currentGameRole} = useApp()
  const [ballsNumber, setBallsNumber] = useState<number[]>([])

  useEffect(() => {
    let numbers: number[] = []

    for (let i = 1; i <= currentGameRole.range; i++) {
      numbers.push(i)
  
      if (i === currentGameRole.range)
        setBallsNumber(numbers)
    }
    
  }, [currentGameRole])

  return <Container>{ballsNumber.map((number) => <Ball key={number} number={number} />)}</Container>;
};

export default BallsList;
