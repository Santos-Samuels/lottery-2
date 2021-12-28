export enum BetActionsType {
  ADD_NUMBER = 'ADD_NUMBER',
  REMOVE_NUMBER = 'REMOVE_NUMBER',
  CLEAR_GAME = 'CLEAR_GAME',
  COMPLETE_GAME = 'COMPLETE_GAME',
  ADD_TO_CART = 'ADD_TO_CART'
}

export interface ReducerGameActions {
  type: BetActionsType,
  payload: number | number[]
}

// export const lotteryReducer = (state: )