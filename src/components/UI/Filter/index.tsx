import { TypeButtonList } from "@components/index";
import { Container } from "./style";

const Filter: React.FC = () => {
  return (
    <Container>
      <p>Filters</p>
      <TypeButtonList isToggleable={true} />
    </Container>
  );
};

export default Filter;