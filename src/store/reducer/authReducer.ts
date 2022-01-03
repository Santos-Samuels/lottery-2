import api from "@src/services/api";
import { NewUser, Token, User } from "../interfaces";

export enum AuthActionsType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

interface ReducerAuthActions {
  type: AuthActionsType,
  payload?: Token
  // payload: { user?: User, newUser?: { user: NewUser, token: Token } }
}


export const authReducer = (state: boolean, action: ReducerAuthActions) => {
  if (action.type === AuthActionsType.LOGIN) {
    localStorage.setItem('TOKEN', JSON.stringify(action.payload?.token!))

    return true
  }

  if (action.type === AuthActionsType.LOGOUT) {
    localStorage.clear()

    return false
  }

  return state
}