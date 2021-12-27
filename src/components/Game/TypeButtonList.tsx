import { GameTypeButton } from "@components/index";
import { useApp } from "@src/hooks/useapp";

const TypeButtonList: React.FC = () => {
  const {gameTypes} = useApp()

  return (
    <>
      {gameTypes.map(game => <GameTypeButton key={game.type} type={game.type} color={game.color} /> )}
    </>
  );
};

export default TypeButtonList;