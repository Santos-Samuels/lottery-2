import styled from "styled-components"

const Container = styled.form`
  display: grid;
  grid-auto-flow: row;

  align-items: center;
  height: 100vh;
`

const AuthContainer: React.FC = (props) => {
  return (
    <Container>
      { props.children }
    </Container>
  )
}

export default AuthContainer