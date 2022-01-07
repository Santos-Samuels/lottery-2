import { ILotteryRoles } from "@src/shared/interfaces"
import api from "../api"

export const ListGames = async () => {
  const response = api.get<ILotteryRoles>('/cart_games')
    .then(response => response.data)
    .catch(() => false)

  return response
}