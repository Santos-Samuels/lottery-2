import { AuthContent, AuthContainer, Hero } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import api from "@src/services/api";
import { ILoginInfo, IRequestInfo, Token, User } from "@src/store/interfaces";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import styled from "styled-components";

const initialRequestInfo: IRequestInfo<any, boolean> = {
  loading: false,
  data: null,
  error: false,
  success: false
}

const Error = styled.span`
  margin-top: 8px;
  font-size: 13px;
  color: red;
`

const Login: React.FC = () => {
  const {logIn} = useApp()
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<any, any>>(initialRequestInfo)
  const [enteredLoginInfo, setEnteredLoginInfo] = useState<ILoginInfo>({ email: '', password: '' })
  const { register, handleSubmit, formState: { errors }} = useForm<ILoginInfo>()
  const navigate = useNavigate()
  
  const loginHandler = (data: ILoginInfo) => {
    console.log(data);
    setEnteredLoginInfo({email: data.email, password: data.password})
    
    setRequestInfo(prevInfo => { return { ...prevInfo, loading: true } })
  }

  const errorMessage = () => {
    if (errors.email && errors.password) return "Invalid email and password"

    if (errors.email) return "Invalid email"

    if (errors.password) return "Invalid password"

    if (requestInfo.error) return "Incorret email or password"

    return
  }

  useEffect(() => {
    if (requestInfo.loading) {
      setRequestInfo(prevInfo => { return { ...prevInfo, loading: false } })

      try {
        api.post<{user: User, token: Token}>('/login', enteredLoginInfo).then(response => {
          logIn(response.data.token, response.data.user)
          setEnteredLoginInfo({email: '', password: ''})
          navigate('/')
        })
      }
      catch(error) {
        setRequestInfo(prevInfo => { return { ...prevInfo, error: true } })
      }
    }
  }, [requestInfo])


  return (
    <AuthContainer>
      <Hero />
      
      <AuthContent>
        <h2>Authentication</h2>
        
        <form onSubmit={handleSubmit(loginHandler)}>
          <input type="email" id="userEmail" placeholder="Email" { ...register("email", { required: true }) } />
          <input type="password" id="userPassword" autoComplete="on" placeholder="Password" { ...register("password", { required: true }) } />

          <Error>{ errorMessage() }</Error>

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

