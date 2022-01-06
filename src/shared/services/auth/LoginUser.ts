import { ILoginInfo, Token, User } from "@src/shared/interfaces"
import api from "../api"

export const LoginUser = async (loginInfo: ILoginInfo) => {
  const response = await api.post<{user: User, token: Token}>('/login', loginInfo)
    .then(response => response.data)
    .catch(() => false)

  return response
}