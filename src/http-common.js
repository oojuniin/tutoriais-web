import axios from "axios";

export default axios.create({
  baseURL: "https://tutoriais-api-oojuniin.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
