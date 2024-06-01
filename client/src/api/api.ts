import axios from "axios";
import { loginForm, signupForm } from "../types/types";

const API = axios.create({ baseURL: "http://localhost:3000/" });

const profile = JSON.parse(localStorage.getItem("profile") || "{}");

//set auth header if the token is set
const accessHeader = {
  headers: {
    Authorization: `token ${profile ? profile.accessToken : null}`,
  },
};

export const loginIn = (formData: loginForm) =>
  API.post("/api/users/v1/login", formData);
export const register = (formData: signupForm) =>
  API.post("/api/users/v1/register", formData);
export const getUser = (formData) =>
  API.post("/api/users/v1/view", formData, accessHeader);
