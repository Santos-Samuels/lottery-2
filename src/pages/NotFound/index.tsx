import { useNavigate } from "react-router-dom";
import { Container } from "./styled";

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <h1>404</h1>
      <p>Not found page</p>

      <button onClick={() => navigate('/')}>Go Home</button>
    </Container>
  );
};

export default NotFound;