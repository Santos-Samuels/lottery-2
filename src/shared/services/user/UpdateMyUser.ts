import { User } from "@src/shared/interfaces"
import api from "../api"

export const UpdateMyUser = async (newInfo: {name: string, email: string}) => {
  const response = api.put<User>('/user/update', newInfo)
    .then(response => response.data)
    .catch(() => false)

  return response
}