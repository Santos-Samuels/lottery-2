import { useApp } from "@src/hooks/useapp";
import { IGameRole } from "@src/store/interfaces";
import styled from "styled-components";

const Button = styled.button<{color: string, active: boolean}>`
  margin-right: 20px;
  background-color: ${props => props.active ? props.color : '#FFFFFF'};;
  color: ${props => props.active ? '#FFFFFF' : props.color};
  border: 2px solid ${props => props.color};
  border-radius: 25px;
  padding: 6px 15px;
  font-weight: 600;
  font-style: italic;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.color};
    color: #FFFFFF;
  }
`

interface IProps {
  gameRole: IGameRole
  isToggleable: boolean;
}

const GameTypeButton: React.FC<IProps> = (props) => {
  const { currentGameRole, updateCurrentTypeGame } = useApp()

  return (
    <Button color={props.gameRole.color} active={currentGameRole.type === props.gameRole.type} onClick={() => updateCurrentTypeGame(props.gameRole, props.isToggleable)}>
      {props.gameRole.type}
    </Button>
  );
};

export default GameTypeButton;