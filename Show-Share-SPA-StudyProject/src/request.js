import userUtil from "./userUtil.js";

export const host = "http://localhost:3030/";

async function request(method, url, data) {
  const option = {
    method,
    headers: {},
  };

  const token = userUtil.getToken();
  if (token) {
    option.headers["X-Authorization"] = token;
  }
  if (data) {
    option.headers["Content-Type"] = "application/json";
    option.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, option);
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message);
    }
    if (response.status === 204) {
      return response;
    }

    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}

export const get = (url) => request("GET", url);
export const post = (url, data) => request("POST", url, data);
export const put = (url, data) => request("PUT", url, data);
export const del = (url) => request("DELETE", url);
