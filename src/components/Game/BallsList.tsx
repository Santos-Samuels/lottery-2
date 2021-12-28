import { Ball } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BallsList: React.FC = () => {
  const {currentGameRole} = useApp()
  var balls = [];

  for (let i = 1; i <= currentGameRole.range; i++) {
    balls.push(<Ball key={i} number={i} />);
  }

  return <Container>{balls.map((ball) => ball)}</Container>;
};

export default BallsList;
