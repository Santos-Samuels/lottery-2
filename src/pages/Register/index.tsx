import { AuthContent, AuthContainer, Hero, InputError, ErrorMessage } from "@components/index";
import api from "@src/shared/services/api";
import { IRequestInfo } from "@src/shared/interfaces";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const initialRequestInfo: IRequestInfo<any, string> = {
  loading: false,
  data: null,
  error: '',
  success: false
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<any, string>>(initialRequestInfo)
  const enteredName = useRef<HTMLInputElement>(null)
  const enteredEmail = useRef<HTMLInputElement>(null)
  const enteredPassword = useRef<HTMLInputElement>(null)

  const registerUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setRequestInfo(prevInfo => { return {...prevInfo, loading: true, error: ''} })
  }

  useEffect(() => {
    if (requestInfo.loading) {
      setRequestInfo(initialRequestInfo)
      const newUser = {name: enteredName.current?.value, email: enteredEmail.current?.value, password: enteredPassword.current?.value}
      
      api.post('/user/create', newUser)
        .then(response => {
          console.log(response.data)
          navigate('/login')
        })
        .catch(error => setRequestInfo(prevInfo => { return { ...prevInfo, error: 'This user already exists' } }))
    }
  }, [requestInfo])
  
  return (
    <AuthContainer>
      <Hero />

      <AuthContent>
        <h2>Registration</h2>
        
        <form onSubmit={registerUserHandler}>
          <InputError isError={requestInfo.error ? true : false} type="text" id="userName" placeholder="Name" ref={enteredName} required />
          <InputError isError={requestInfo.error ? true : false} type="email" id="userEmail" placeholder="Email" ref={enteredEmail} required />
          <InputError isError={requestInfo.error ? true : false} type="password" id="userPassword" placeholder="Password" ref={enteredPassword} required />
          {requestInfo.error && <ErrorMessage>{requestInfo.error}</ErrorMessage>}

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
