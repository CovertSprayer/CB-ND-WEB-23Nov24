import API from "../common/api";
import { jwtDecode } from "jwt-decode";

export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

export const setToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");

export const setUser = (token) => {
  const decoded = jwtDecode(token);
  localStorage.setItem("user", JSON.stringify(decoded.data));
};
export const getUser = () => {
  const user = localStorage.getItem("user");
  if(!user) return null;

  try {
    return JSON.parse(user);
  } catch {
    return null;
  }
};

export const isAuthenticated = () => {
  const token = getToken();
  if(!token) return false;

  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}