import { useApp } from "@src/hooks/useapp";
import { IPropsGameTypeButton } from "./interface";
import { Button } from "./style";


const GameTypeButton: React.FC<IPropsGameTypeButton> = (props) => {
  const { currentGameRole, updateCurrentTypeGame, filters, updateFilters } = useApp()

  const updateFiltersHandler = () => {
    if (filters.includes(props.gameRole.type)) {
      updateFilters('remove', props.gameRole.type)
      return
    }

    updateFilters('add', props.gameRole.type)
  }

  if (props.isToggleable) {
    return (
      <Button color={props.gameRole.color} active={filters.includes(props.gameRole.type)} onClick={updateFiltersHandler}>
        {props.gameRole.type}
      </Button>
    );
  }

  return (
    <Button color={props.gameRole.color} active={currentGameRole.type === props.gameRole.type} onClick={() => updateCurrentTypeGame(props.gameRole)}>
      {props.gameRole.type}
    </Button>
  );
};

export default GameTypeButton;