import { useApp } from "@src/hooks/useapp";
import { formatDate, formatMoney, formatStringArray } from "@src/shared/utils";
import { IBet } from "@src/shared/interfaces";
import { Item } from "./style";

const RecentBetItem: React.FC<{recentBet: IBet}> = (props) => {
  const {getRole} = useApp()
  const itemRole = getRole(props.recentBet.game_id)

  return (
    <Item color={itemRole.color}>
      <h4>{formatStringArray(props.recentBet.choosen_numbers)}</h4>
      <p>
        {formatDate(new Date(props.recentBet.created_at))} - {formatMoney(props.recentBet.price)})
      </p>
      <span>{itemRole.type}</span>
    </Item>
  );
};

export default RecentBetItem;
