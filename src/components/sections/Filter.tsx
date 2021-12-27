import styled from "styled-components";
import { TypeButtonList } from "@components/index";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;

  & p {
    color: #868686;
    margin-right: 5px;
  }

  @media (min-width: 820px) {
    
  }
`

const Filter: React.FC = () => {
  return (
    <Container>
      <p>Filters</p>
      <TypeButtonList />
    </Container>
  );
};

export default Filter;