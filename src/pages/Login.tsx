import { AuthContent, AuthContainer, Hero } from "@components/index";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <AuthContainer>
      <Hero />
      
      <AuthContent>
        <h2>Authentication</h2>
        
        <form>
          <input type="email" id="userEmail" placeholder="Email" />
          <input type="password" id="userPassword" placeholder="Password" />

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

          <button>
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
