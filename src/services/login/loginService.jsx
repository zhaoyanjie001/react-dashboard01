import { Component } from "react";
import axios from "axios";

const API_URL = "http://138.138.0.111:8080/api/auth/";

export default class loginService extends Component {

    getUserInfo(username,password) {
      console.log(username);
      console.log(password);
      return axios.post(API_URL + "login", { username, password });
    }
}