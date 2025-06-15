import { get, post } from "./requester.js";
import { baseUsersUrl } from "./links.js";
import { removeUser, setUserData } from "./util.js";

async function register(userData) {
  const result = await post(`${baseUsersUrl}/register`, userData);
  setUserData(result);
  return result;
}

async function login(userData) {
  const result = await post(`http://localhost:3030/users/login`, userData);
  setUserData(result);
  return result;
}

async function logout() {
  const result= await get(`${baseUsersUrl}/logout`);
  removeUser();
  return result
}

const userService = { register, login, logout };

export default userService;
