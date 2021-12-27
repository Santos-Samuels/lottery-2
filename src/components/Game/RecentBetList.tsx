import { RecentBetItem }  from "@components/index"
import { useApp } from "@src/hooks/useapp";

const RecentBetList: React.FC = () => {
  const {recentsBet, currentTypeGame} = useApp()

  if (!currentTypeGame.type) {
    return (
      <>
        { recentsBet.map(recentBet => <RecentBetItem key={recentBet.id} recentBet={recentBet} />) }
      </>
    )
  }

  return (
    <>
      { recentsBet.map(recentBet => recentBet.type === currentTypeGame.type && <RecentBetItem key={recentBet.id} recentBet={recentBet} />) }
    </>
  );
};

export default RecentBetList;
