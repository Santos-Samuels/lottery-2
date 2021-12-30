import { RecentBetItem }  from "@components/index"
import { useApp } from "@src/hooks/useapp";
import styled from "styled-components";

const EmpetyText = styled.h3`
  text-align: center;
  opacity: 0.5;
  margin-top: 30px;
`

const RecentBetList: React.FC = () => {
  const {recentsBet, currentGameRole} = useApp()

  if (recentsBet.length === 0 && !recentsBet.some(recentBet => recentBet.type === currentGameRole.type)) return <EmpetyText>No recent {currentGameRole.type} game found.</EmpetyText>

  if (currentGameRole.type) {
    return (
      <>
        { recentsBet.map(recentBet => recentBet.type === currentGameRole.type && <RecentBetItem key={recentBet.id} recentBet={recentBet} />) }
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
