import { CartList } from "@components/index";
import { useApp } from "@src/hooks/useapp";
import { IApiPostGames, IBet, IRequestInfo } from "@src/shared/interfaces";
import React, { useEffect, useState } from "react";
import { CartHeader, CartTitle, Container, SaveButton } from "./style";
import { useNavigate } from "react-router-dom";
import { NewBets } from "@src/shared/services";

const initialRequestInfo: IRequestInfo<IBet[], any> = {
  loading: false,
  data: [],
  error: null,
  success: false,
};

const Cart: React.FC<{ closeModal?: () => void }> = (props) => {
  const { cartTotal, windowWidth, cartItems, addRecentsBet, clearCart, updateCurrentTypeGame, setBetError, lotteryRoles } = useApp();
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo);
  const navigate = useNavigate()

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
    updateCurrentTypeGame(lotteryRoles.types[0])
    setBetError({isError: true, message: 'Successful purchase', icon: 'check', color: '#34aa44'})
  }

  const fetchNewGames = async () => {
    const games: IApiPostGames[] = cartItems.map((item) => {
      return {
        id: item.game_id,
        numbers: JSON.parse('[' + item.choosen_numbers + ']'),
      };
    });
    
    const response = await NewBets(games)

    if (response) {
      setRequestInfo((prevInfo) => {return { ...prevInfo, data: response as IBet[], success: true }})
    }
  }


  useEffect(() => {
    if (requestInfo.loading) {
      setRequestInfo(prevInfo => {return { ...prevInfo, loading: false }})
      fetchNewGames()
    }

    if (requestInfo.success) {
      successHandler()
      navigate('/')
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

      <SaveButton onClick={validCart}>
        Save <i className="bi bi-arrow-right" />
      </SaveButton>
    </Container>
  );
};

export default Cart;

