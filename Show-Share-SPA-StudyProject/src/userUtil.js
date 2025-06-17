function getToken() {
  return localStorage.getItem("token");
}
function getUserId() {
  return localStorage.getItem("userId");
}

function setUser(userData) {
  localStorage.setItem("token", userData.accessToken);
  localStorage.setItem("userId", userData._id);
  localStorage.setItem("email", userData.email);
}

function removeUser() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("email");
}

const userUtil = { getToken, getUserId, setUser, removeUser };

export default userUtil;
