import { Container } from "./style"

const AuthContainer: React.FC = (props) => {
  return (
    <Container>
      { props.children }
    </Container>
  )
}

export default AuthContainer