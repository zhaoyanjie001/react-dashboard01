import { Component } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

export default class loginService extends Component {

    getUserInfo(username,password) {
      console.log(username);
      console.log(password);
      return axios.post(API_URL + "login", { username, password });
    }
}