import { Ball } from "@components/index";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BallsList: React.FC = () => {
  var balls = [];

  for (let i = 1; i <= 20; i++) {
    balls.push(<Ball number={i} />);
  }

  return <Container>{balls.map((ball) => ball)}</Container>;
};

export default BallsList;
