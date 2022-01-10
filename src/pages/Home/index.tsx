import { RecentBetList, AppContainer, HeaderRecentGame, Loading } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import { ILotteryRoles, IRequestInfo } from "@src/shared/interfaces";
import { useEffect, useState } from "react";
import { ListGames } from "@src/shared/services";

const initialRequestInfo: IRequestInfo<any, boolean> = {
  loading: true,
  data: null,
  error: false,
  success: false
}

const Home: React.FC = () => {
  const {setLotteryRoles, updateFilters} = useApp()
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<any, boolean>>(initialRequestInfo)

  const fetchLotteryRoles = async () => {
    const response = await ListGames()

    if (response)
      setLotteryRoles(response as ILotteryRoles)
  }

  useEffect(() => {
    updateFilters('', 0)

    if (requestInfo.loading) {
      setRequestInfo(prevInfo => { return { ...prevInfo, loading: false } })
      fetchLotteryRoles()
    }
  }, [])

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
