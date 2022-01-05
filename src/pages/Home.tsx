import { RecentBetList, AppContainer, HeaderRecentGame, Loading } from "@components/index";
import { initialGameRole } from "@src/context";
import { useApp } from "@src/hooks/useapp";
import api from "@src/services/api";
import { ILotteryRoles, IRequestInfo } from "@src/store/interfaces";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const initialRequestInfo: IRequestInfo<any, boolean> = {
  loading: true,
  data: null,
  error: false,
  success: false
}

const Home: React.FC = () => {
  const {setLotteryRoles, updateCurrentTypeGame} = useApp()
  const TOKEN = localStorage.getItem('TOKEN') === 'undefined' ? null : localStorage.getItem('TOKEN')
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<any, boolean>>(initialRequestInfo)

  useEffect(() => {
    updateCurrentTypeGame(initialGameRole, false)

    if (requestInfo.loading) {
      api.get<ILotteryRoles>('/cart_games').then(response => {
        setRequestInfo(prevInfo => {return { ...prevInfo, loading: false }})
        setLotteryRoles(response.data)
      })
    }
  }, [])

  if (!TOKEN) return <Navigate replace to="/login" />;

  if (requestInfo.loading) return <Loading />

  return (
    <AppContainer>
      <div>
        <HeaderRecentGame />
        <RecentBetList />
      </div>
    </AppContainer>
  );
};

export default Home;
