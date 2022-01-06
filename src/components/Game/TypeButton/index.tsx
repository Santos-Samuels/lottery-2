import { useApp } from "@src/hooks/useapp";
import { IPropsGameTypeButton } from "./interface";
import { Button } from "./style";


const GameTypeButton: React.FC<IPropsGameTypeButton> = (props) => {
  const { currentGameRole, updateCurrentTypeGame } = useApp()

  return (
    <Button color={props.gameRole.color} active={currentGameRole.type === props.gameRole.type} onClick={() => updateCurrentTypeGame(props.gameRole, props.isToggleable)}>
      {props.gameRole.type}
    </Button>
  );
};

export default GameTypeButton;