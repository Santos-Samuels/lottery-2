import { Nav, Footer } from "@components/index";
import { Container } from "./style";

const AppContainer: React.FC = (props) => {
  return (
    <Container>
      <Nav />

      <main>
        { props.children }
      </main>

      <Footer />
    </Container>
  );
};

export default AppContainer;