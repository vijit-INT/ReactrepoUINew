import axios from "axios";
 
const instance = axios.create({

  // baseURL: "http://10.0.10.4:8082",
  baseURL: process.env.REACT_APP_API_URL,
});

export default instance;