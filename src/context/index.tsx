import React, { useState } from "react";
import { DUMMY_RECENTS_BET, DUMMY_GAME_TYPES } from "./DummyData";

export interface IRecentBet {
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
  recentsBet: IRecentBet[];
  gameTypes: IGameType[];
  currentTypeGame: string,
  updateCurrentTypeGame: (newCurrentTypeGame: string) => void
}

export const AppContext = React.createContext({} as IAppContext)

export const AppProvider: React.FC = (props) => {
  const [recentsBet, setRecentsBet] = useState<IRecentBet[]>(DUMMY_RECENTS_BET)
  const [gameTypes, setGameTypes] = useState<IGameType[]>(DUMMY_GAME_TYPES)
  const [currentTypeGame, setCurentTypeGame] = useState('')

  const updateCurrentTypeGame = (newCurrentTypeGame: string) => {
    if (currentTypeGame === newCurrentTypeGame) {
      setCurentTypeGame('')
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