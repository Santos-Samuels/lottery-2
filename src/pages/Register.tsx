import { AuthContent, AuthContainer, Hero } from "@components/index";
import { Link } from "react-router-dom"

const Login: React.FC = () => {
  return (
    <AuthContainer>
      <Hero />

      <AuthContent>
        <h2>Registration</h2>
        
        <form>
          <input type="text" id="userName" placeholder="Name" />
          <input type="email" id="userEmail" placeholder="Email" />
          <input type="password" id="userPassword" placeholder="Password" />

          <button>
            Register <i className="bi bi-arrow-right"></i>
          </button>
        </form>
        
        <h2>
          <Link to="/login" style={{textDecoration: 'none', color: '#707070'}}> <i className="bi bi-arrow-left" /> Back </Link>
        </h2>
      </AuthContent>
    </AuthContainer>
  );
};

export default Login;
