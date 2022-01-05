import styled from "styled-components";
import { Nav, Footer } from "@components/index";

const Container = styled.div`
  & main {
    margin: 20px 30px;
    min-height: calc(100vh - 200px);
  }

  @media (min-width: 1000px) {
    & main {
      margin: 30px 90px;
    }
  }
`

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