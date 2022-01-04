import styled from "styled-components";

const Container = styled.div<{isError: boolean}>`
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
    border-bottom: ${props => props.isError ? '3px solid red' : '1px solid #dddddd'};
    background-color: transparent;
  }

  & input:focus {
    outline: none;
    border-bottom: ${props => props.isError ? '3px solid red' : '3px solid #b5c401'};;
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


const AuthContainer: React.FC<{isError?: boolean}> = (props) => {

  return (
      <Container isError={!props.isError ? false : props.isError}>{props.children}</Container>
  );
};

export default AuthContainer;
