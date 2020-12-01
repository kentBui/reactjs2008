import Axios from "axios";

const originUrl = "http://localhost:8080";

export const userApi = {
  getAllUsers: () => Axios.get(`${originUrl}/api/list`),
};
