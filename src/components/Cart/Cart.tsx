import { CartList } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import api from "@src/services/api";
import {
  IApiPostGames,
  IBet,
  IRequestInfo,
} from "@src/store/interfaces";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-style: italic;
  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  width: 100%;
`;

const SaveButton = styled.button`
  font-size: 30px;
  background-color: #f4f4f4;
  color: #27c383;
  font-weight: 600;
  font-style: italic;
  border-top: 1px solid #e2e2e2;
  padding: 20px;
  width: 100%;
  border: none;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #d8d7d7;
  }
`;

const CartTitle = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  margin: 30px 15px;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & i {
    font-size: 40px;
    cursor: pointer;
  }
`;

const initialRequestInfo: IRequestInfo<IBet[], any> = {
  loading: false,
  data: [],
  error: null,
  success: false,
};

const Cart: React.FC<{ closeModal?: () => void }> = (props) => {
  const { cartTotal, windowWidth, cartItems, addRecentsBet, clearCart, updateCurrentTypeGame, setBetError, lotteryRoles } = useApp();
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo);

  const validCart = () => {
    if (cartTotal >= lotteryRoles.min_cart_value && cartItems.length > 0) {
      setRequestInfo(prevInfo => {return { ...prevInfo, loading: true }})
      return
    }

    if (cartItems.length === 0) {
      setBetError({isError: true, message: 'You cart is empety', icon: 'x', color: '#ee5754'})
      return
    }
    
    setBetError({isError: true, message: `You need at least R$ ${lotteryRoles.min_cart_value} in your cart`, icon: 'x', color: '#ee5754'})
  };

  const successHandler = () => {
    addRecentsBet(requestInfo.data)
    clearCart()
    setRequestInfo(initialRequestInfo);
    updateCurrentTypeGame(lotteryRoles.types[0], true)
    setBetError({isError: true, message: 'Successful purchase', icon: 'check', color: '#34aa44'})
  }


  useEffect(() => {
    if (requestInfo.loading) {
      setRequestInfo(prevInfo => {return { ...prevInfo, loading: false }})

      const games: IApiPostGames[] = cartItems.map((item) => {
        return {
          id: item.game_id,
          numbers: JSON.parse('[' + item.choosen_numbers + ']'),
        };
      });
  
      api.post<{ bet: IBet[] }>("/bet/new-bet", { games })
        .then((response) =>
          setRequestInfo((prevInfo) => {
            return { ...prevInfo, data: response.data.bet, success: true };
          })
      );
    }

    if (requestInfo.success) {
      successHandler()
    }
  }, [requestInfo]);

  return (
    <Container>
      <CartHeader>
        <CartTitle>
          <strong>cart</strong>
        </CartTitle>
        {windowWidth < 950 && (
          <i className="bi bi-x" onClick={props.closeModal} />
        )}
      </CartHeader>

      <CartList />

      <CartTitle>
        <strong>cart</strong> TOTAL:{" "}
        {cartTotal.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </CartTitle>

      <SaveButton
        onClick={validCart}
      >
        Save <i className="bi bi-arrow-right" />
      </SaveButton>
    </Container>
  );
};

export default Cart;

