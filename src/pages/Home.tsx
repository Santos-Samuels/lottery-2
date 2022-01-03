import { RecentBetList, AppContainer, HeaderRecentGame } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import { Navigate } from "react-router-dom";

const Home: React.FC = () => {
  const TOKEN = localStorage.getItem('TOKEN') === 'undefined' ? null : localStorage.getItem('TOKEN')

  if (!TOKEN) return <Navigate replace to="/login" />;

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
