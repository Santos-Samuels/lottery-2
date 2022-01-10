import { Loading } from "@src/components";
import { useApp } from "@src/hooks/useapp";
import { ILotteryRoles, IRequestInfo } from "@src/shared/interfaces";
import { ListGames } from "@src/shared/services";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const initialRequestInfo: IRequestInfo<any, boolean> = {
  loading: true,
  data: null,
  error: false,
  success: false
}

const PrivateRoute: React.FC = () => {
  const {setLotteryRoles, updateCurrentTypeGame} = useApp()
  const TOKEN = localStorage.getItem('TOKEN') === 'undefined' ? null : localStorage.getItem('TOKEN')
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<any, boolean>>(initialRequestInfo)

  const fetchLotteryRoles = async () => {
    const response = await ListGames()

    if (response) {
      const data = response as ILotteryRoles
      setLotteryRoles(data)
      updateCurrentTypeGame(data.types[0].id)
      setRequestInfo(prevInfo => { return { ...prevInfo, loading: false } })
    }
  }

  useEffect(() => {
    if (requestInfo.loading)
      fetchLotteryRoles()

  }, [])

  if (!TOKEN) return <Navigate replace to="/login" />;

  if (requestInfo.loading) return <Loading />

  return <Outlet />
};

export default PrivateRoute;