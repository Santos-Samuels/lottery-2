import { IBet } from "@src/context";
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
    margin-bottom: 20px;
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
  return (
    <Item color={props.item.color}>
      <button><i className="bi bi-trash"/></button>

      <li>
        <h4>{props.item.bet}</h4>

        <p>
          <strong>{props.item.type}</strong>{" "}
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
