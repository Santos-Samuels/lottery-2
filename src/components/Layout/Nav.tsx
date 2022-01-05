import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from "@src/hooks/useapp";

const Header = styled.header`
  padding: 10px 30px 2px;
  border-bottom: 1px solid #EBEBEB;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 820px) {
    padding: 10px 90px 2px;
  }
`

const Logo = styled.div`
  width: 75px;
  text-align: center;
  position: relative;

  & span::before {
    content: ".";
    color: transparent;
  }

  & span {
    width: 75px;
    height: 2px;
    left: 0;
    position: absolute;
    border-bottom: 5px solid #B5C401;
    border-radius: 20px;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  & h4 {
    margin-left: 20px;
  }
`

const NavBar: React.FC = () => {
  const {logOut} = useApp()
  const navigate = useNavigate()

  const logoutHandler = () => {
    logOut()
    navigate('/login')
  }

  return (
    <Header>
      <Logo>
        <h1>TGL</h1>
        <span></span>
      </Logo>

      <Nav>
        <h4><Link to="/" style={{textDecoration: 'none', color: '#707070'}}>Home</Link></h4>
        <h4><Link to="/account" style={{textDecoration: 'none', color: '#707070'}}>Account</Link></h4>
        <h4 onClick={logoutHandler} style={{textDecoration: 'none', color: '#707070', cursor: 'pointer'}}>Log Out <i className="bi bi-arrow-right"/></h4>
      </Nav>
    </Header>
  );
};

export default NavBar;