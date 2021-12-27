import { RecentBetList, AppContainer, HeaderRecentGame } from "@components/index";
import { Navigate } from "react-router-dom";

const Home: React.FC = () => {
  const valid = false;

  if (valid) return <Navigate replace to="/login" />;

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
