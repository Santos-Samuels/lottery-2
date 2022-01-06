import { AppContainer, Loading } from "@src/components";
import { initialUser } from "@src/context";
import api from "@src/shared/services/api";
import { IRequestInfo, User } from "@src/shared/interfaces";
import { useEffect, useState } from "react";
import { Article, Content } from "./style";

const initialRequestInfo: IRequestInfo<User, boolean> = {
  loading: true,
  data: initialUser,
  error: false,
  success: false
}

const Account: React.FC = () => {
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<User, boolean>>(initialRequestInfo)
  
  useEffect(() => {
    if (requestInfo.loading) {
      api.get<User>('/user/my-account').then(response => {
        setRequestInfo(prevInfo => {return { ...prevInfo, loading: false, data: response.data }})
      })
    }
  }, [])


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