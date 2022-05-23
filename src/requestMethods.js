import axios from "axios";

const BASE_URL = "https://damp-springs-58529.herokuapp.com/api/";


//const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser? 
//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken :"none";
const TOKEN=sessionStorage.getItem("accessToken")

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
