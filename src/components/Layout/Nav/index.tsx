import { Link, useNavigate } from 'react-router-dom'
import { useApp } from "@src/hooks/useapp";
import { Header, Logo, Nav } from './style';

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