import api from "@src/services/api";
import { IBet, IGameRole, ILotteryRoles } from "@src/store/interfaces";
import { BetActionsType, betReducer } from "@src/store/reducer/betReducer";
import { CartActionsType, cartReducer } from "@src/store/reducer/cartReducer";
import React, { useEffect, useReducer, useState } from "react";
import { DUMMY_RECENTS_BET } from "./DummyData";

interface IAppContext {
  lotteryRoles: ILotteryRoles,
  isLogged: boolean;
  windowWidth: number;
  currentGameRole: IGameRole;
  currentBet: number[]
  cartItems: IBet[];
  cartTotal: number;

  logIn: () => void;
  updateCurrentTypeGame: (newCurrentTypeGame: IGameRole, isToggleable: boolean) => void;
  addBetNumber: (number: number) => void;
  removeBetNumber: (number: number) => void;
  clearCurrentBet: () => void;
  completeCurrentBet: () => void;
  addCartItem: () => void;
  removeCartItem: (id: number) => void;

  recentsBet: IBet[];
}

export const AppContext = React.createContext({} as IAppContext);

const initialGameRole: IGameRole = {id: 0, color: '', description: '', max_number: 0, price: 0, range: 0, type: ''}
const initialBet: number[] = []
const initialCart: IBet[] = []

export const AppProvider: React.FC = (props) => {
  const [lotteryRoles, setLotteryRoles] = useState<ILotteryRoles>({min_cart_value: 0, types: []});
  const [isLogged, setIsLogged] = useState(false)
  const [currentGameRole, setCurentGameRole] = useState<IGameRole>(initialGameRole);
  const [currentBet, dispatchBet] = useReducer(betReducer, initialBet)
  const [cartItems, dispatchCart] = useReducer(cartReducer, initialCart)

  const [recentsBet, setRecentsBet] = useState<IBet[]>(DUMMY_RECENTS_BET);
  const [cartTotal, setCartTotal] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const logIn = () => {
    setIsLogged(true)
  }

  const updateCurrentTypeGame = (
    newCurrentTypeGame: IGameRole,
    isToggleable: boolean
  ) => {
    if (currentGameRole.type === newCurrentTypeGame.type && isToggleable) {
      setCurentGameRole(initialGameRole);
      return;
    }

    setCurentGameRole(newCurrentTypeGame);
    dispatchBet({ type: BetActionsType.CLEAR_GAME, payload: { number: 0 }})
  };
  
  const addBetNumber = (number: number) => {
    if (currentBet.length < currentGameRole.max_number)
      dispatchBet({ type: BetActionsType.ADD_NUMBER, payload: { number } })
  }
  
  const removeBetNumber = (number: number) => {
    if (currentBet.length > 0)
      dispatchBet({ type: BetActionsType.REMOVE_NUMBER, payload: { number } })
  }
  
  const clearCurrentBet = () => {
    if (currentBet.length > 0)
      dispatchBet({ type: BetActionsType.CLEAR_GAME, payload: { number: 0 }})
  }
  
  const completeCurrentBet = () => {
    dispatchBet({ type: BetActionsType.COMPLETE_GAME, payload: { number: 0, currentRole: currentGameRole }})
  }

  const addCartItem = () => {
    if (!cartItems.some(element => JSON.stringify(element.bet) === JSON.stringify(currentBet)) && currentBet.length === currentGameRole.max_number) {
      const sortedNewItem = currentBet.sort((a: number, b: number) => a - b)
      const newCartItem: IBet = {id: Date.now(), bet: sortedNewItem, color: currentGameRole.color, price: currentGameRole.price, type: currentGameRole.type, date: new Date}

      setCartTotal(prevTotal => prevTotal + newCartItem.price)
      dispatchCart({type: CartActionsType.ADD_ITEM, payload: { newCartItem }});
      clearCurrentBet()
      return;
    }

    return;
  };

  const removeCartItem = (id : number) => {
    const item = cartItems.find(element => element.id === id)
    setCartTotal(prevTotal => prevTotal - (item ? item.price : 0))

    dispatchCart({type: CartActionsType.REMOVE_ITEM, payload: { id }});
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () =>
    window.removeEventListener("resize", () =>
      setWindowWidth(window.innerWidth)
    );
  }, []);

  useEffect(() => {
    if (lotteryRoles.types.length === 0) {
      api.get<ILotteryRoles>('/cart_games').then(response => {
        setLotteryRoles(response.data)
      })
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        lotteryRoles,
        isLogged,
        windowWidth,
        currentGameRole,
        currentBet,
        cartItems,
        cartTotal,
        
        recentsBet,
        logIn,
        updateCurrentTypeGame,
        addBetNumber,
        removeBetNumber,
        clearCurrentBet,
        completeCurrentBet,
        addCartItem,
        removeCartItem
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
