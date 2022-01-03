import { useApp } from "@src/hooks/useapp";
import { IBet } from "@src/store/interfaces";
import styled from "styled-components";

const Item = styled.article<{ color: string }>`
  border-left: 5px solid ${(props) => props.color};
  border-radius: 2px;
  padding: 5px 10px;
  margin: 20px 0;

  & h4 {
    font-size: 15px;
    margin-bottom: 8px;
    word-break: break-all;
  }

  & p {
    font-size: 14px;
    margin-bottom: 8px;
  }

  & span {
    color: ${(props) => props.color};
    font-weight: 600;
    font-size: 14px;
  }
`;

const RecentBetItem: React.FC<{recentBet: IBet}> = (props) => {
  const {getRole} = useApp()
  const itemRole = getRole(props.recentBet.game_id)
  const itemDate = new Date(props.recentBet.created_at)

  return (
    <Item color={itemRole.color}>
      <h4>{props.recentBet.choosen_numbers.replace(/,/g, ', ')}</h4>
      <p>
        {itemDate.getDay()}/{itemDate.getMonth()}/
        {itemDate.getFullYear()} - (R$ {props.recentBet.price})
      </p>
      <span>{itemRole.type}</span>
    </Item>
  );
};

export default RecentBetItem;
