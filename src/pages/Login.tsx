import AuthContent from "../components/UI/AuthContent"
import AuthContainer from "../components/UI/AuthContainer"
import Hero from "../components/UI/Hero"

const Login: React.FC = () => {
  return <AuthContainer>
    <Hero />
    <AuthContent>
      <input type="email" id="userEmail" placeholder="Email" />
      <input type="password" id="userPassword" placeholder="Password" />

      <button>Log In <i className="bi bi-arrow-right"></i></button>
    </AuthContent>
  </AuthContainer>
}

export default Login