import { useApp } from "@src/hooks/useapp";
import { formatMoney, formatStringArray } from "@src/shared/utils";
import { IBet } from "@src/shared/interfaces";
import { Item } from "./style";

const CartItem: React.FC<{ item: IBet }> = (props) => {
  const {removeCartItem, getRole} = useApp()
  const itemRole = getRole(props.item.game_id)
  
  return (
    <Item color={itemRole.color}>
      <button onClick={() => removeCartItem(props.item.id)}><i className="bi bi-trash"/></button>

      <li>
        <h4>{formatStringArray(props.item.choosen_numbers)}</h4>

        <p>
          <strong>{itemRole.type}</strong>{" "}
          <span>
            {formatMoney(props.item.price)}
          </span>
        </p>
      </li>
    </Item>
  );
};

export default CartItem;
