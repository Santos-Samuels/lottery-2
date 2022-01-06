import { IPropsActionButton } from "./interface";
import { Button } from "./style";

const ActionButton: React.FC<IPropsActionButton> = (props) => {
  return (
    <Button active={!props.fill ? false : true} onClick={props.actionHandler}>
      {props.children}
    </Button>
  );
};

export default ActionButton;