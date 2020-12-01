export const saveToken = (token) => {
  localStorage.setItem("token", token);
};
export const saveUser = (user) => {
  localStorage.setItem("user", user);
};
export const getToken = () => {
  return localStorage.getItem("token");
};
export const getUser = () => {
  return localStorage.getItem("user");
};
