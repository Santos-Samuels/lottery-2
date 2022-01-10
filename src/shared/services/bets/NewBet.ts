import { IApiPostGames, IBet } from "@src/shared/interfaces"
import api from "../api"

export const NewBets = async (games: IApiPostGames[]) => {
  const response = api.post<IBet[]>('/bet/new-bet', {games})
    .then(response => response.data)
    .catch(() => false)

  return response
}