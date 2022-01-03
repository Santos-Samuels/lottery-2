import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  height: 100vh;

  @media (min-width: 820px) {
    grid-auto-flow: column;
    grid-template-columns: 50% 50%;
  }
`

const AuthContainer: React.FC = (props) => {
  return (
    <Container>
      { props.children }
    </Container>
  )
}

export default AuthContainer