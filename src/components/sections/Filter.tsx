import styled from "styled-components";
import { TypeButtonList } from "@components/index";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;

  & p {
    color: #868686;
    margin-right: 15px;
  }
`

const Filter: React.FC = () => {
  return (
    <Container>
      <p>Filters</p>
      <TypeButtonList isToggleable={true} />
    </Container>
  );
};

export default Filter;