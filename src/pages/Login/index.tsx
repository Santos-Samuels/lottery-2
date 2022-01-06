import { AuthContent, AuthContainer, Hero, ErrorMessage, InputError } from "@components/index";
import { ILoginInfo, IRequestInfo, Token, User } from "@src/shared/interfaces";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { LoginUser } from "@src/shared/services";
import { useApp } from "@src/hooks/useapp";
import { initialUser } from "@src/context";

const initialRequestInfo: IRequestInfo<{token: Token, user: User}, boolean> = {
  loading: false,
  data: {user: initialUser, token: {expires_at: '', token: '', type: ''}},
  error: false,
  success: false
}

const Login: React.FC = () => {
  const {logIn} = useApp()
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<any, any>>(initialRequestInfo)
  const [enteredLoginInfo, setEnteredLoginInfo] = useState<ILoginInfo>({ email: '', password: '' })
  const { register, handleSubmit, formState: { errors }, setFocus} = useForm<ILoginInfo>()
  const navigate = useNavigate()
  const TOKEN = localStorage.getItem('TOKEN') === 'undefined' ? null : localStorage.getItem('TOKEN')
  
  const loginHandler = (data: ILoginInfo) => {
    setEnteredLoginInfo({email: data.email, password: data.password})
    setRequestInfo(prevInfo => { return { ...prevInfo, loading: true } })
  }

  const errorMessage = () => {
    if (errors.email && errors.password) {
      return "Invalid email and password"
    }

    if (errors.email) {
      setFocus("email")
      return "Invalid email"
    }

    if (errors.password) {
      setFocus("password")
      return "Invalid password"
    }

    if (requestInfo.error) return "Incorret email or password"

    return
  }

  const fetchLogin = async () => {
    const response = await LoginUser(enteredLoginInfo)
    
    if (response) {
      setRequestInfo(prevInfo => { return { ...prevInfo, data: response, success: true } })
      return
    }

    setRequestInfo(prevInfo => { return { ...prevInfo, error: true } })
  }

  useEffect(() => {
    if (requestInfo.loading) {
      setRequestInfo(initialRequestInfo)
      fetchLogin()
    }

    if (requestInfo.success) {
      setRequestInfo(initialRequestInfo)
      setEnteredLoginInfo({email: '', password: ''})
      logIn(requestInfo.data)
      navigate('/')
    }
    
  }, [requestInfo])


  if (TOKEN)
    return <Navigate replace to="/" />

  return (
    <AuthContainer>
      <Hero />
      
      <AuthContent isError={requestInfo.error}>
        <h2>Authentication</h2>
        
        <form onSubmit={handleSubmit(loginHandler)}>
          <InputError isError={errors.email ? true : false} type="email" id="userEmail" placeholder="Email" { ...register("email", { required: true }) } />
          <InputError isError={errors.password ? true : false} type="password" id="userPassword" autoComplete="on" placeholder="Password" { ...register("password", { required: true }) } />

          <ErrorMessage>{ errorMessage() }</ErrorMessage>

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

