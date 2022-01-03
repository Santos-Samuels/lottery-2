import { RecentBetItem }  from "@components/index"
import { useApp } from "@src/hooks/useapp";
import api from "@src/services/api";
import { IBet, IRequestInfo, User } from "@src/store/interfaces";
import { useEffect, useState } from "react";
import styled from "styled-components";

const InfoText = styled.h3`
  text-align: center;
  opacity: 0.5;
  margin-top: 30px;
`

const initialRequestInfo: IRequestInfo<IBet[], boolean> = {
  loading: true,
  data: [],
  error: false,
  success: false
}

const RecentBetList: React.FC = () => {
  const {recentsBet, addRecentsBet, currentGameRole, getRole} = useApp()
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<IBet[], boolean>>(initialRequestInfo)

  useEffect(() => {
    try {
      api.get<User>('/user/my-account').then(response => {
        if (response.data.bets) {
          setRequestInfo(prevInfo => { return { ...prevInfo, loading: false } })
          addRecentsBet(response.data.bets)
        }
      })
    } catch (error) {
      setRequestInfo(prevInfo => { return { ...prevInfo, loading: false, error: true } })
    }
  }, [])

  if (requestInfo.loading) return <InfoText>Loading...</InfoText>

  if (recentsBet.length === 0 && !recentsBet.some(recentBet => getRole(recentBet.game_id).type === currentGameRole.type)) return <InfoText>No recent {currentGameRole.type} game found.</InfoText>

  if (currentGameRole.type) {
    return (
      <>
        { recentsBet.map(recentBet => getRole(recentBet.game_id).type === currentGameRole.type && <RecentBetItem key={recentBet.id} recentBet={recentBet} />) }
      </>
    )
  }

  return (
    <>
      { recentsBet.map(recentBet => <RecentBetItem key={recentBet.id} recentBet={recentBet} />) }
    </>
  );
};

export default RecentBetList;
