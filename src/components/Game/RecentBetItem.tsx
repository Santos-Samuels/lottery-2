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
  return (
    <Item color={props.recentBet.color}>
      <h4>{props.recentBet.bet.toString().replace(/,/g, ', ')}</h4>
      <p>
        {props.recentBet.date.getDay()}/{props.recentBet.date.getMonth()}/
        {props.recentBet.date.getFullYear()} - (R$ {props.recentBet.price})
      </p>
      <span>{props.recentBet.type}</span>
    </Item>
  );
};

export default RecentBetItem;
