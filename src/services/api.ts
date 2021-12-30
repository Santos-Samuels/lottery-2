import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:3333",
  headers: {
    "Authorization": 'Bearer MTM.eKNtVX_4lZusq-v8NoE-RAls20bO7-sqvcKmrlR1DPbyC3BIQZ2tiqC83z-7'
  }
});
