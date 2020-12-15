import Axios from "axios";

// const originUrl = "http://localhost:8080";
const originUrl = process.env.REACT_APP_PUBLIC_URL;
console.log(originUrl);

export const userApi = {
  getAllUsers: (data) => {
    console.log(data);
    return Axios.get(
      `${originUrl}/api/users/list?term=${data.term}&page=${data.page}&pageSize=${data.pageSize}`
    );
  },

  addUser: (data) => {
    return Axios.post(`${originUrl}/api/users/create`, { data });
  },

  getUser: (id) => {
    return Axios.get(`${originUrl}/api/users/edit/${id}`);
  },
};
