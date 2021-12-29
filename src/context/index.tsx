import api from "@src/services/api";
import { IBet, IGameRole, ILotteryRoles } from "@src/store/interfaces";
import { BetActionsType, betReducer } from "@src/store/reducer/betReducer";
import React, { useEffect, useReducer, useState } from "react";
import { DUMMY_RECENTS_BET, DUMMY_CART } from "./DummyData";

interface IAppContext {
  isLogged: boolean;
  currentGameRole: IGameRole;
  currentBet: number[]

  logIn: () => void;
  updateCurrentTypeGame: (newCurrentTypeGame: IGameRole, isToggleable: boolean) => void;
  addBetNumber: (number: number) => void;
  removeBetNumber: (number: number) => void;
  clearCurrentBet: () => void;
  completeCurrentBet: () => void;
  addToCart: () => void

  recentsBet: IBet[];
  cartItems: IBet[];
  cartTotal: number;
  windowWidth: number;
  lotteryRoles: ILotteryRoles,
}

export const AppContext = React.createContext({} as IAppContext);

const initialGameRole: IGameRole = {id: 0, color: '', description: '', max_number: 0, price: 0, range: 0, type: ''}
const initialBet: number[] = []

export const AppProvider: React.FC = (props) => {
  const [lotteryRoles, setLotteryRoles] = useState<ILotteryRoles>({min_cart_value: 0, types: []});
  const [isLogged, setIsLogged] = useState(false)
  const [currentGameRole, setCurentGameRole] = useState<IGameRole>(initialGameRole);
  const [currentBet, dispatch] = useReducer(betReducer, initialBet)

  const [cartItems, setCartItems] = useState<IBet[]>(DUMMY_CART);
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
    dispatch({ type: BetActionsType.CLEAR_GAME, payload: { number: 0 }})
  };
  
  const addBetNumber = (number: number) => {
    if (currentBet.length < currentGameRole.max_number)
      dispatch({ type: BetActionsType.ADD_NUMBER, payload: { number } })
  }
  
  const removeBetNumber = (number: number) => {
    if (currentBet.length > 0)
      dispatch({ type: BetActionsType.REMOVE_NUMBER, payload: { number } })
  }
  
  const clearCurrentBet = () => {
    if (currentBet.length > 0)
      dispatch({ type: BetActionsType.CLEAR_GAME, payload: { number: 0 }})
  }
  
  const completeCurrentBet = () => {
    dispatch({ type: BetActionsType.COMPLETE_GAME, payload: { number: 0, currentRole: currentGameRole }})
  }

  const addToCart = () => {
    const newBet = currentBet.sort((a: number, b: number) => a - b).toString().replace(/,/g, ', ')
    const newBetItem: IBet = {id: Date.now(), bet: newBet, color: currentGameRole.color, price: currentGameRole.price, type: currentGameRole.type, date: new Date}
    
    if (!cartItems.some(element => JSON.stringify(element.bet) === JSON.stringify(currentBet)) && currentBet.length === currentGameRole.max_number) {
      setCartItems(prevItems => [...prevItems, newBetItem]);
      clearCurrentBet()
      return;
    }
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
        recentsBet,
        currentGameRole,
        cartItems,
        cartTotal,
        windowWidth,
        
        lotteryRoles,
        isLogged,
        currentBet,
        logIn,
        updateCurrentTypeGame,
        addBetNumber,
        removeBetNumber,
        clearCurrentBet,
        completeCurrentBet,
        addToCart
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
