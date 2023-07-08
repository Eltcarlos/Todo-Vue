import axios from "axios";

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyCMHZn7atl6_St-5KumovRJW7wV-gklMqk",
  },
});

// console.log( process.env.NODE_ENV ) // TEST durante testing,

export default authApi;
