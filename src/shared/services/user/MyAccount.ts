import { User } from "@src/shared/interfaces"
import api from "../api"

export const MyAccount = async () => {
  const response = api.get<User>('/user/my-account')
    .then(response => response.data)
    .catch(() => false)

  return response
}