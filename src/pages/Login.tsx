import { AuthContent, AuthContainer, Hero } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import api from "@src/services/api";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

const Login: React.FC = () => {
  const {isLogged, logIn, lotteryRoles} = useApp()
  console.log(lotteryRoles);
  
  // const user = { email: 'ari2@luby.com.br', password: 'secret' }
  // useEffect(() => {
  //   api.post('/login', user).then(response => console.log(response.data)).catch(error => { console.log(error);
  //    })
  // }, [])

  if (isLogged) return <Navigate replace to="/" />;

  return (
    <AuthContainer>
      <Hero />
      
      <AuthContent>
        <h2>Authentication</h2>
        
        <form>
          <input type="email" id="userEmail" placeholder="Email" />
          <input type="password" id="userPassword" autoComplete="on" placeholder="Password" />

          <Link
            to="/reset-password"
            style={{
              textDecoration: "none",
              color: "#C1C1C1",
              textAlign: "end",
              padding: "20px",
            }}
          >
            I forget my password
          </Link>

          <button onClick={logIn}>
            Log In <i className="bi bi-arrow-right"></i>
          </button>
        </form>

        <h2>
          <Link to="/register" style={{textDecoration: 'none', color: '#707070'}}> Register <i className="bi bi-arrow-right" /> </Link>
        </h2>
      </AuthContent>
    </AuthContainer>
  );
};

export default Login;
