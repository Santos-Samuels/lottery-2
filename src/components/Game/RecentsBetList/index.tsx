import { RecentBetItem }  from "@components/index"
import { useApp } from "@src/hooks/useapp";
import { IBet, IRequestInfo, User } from "@src/shared/interfaces";
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
  const {recentsBet, addRecentsBet, currentGameRole, getRole, filters} = useApp()
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<IBet[], boolean>>(initialRequestInfo)
  const [totalItems, setTotalItems] = useState(recentsBet.length)

  const fetchRecentsGame = async () => {
    let formattedFilter = await formatFiltersToAPI(filters)
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

  if (recentsBet.length === 0 && !recentsBet.some(recentBet => getRole(recentBet.game_id).type === currentGameRole.type)) return <InfoText>No recent {currentGameRole.type} game found.</InfoText>

  return (
    <>
    <p>Total items: {totalItems}</p>
      { recentsBet.map(recentBet => <RecentBetItem key={recentBet.id} recentBet={recentBet} />) }
    </>
  );
};

export default RecentBetList;
