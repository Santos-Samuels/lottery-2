import React, { useState } from "react";
import { DUMMY_RECENTS_BET, DUMMY_GAME_TYPES } from "./DummyData";

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
  currentTypeGame: IGameType,
  updateCurrentTypeGame: (newCurrentTypeGame: IGameType, isToggleable: boolean) => void
}

export const AppContext = React.createContext({} as IAppContext)

export const AppProvider: React.FC = (props) => {
  const [recentsBet, setRecentsBet] = useState<IBet[]>(DUMMY_RECENTS_BET)
  const [gameTypes, setGameTypes] = useState<IGameType[]>(DUMMY_GAME_TYPES)
  const [currentTypeGame, setCurentTypeGame] = useState<IGameType>({type: '', color: ''})

  const updateCurrentTypeGame = (newCurrentTypeGame: IGameType, isToggleable: boolean) => {
    if (currentTypeGame.type === newCurrentTypeGame.type && isToggleable) {
      setCurentTypeGame(newCurrentTypeGame)
      return
    }
    
    setCurentTypeGame(newCurrentTypeGame)
  }

  return (
    <AppContext.Provider value={{ recentsBet, gameTypes, currentTypeGame, updateCurrentTypeGame }}>
      { props.children }
    </AppContext.Provider>
  )
}

export default AppProvider