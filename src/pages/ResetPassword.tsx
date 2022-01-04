import { AuthContent, AuthContainer, Hero } from "@components/index";
import { initialUser } from "@src/context";
import api from "@src/services/api";
import { IRequestInfo, User } from "@src/store/interfaces";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components";

interface IResetPassword {
  email: string;
  password: string;
  confirmPassword: string;
}

const initialRequestInfo: IRequestInfo<User, string> = {
  loading: false,
  data: initialUser,
  error: '',
  success: false
}

const initialEnteredInfo: IResetPassword = {
  email: '',
  password: '',
  confirmPassword: ''
}

const Error = styled.span`
  margin-top: 8px;
  font-size: 13px;
  color: red;
`

const Login: React.FC = () => {
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<User, string>>(initialRequestInfo)
  const [resetInfo, setResetInfo] = useState(initialEnteredInfo)
  const navigate = useNavigate()

  const resetPasswordHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!requestInfo.success) {
      setRequestInfo(prevInfo => { return {...prevInfo, loading: true} })
      return
    }

    if (resetInfo.password === resetInfo.confirmPassword) {
      setRequestInfo(prevInfo => { return {...prevInfo, loading: true, error: ''} })
      return
    }

    setRequestInfo(prevInfo => { return {...prevInfo, error: "Passwords don't match"} })
  }
  

  useEffect(() => {
    if (!requestInfo.success && requestInfo.loading) {
      setRequestInfo(prevInfo => { return {...prevInfo, loading: false} })
      
      api.post<User>('/reset', { email: resetInfo.email })
        .then(response => setRequestInfo(prevInfo => { return {...prevInfo, data: response.data, success: true, error: ''} }))
        .catch(error => setRequestInfo(prevInfo => { return {...prevInfo, error: 'Invalid Email'} }))

      return
    }

    if (requestInfo.success && requestInfo.loading) {
      setRequestInfo(initialRequestInfo)
      
      api.post<User>(`/reset/${requestInfo.data.token}`, { password: resetInfo.password })
        .then(response => {
          setRequestInfo(prevInfo => { return {...prevInfo, data: response.data, success: true, error: ''} })
          navigate('/login')
        })
        .catch (error => setRequestInfo(prevInfo => { return {...prevInfo, error: 'Password reset error'} }))
    }
  }, [requestInfo])

  if (requestInfo.success) {
    return (
      <AuthContainer>
        <Hero />

        <AuthContent isError={requestInfo.error ? true : false}>
          <h2>Reset password</h2>
          
          <form onSubmit={resetPasswordHandler}>
            <input type="password" id="userPassword" placeholder="New Password" value={resetInfo.password} onChange={(e) => setResetInfo(prevResetInfo => { return {...prevResetInfo, password: e.target.value} })} required />
            <input type="password" id="userConfirmPassword" placeholder="Confirm Password" value={resetInfo.confirmPassword} onChange={(e) => setResetInfo(prevResetInfo => { return {...prevResetInfo, confirmPassword: e.target.value} })} required />
            { requestInfo.error && <Error>{requestInfo.error}</Error> }

            <button>
              Confirm <i className="bi bi-arrow-right"></i>
            </button>
          </form>
          
          <h2>
            <Link to="/login" style={{textDecoration: 'none', color: '#707070'}}> <i className="bi bi-arrow-left" /> Back </Link>
          </h2>
        </AuthContent>
      </AuthContainer>
    )
  }

  return (
    <AuthContainer>
      <Hero />

      <AuthContent>
        <h2>Reset password</h2>
        
        <form onSubmit={resetPasswordHandler}>
          <input type="email" id="userEmail" placeholder="Email" value={resetInfo.email} onChange={(e) => setResetInfo(prevResetInfo => { return {...prevResetInfo, email: e.target.value} })} required />
          { requestInfo.error && <Error>{requestInfo.error}</Error> }

          <button>
            Send link <i className="bi bi-arrow-right"></i>
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
