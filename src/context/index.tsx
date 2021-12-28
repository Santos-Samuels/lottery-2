import Login from "@src/pages/ResetPassword";
import api from "@src/services/api";
import { IBet, IGameRole, ILotteryRoles } from "@src/store/interfaces";
import React, { useEffect, useState } from "react";
import { DUMMY_RECENTS_BET, DUMMY_CART } from "./DummyData";

interface IAppContext {
  isLogged: boolean;
  logIn: () => void;
  currentGameRole: IGameRole;
  updateCurrentTypeGame: (newCurrentTypeGame: IGameRole, isToggleable: boolean) => void;

  recentsBet: IBet[];
  cartItems: IBet[];
  cartTotal: number;
  windowWidth: number;
  lotteryRoles: ILotteryRoles
}

export const AppContext = React.createContext({} as IAppContext);

const initialGameRole: IGameRole = {id: 0, color: '', description: '', max_number: 0, price: 0, range: 0, type: ''}

export const AppProvider: React.FC = (props) => {
  const [lotteryRoles, setLotteryRoles] = useState<ILotteryRoles>({min_cart_value: 0, types: []});
  const [isLogged, setIsLogged] = useState(false)
  const [currentGameRole, setCurentGameRole] = useState<IGameRole>(initialGameRole);

  const [recentsBet, setRecentsBet] = useState<IBet[]>(DUMMY_RECENTS_BET);
  const [cartItems, setCartItems] = useState<IBet[]>(DUMMY_CART);
  const [cartTotal, setCartTotal] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateCurrentTypeGame = (
    newCurrentTypeGame: IGameRole,
    isToggleable: boolean
  ) => {
    if (currentGameRole.type === newCurrentTypeGame.type && isToggleable) {
      setCurentGameRole(initialGameRole);
      return;
    }

    setCurentGameRole(newCurrentTypeGame);
  };
  
  const logIn = () => {
    setIsLogged(true)
  }

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
        logIn,
        updateCurrentTypeGame
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
