import { RecentBetList, AppContainer, HeaderRecentGame, FeedbackMessage } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import { useEffect } from "react";

const Home: React.FC = () => {
  const {updateFilters, setBetError} = useApp()
  const isPurchaseSuccessful = localStorage.getItem('isPurchaseSuccessful') ? JSON.parse(localStorage.getItem('isPurchaseSuccessful')!) : false

  useEffect(() => {
    updateFilters('', 0)

    if(isPurchaseSuccessful)
      setBetError({isError: true, message: 'Successful purchase', icon: 'check', color: '#34aa44'})
  }, [])

  return (
    <AppContainer>
      <div>
        <HeaderRecentGame />
        <RecentBetList />
        {isPurchaseSuccessful && <FeedbackMessage />}
      </div>
    </AppContainer>
  );
};

export default Home;

