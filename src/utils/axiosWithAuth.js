import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://farm-fresh-bw.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};
