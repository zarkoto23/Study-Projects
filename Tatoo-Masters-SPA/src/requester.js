import userUtil from "./userUtil.js";

export const host = "http://localhost:3030";

async function request(method, url, data) {
  const token = userUtil.getToken();

  const options = {
    method,
    headers: {},
  };

  if (token) {
    options.headers["X-Authorization"] = token;
  }

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  

    const response = await fetch(url, options);
    if (!response.ok) {
      const error =await response.json();
      throw new Error(error.message);
    }
    if (response.status === 204) {
      return response;
    }
    
    return await response.json();
 
}

export const get=(url)=>request('GET',url)
export const post=(url,data)=>request('POST',url, data)
export const put=(url, data)=>request('PUT',url, data)
export const del=(url)=>request('DELETE',url)
