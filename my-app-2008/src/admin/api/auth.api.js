import Axios from "axios";

const originUrl = "http://localhost:8080";

export const authApi = {
  login: (data) => {
    console.log(data);
    return Axios.post(`${originUrl}/api`, data);
  },
};
