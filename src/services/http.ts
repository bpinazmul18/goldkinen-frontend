import axios, { AxiosError } from "axios";

axios.defaults.baseURL = process.env.APP_API_BASE_URL;

axios.interceptors.response.use(null, (error: AxiosError) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.error(error);
  }

  return Promise.reject(error);
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
