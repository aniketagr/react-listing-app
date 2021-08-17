import axios from "axios";
import authHeader from "./auth-header";


// TODO Need to configure
const api_auth_url = "http://3.109.124.187:8080/api/auth/";
const api_url = "http://3.109.124.187:8080/api/user/";

const register = (username, email, password) => {
  return axios.post(api_auth_url + "signup", {
    username,
    email,
    password,
  })
  .then((response) => {
    return "Registered Successfully";
  });
};

const login = (username, password) => {
  return axios
    .post(api_auth_url + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

// creating jwt token and verifying it

// var token = jwt.sign({ id: user.id }, config.secret, {
//   expiresIn: 300 // 5 minutes.
// });

// jwt.verify(token, config.secret, (err, decoded) => {
//   if (err) {
//     return res.status(401).send({ message: "Unauthorized!" });
//   }
//   req.userId = decoded.id;
//   next();
// });

const logout = () => {
  console.log("logout")
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};


// Uer actions
const postData = () => {
    return axios.post(api_url, { headers: authHeader() });
  };
  
  const getData = () => {
    return axios.get(api_url, { headers: authHeader() });
  };
  
  const PutDate = () => {
    return axios.put(api_url, { headers: authHeader() });
  };

  const services = {
    register,
    login,
    logout,
    getCurrentUser,
    postData,
    getData,
    PutDate,
  }
export default services;