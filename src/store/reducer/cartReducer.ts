import { IBet } from "../interfaces";

export enum CartActionsType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM'
}

interface ReducerBetActions {
  type: CartActionsType,
  payload: {newCartItem?: IBet, id?: number};
}

export const cartReducer = (state: IBet[], action: ReducerBetActions) => {
  if (action.type === CartActionsType.ADD_ITEM) {
    return [...state, action.payload.newCartItem!]
  }

  if (action.type === CartActionsType.REMOVE_ITEM) {
    const updatedCart = state.filter(item => item.id !== action.payload.id!)
    return updatedCart
  }

  return state
}