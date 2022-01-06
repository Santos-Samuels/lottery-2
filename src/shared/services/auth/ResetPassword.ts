import { User } from "@src/shared/interfaces"
import api from "../api"

export const ResetPassword = async (email: string) => {
  const response = api.post<User>('/reset', { email })
    .then(response => response.data)
    .catch(() => false)

  return response
}