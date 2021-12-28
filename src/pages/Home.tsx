import { RecentBetList, AppContainer, HeaderRecentGame } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import { Navigate } from "react-router-dom";

const Home: React.FC = () => {
  const {isLogged} = useApp()

  if (!isLogged) return <Navigate replace to="/login" />;

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
