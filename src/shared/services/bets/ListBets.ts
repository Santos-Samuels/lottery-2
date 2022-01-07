import { IBet } from "@src/shared/interfaces"
import api from "../api"

export const ListBets = async (filter?: string) => {
  const url = filter ? `/bet/all-bets?${filter}` : '/bet/all-bets'
  const response = api.get<IBet[]>(url)
    .then(response => response.data)
    .catch(() => false)

  return response
}