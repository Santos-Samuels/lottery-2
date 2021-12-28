import React, { useEffect, useState } from "react";
import { DUMMY_RECENTS_BET, DUMMY_GAME_TYPES, DUMMY_CART } from "./DummyData";

export interface IBet {
  id: number;
  type: string;
  color: string;
  price: number;
  bet: string;
  date: Date;
}

export interface IGameType {
  type: string;
  color: string;
}

interface IAppContext {
  recentsBet: IBet[];
  gameTypes: IGameType[];
  currentTypeGame: IGameType;
  updateCurrentTypeGame: (
    newCurrentTypeGame: IGameType,
    isToggleable: boolean
  ) => void;
  cartItems: IBet[];
  cartTotal: number;
  windowWidth: number;
}

export const AppContext = React.createContext({} as IAppContext);

export const AppProvider: React.FC = (props) => {
  const [recentsBet, setRecentsBet] = useState<IBet[]>(DUMMY_RECENTS_BET);
  const [gameTypes, setGameTypes] = useState<IGameType[]>(DUMMY_GAME_TYPES);
  const [cartItems, setCartItems] = useState<IBet[]>(DUMMY_CART);
  const [currentTypeGame, setCurentTypeGame] = useState<IGameType>({
    type: "",
    color: "",
  });
  const [cartTotal, setCartTotal] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateCurrentTypeGame = (
    newCurrentTypeGame: IGameType,
    isToggleable: boolean
  ) => {
    if (currentTypeGame.type === newCurrentTypeGame.type && isToggleable) {
      setCurentTypeGame(newCurrentTypeGame);
      return;
    }

    setCurentTypeGame(newCurrentTypeGame);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
  }, []);

  return (
    <AppContext.Provider
      value={{
        recentsBet,
        gameTypes,
        currentTypeGame,
        updateCurrentTypeGame,
        cartItems,
        cartTotal,
        windowWidth,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
