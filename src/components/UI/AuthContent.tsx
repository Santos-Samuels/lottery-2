import styled from "styled-components"

const Container = styled.form`
  background-color: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 1rem;
  box-shadow: 0px 3px 25px #00000014;

  display: flex;
  flex-direction: column;
  margin: 1.5rem;

  & input {
    color: #9D9D9D;
    font-weight: 600;
    font-style: italic;
    padding: 1.3rem;
    border: none;
    border-bottom: 1px solid #DDDDDD;
    background-color: transparent;
  }

  & button {
    background-color: transparent;
    border: none;
    padding: 1.8rem;
    color: #B5C401;
    font-weight: 600;
    font-size: 1.5rem;
    transition: all 0.3s;
  }

  & button:hover {
    background-color: #DDDDDD;
    border-radius: 0 0 1rem 1rem;
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