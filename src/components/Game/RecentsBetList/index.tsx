import { RecentBetItem }  from "@components/index"
import { useApp } from "@src/hooks/useapp";
import api from "@src/shared/services/api";
import { IBet, IRequestInfo, User } from "@src/shared/interfaces";
import { useEffect, useState } from "react";
import { InfoText } from "./style";

export const initialRequestInfo: IRequestInfo<IBet[], boolean> = {
  loading: true,
  data: [],
  error: false,
  success: false
}

const RecentBetList: React.FC = () => {
  const {recentsBet, addRecentsBet, currentGameRole, getRole} = useApp()
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<IBet[], boolean>>(initialRequestInfo)
  const [totalItems, setTotalItems] = useState(recentsBet.length)

  useEffect(() => {
    try {
      api.get<User>('/user/my-account').then(response => {
        if (response.data.bets) {
          setRequestInfo(prevInfo => { return { ...prevInfo, loading: false } })
          addRecentsBet(response.data.bets)
          setTotalItems(response.data.bets.length)
        }
      })
    } catch (error) {
      setRequestInfo(prevInfo => { return { ...prevInfo, loading: false, error: true } })
    }
  }, [])

  if (requestInfo.loading) return <InfoText>Loading...</InfoText>

  if (recentsBet.length === 0 && !recentsBet.some(recentBet => getRole(recentBet.game_id).type === currentGameRole.type)) return <InfoText>No recent {currentGameRole.type} game found.</InfoText>

  if (currentGameRole.type) {
    let count = 0
    recentsBet.forEach(item => getRole(item.game_id).type === currentGameRole.type && count++)
    
    return (
      <>
        <p>Total items: {count}</p>
        { recentsBet.map(recentBet => getRole(recentBet.game_id).type === currentGameRole.type && <RecentBetItem key={recentBet.id} recentBet={recentBet} />) }
      </>
    )
  }

  return (
    <>
    <p>Total items: {totalItems}</p>
      { recentsBet.map(recentBet => <RecentBetItem key={recentBet.id} recentBet={recentBet} />) }
    </>
  );
};

export default RecentBetList;
