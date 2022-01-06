import { Container } from "./style";

const AuthContent: React.FC<{isError?: boolean}> = (props) => {

  return (
      <Container isError={!props.isError ? false : props.isError}>{props.children}</Container>
  );
};

export default AuthContent;
