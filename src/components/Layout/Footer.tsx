import styled from "styled-components";

const Div = styled.footer`
  font-size: 13px;
  text-align: center;
  
  width: 100%;
  padding: 25px 0;
  border-top: 2px solid #EBEBEB;
`

const Footer: React.FC = () => {
  return (
    <Div>
      <p>Copyright 2020 Luby Software</p>
    </Div>
  );
};

export default Footer;