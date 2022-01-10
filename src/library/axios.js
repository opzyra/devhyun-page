import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER;

const instance = axios.create({
  baseURL,
  timeout: 4000,
  withCredentials: true,
});

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },

  function (error) {
    if (error.response) {
      if (error.response.status === 401) {
        return Promise.reject(error);
      }

      if (error.response.status === 400) {
        return Promise.reject(error.response.data);
      }

      if (error.response.status === 404) {
        return Promise.reject(error.response);
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
