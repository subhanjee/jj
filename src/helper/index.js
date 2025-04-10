import axios from "axios";

const url = process.env.NEXT_PUBLIC_URL;
console.log(url);

const register = axios.create({
  baseURL: `${url}/auth/register`,
});
register.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const loginCoinUser = axios.create({
    baseURL: `${url}/auth/login`,
  });
  loginCoinUser.interceptors.request.use(
    (req) => {
      return req;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
const logout = axios.create({
  baseURL: `${url}/auth/register`,
});
logout.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const users = axios.create({
  baseURL: `${url}/auth/users`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
 
export {
  register,
  users,
  loginCoinUser,
 
};