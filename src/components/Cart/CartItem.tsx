import { useApp } from "@src/hooks/useapp";
import { IBet } from "@src/store/interfaces";
import styled from "styled-components";

const Item = styled.article<{color: string}>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  & button {
    height: 50px;
    font-size: 20px;
    border: none;
    background-color: transparent;
    padding: 0;
    margin-right: 5px;
    cursor: pointer;
    color: #888888;
  }

  & li {
    margin: 10px;
    border-left: 4px solid ${props => props.color};
    border-radius: 4px;
    list-style: none;
    padding: 8px;
  }

  & li h4 {
    color: #868686;
    margin-bottom: 3px;
  }

  & li strong {
    text-transform: initial;
    font-size: 15px;
    color: ${props => props.color};
  }

  & li span {
    margin-left: 5px;
    font-size: 15px;
    font-style: normal;
  }
`;

const CartItem: React.FC<{ item: IBet }> = (props) => {
  const {removeCartItem, getRole} = useApp()
  const itemRole = getRole(props.item.game_id)
  
  return (
    <Item color={itemRole.color}>
      <button onClick={() => removeCartItem(props.item.id)}><i className="bi bi-trash"/></button>

      <li>
        <h4>{props.item.choosen_numbers.replace(/,/g, ', ')}</h4>

        <p>
          <strong>{itemRole.type}</strong>{" "}
          <span>
            {props.item.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
      </li>
    </Item>
  );
};

export default CartItem;
