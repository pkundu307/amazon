import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazonbackendd.herokuapp.com",
});

export default instance;