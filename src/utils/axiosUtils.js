import axios from "axios";

const stands = ["https://test.kode-t.ru/"];

const standUrl = process.env.NODE_ENV !== "production" ? stands[0] : stands[0];

const http = axios.create({
  baseURL: standUrl,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

http.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        ...config.headers,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
