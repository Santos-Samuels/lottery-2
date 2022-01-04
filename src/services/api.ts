import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333",
});


api.interceptors.request.use(config => {
  const TOKEN = localStorage.getItem('TOKEN') === 'undefined' ? null : localStorage.getItem('TOKEN')

  if (TOKEN) {
    config.headers!['Authorization'] = `Bearer ${JSON.parse(TOKEN)}`
  }

  return config
},

  (error: AxiosError) => {
    return Promise.reject(error);
  }
)

export default api