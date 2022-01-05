import { AppContainer, Loading } from "@src/components";
import { initialUser } from "@src/context";
import api from "@src/services/api";
import { IRequestInfo, User } from "@src/store/interfaces";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const initialRequestInfo: IRequestInfo<User, boolean> = {
  loading: true,
  data: initialUser,
  error: false,
  success: false
}

const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #DDDDDD;
  margin: 20px 0;
  padding-bottom: 5px;
  font-size: 18px;
`

const Content = styled.div`
  margin: 50px auto;
  width: auto;
  border: 1px solid #DDDDDD;
  border-radius: 10px;
  padding: 20px;
  background-color: #FFFFFF;
  box-shadow: 0px 3px 25px #00000014;

  @media (min-width: 950px) {
    width: 50%;
  }
`

const Account: React.FC = () => {
  const TOKEN = localStorage.getItem('TOKEN') === 'undefined' ? null : localStorage.getItem('TOKEN')
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<User, boolean>>(initialRequestInfo)
  
  useEffect(() => {
    if (requestInfo.loading) {
      api.get<User>('/user/my-account').then(response => {
        setRequestInfo(prevInfo => {return { ...prevInfo, loading: false, data: response.data }})
      })
    }
  }, [])

  if (!TOKEN) return <Navigate replace to="/login" />;

  if (requestInfo.loading) return <Loading />

  return (
    <AppContainer>
      <Content>
        <Article><p>Name</p> <p>{requestInfo.data.name}</p></Article>
        <Article><p>Email</p> <p>{requestInfo.data.email}</p></Article>
        <Article><p>Desde</p> <p>{new Date(requestInfo.data.created_at).toLocaleDateString()}</p></Article>
      </Content>
    </AppContainer>
  );
};

export default Account;