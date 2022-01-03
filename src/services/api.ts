import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333",
  // headers: {
  //   "Authorization": 'Bearer MTM.eKNtVX_4lZusq-v8NoE-RAls20bO7-sqvcKmrlR1DPbyC3BIQZ2tiqC83z-7'
  // }
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

// api.interceptors.request.use(config => {
//   const TOKEN = localStorage.getItem('TOKEN')
  
//   if (!config.headers!['Authorization'] && TOKEN) {
//     config.headers!['Authorization'] = `Bearer ${TOKEN}`
//   }
  
//   console.log(config.headers);
  
//   return config
// },

//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// )

export default api