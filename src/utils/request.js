import axios from "axios";
const request = axios.create({
  baseURL: "http://www-wms-java.itheima.net/",
  timeout: 3000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return err;
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    if (err.response.status === 401) {
      this.$router.push("/login");
    } else {
      console.log(err.response.data.message);
    }
    return Promise.reject(err);
  }
);
