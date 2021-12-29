import { useApp } from "@src/hooks/useapp"
import { IBet, IGameRole } from "../interfaces"

export enum BetActionsType {
  ADD_NUMBER = 'ADD_NUMBER',
  REMOVE_NUMBER = 'REMOVE_NUMBER',
  CLEAR_GAME = 'CLEAR_GAME',
  COMPLETE_GAME = 'COMPLETE_GAME',
  ADD_TO_CART = 'ADD_TO_CART'
}

interface ReducerBetActions {
  type: BetActionsType,
  payload: { number: number, currentRole?: IGameRole }
}

export const betReducer = (state: number[], action: ReducerBetActions) => {
  if (action.type === BetActionsType.ADD_NUMBER) {
    const newNumber = action.payload.number
    if (!state.includes(newNumber)) return [...state, newNumber]

    return state
  }

  if (action.type === BetActionsType.REMOVE_NUMBER) {
    const updatedBet = state.filter(number => number !== action.payload.number)

    return updatedBet
  }

  if (action.type === BetActionsType.COMPLETE_GAME) {
    const role = action.payload.currentRole!
    const newNumbers = [...state]

    while (newNumbers.length < role.max_number) {
      let num = Math.floor(Math.random() * role.range + 1)

      if (!newNumbers.includes(num)) {
        newNumbers.push(num)
      }
    }

    return [...newNumbers]
  }

  if (action.type === BetActionsType.CLEAR_GAME) {
    return []
  }

  return state
}