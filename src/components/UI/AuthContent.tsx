import styled from "styled-components";

const Container = styled.form`
  text-align: center;

  & form {
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 1rem;
    box-shadow: 0px 3px 25px #00000014;

    display: flex;
    flex-direction: column;
    width: 360px;
    margin: 25px auto;
  }

  & input {
    color: #9D9D9D;
    opacity: 0.8;
    font-weight: 600;
    font-style: italic;
    padding: 1.3rem;
    border: none;
    border-bottom: 1px solid #dddddd;
    background-color: transparent;
  }

  & button {
    background-color: transparent;
    border: none;
    padding: 1.8rem;
    color: #b5c401;
    font-weight: 600;
    font-size: 1.5rem;
    transition: all 0.3s;
  }

  & button:hover {
    background-color: #dddddd;
    border-radius: 0 0 1rem 1rem;
  }
`;


const AuthContainer: React.FC = (props) => {

  return (
      <Container>{props.children}</Container>
  );
};

export default AuthContainer;
