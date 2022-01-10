import { useApp } from "@src/hooks/useapp";
import { IPropsGameTypeButton } from "./interface";
import { Button } from "./style";


const GameTypeButton: React.FC<IPropsGameTypeButton> = (props) => {
  const { getRoleById, currentGameId, updateCurrentTypeGame, filters, updateFilters } = useApp()


  const updateFiltersHandler = () => {
    if (filters.includes(props.gameRole.id)) {
      updateFilters('remove', props.gameRole.id)
      return
    }

    updateFilters('add', props.gameRole.id)
  }

  if (props.isToggleable) {
    return (
      <Button color={props.gameRole.color} active={filters.includes(props.gameRole.id)} onClick={updateFiltersHandler}>
        {props.gameRole.type}
      </Button>
    );
  }

  return (
    <Button color={props.gameRole.color} active={getRoleById(currentGameId).type === props.gameRole.type} onClick={() => updateCurrentTypeGame(props.gameRole.id)}>
      {props.gameRole.type}
    </Button>
  );
};

export default GameTypeButton;