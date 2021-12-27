import { GameTypeButton } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import { useEffect } from "react";

const TypeButtonList: React.FC<{isToggleable: boolean}> = (props) => {
  const {gameTypes, updateCurrentTypeGame} = useApp()

  
  useEffect(() => {
    if (!props.isToggleable) updateCurrentTypeGame({type: gameTypes[0].type, color: gameTypes[0].color}, false)
  }, [])

  return (
    <>
      {gameTypes.map(game => <GameTypeButton key={game.type} type={game.type} color={game.color} isToggleable={props.isToggleable} /> )}
    </>
  );
};

export default TypeButtonList;