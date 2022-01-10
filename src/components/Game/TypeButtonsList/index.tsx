import { GameTypeButton } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import { useEffect } from "react";

const TypeButtonList: React.FC<{isToggleable: boolean}> = (props) => {
  const {lotteryRoles, updateCurrentTypeGame} = useApp()
  
  useEffect(() => {
    if (lotteryRoles.types.length !== 0) {
      if (!props.isToggleable) updateCurrentTypeGame(lotteryRoles.types[0].id)
    }
  }, [lotteryRoles])

  return (
    <>
      {lotteryRoles.types.map(gameRole => <GameTypeButton key={gameRole.type} gameRole={gameRole} isToggleable={props.isToggleable} /> )}
    </>
  );
};

export default TypeButtonList;