import { Token } from "../../shared/interfaces";

export enum AuthActionsType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

interface ReducerAuthActions {
  type: AuthActionsType,
  payload?: Token
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