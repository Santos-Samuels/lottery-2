import { AuthContent, AuthContainer, Hero, ErrorMessage, InputError } from "@components/index";
import { initialUser } from "@src/context";
import api from "@src/services/api";
import { IRequestInfo, User } from "@src/store/interfaces";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

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

const Login: React.FC = () => {
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<User, string>>(initialRequestInfo)
  const enteredEmail = useRef<HTMLInputElement>(null)
  const enteredPassword = useRef<HTMLInputElement>(null)
  const enteredConfirmPassword = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const resetPasswordHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!requestInfo.success) {
      setRequestInfo(prevInfo => { return {...prevInfo, loading: true} })
      return
    }

    if (enteredPassword.current?.value === enteredConfirmPassword.current?.value) {
      setRequestInfo(prevInfo => { return {...prevInfo, loading: true, error: ''} })
      return
    }

    setRequestInfo(prevInfo => { return {...prevInfo, error: "Passwords don't match"} })
  }
  

  useEffect(() => {
    if (!requestInfo.success && requestInfo.loading) {
      setRequestInfo(prevInfo => { return {...prevInfo, loading: false} })
      
      api.post<User>('/reset', { email: enteredEmail.current?.value })
        .then(response => setRequestInfo(prevInfo => { return {...prevInfo, data: response.data, success: true, error: ''} }))
        .catch(error => setRequestInfo(prevInfo => { return {...prevInfo, error: 'Invalid Email'} }))

      return
    }

    if (requestInfo.success && requestInfo.loading) {
      setRequestInfo(initialRequestInfo)
      
      api.post<User>(`/reset/${requestInfo.data.token}`, { password: enteredPassword.current?.value })
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
            { requestInfo.error && enteredConfirmPassword.current?.focus() }
            <InputError isError={requestInfo.error ? true : false} type="password" id="userPassword" placeholder="New Password" ref={enteredPassword} required />
            <InputError isError={requestInfo.error ? true : false} type="password" id="userConfirmPassword" placeholder="Confirm Password" ref={enteredConfirmPassword} required />
            { requestInfo.error && <ErrorMessage>{requestInfo.error}</ErrorMessage> }

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
        
        <form onSubmit={resetPasswordHandler} >
          <InputError isError={requestInfo.error ? true : false} type="email" id="userEmail" placeholder="Email" ref={enteredEmail} required />
          { requestInfo.error && enteredEmail.current?.focus() }
          { requestInfo.error && <ErrorMessage>{requestInfo.error}</ErrorMessage> }

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
