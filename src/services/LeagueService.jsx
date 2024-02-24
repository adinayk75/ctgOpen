import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/ctgopenapi/v1/leagues";
export const listLeagues = () => {
  return axios.get(REST_API_BASE_URL);
};
