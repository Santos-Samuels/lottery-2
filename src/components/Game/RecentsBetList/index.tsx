import { RecentBetItem }  from "@components/index"
import { useApp } from "@src/hooks/useapp";
import { IBet, IRequestInfo } from "@src/shared/interfaces";
import { useEffect, useState } from "react";
import { InfoText } from "./style";
import { ListBets } from "@src/shared/services";
import { formatFiltersToAPI } from "@src/shared/utils/formatFiltersToAPI";

export const initialRequestInfo: IRequestInfo<IBet[], boolean> = {
  loading: true,
  data: [],
  error: false,
  success: false
}

const RecentBetList: React.FC = () => {
  const {recentsBet, addRecentsBet, currentGameId, getRoleById, filters} = useApp()
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<IBet[], boolean>>(initialRequestInfo)
  const [totalItems, setTotalItems] = useState(recentsBet.length)

  const fetchRecentsGame = async () => {
    const filtteredGamesType = filters.map(filter => getRoleById(filter).type)
    let formattedFilter = await formatFiltersToAPI(filtteredGamesType)
    const response = await ListBets(formattedFilter)

    if (response) {
      const data = response as IBet[]
      setRequestInfo(prevInfo => { return { ...prevInfo, loading: false } })
      addRecentsBet(data)
      setTotalItems(data.length)
    }
  }

  useEffect(() => {
    fetchRecentsGame()
  }, [filters])

  if (requestInfo.loading) return <InfoText>Loading...</InfoText>

  if (recentsBet.length === 0) return <InfoText>No recent game found.</InfoText>

  return (
    <>
    <p>Total items: {totalItems}</p>
      { recentsBet.map(recentBet => <RecentBetItem key={recentBet.id} recentBet={recentBet} />) }
    </>
  );
};

export default RecentBetList;
