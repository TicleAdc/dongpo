import axios from 'axios';

const request = axios.create({
  baseURL: 'http://100.123.100.154:8080/',
  timeout: 3000,
});

console.log(request);

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const status = error.response.status;
    if (status >= 500) {
      console.log('服务繁忙请稍后再试');
    } else if (status >= 400) {
      console.log(error.response.data.message);
    }
    console.dir(error);
    return Promise.reject(error);
  },
);

//post
export function post(url, data) {
  return request.post(url, data);
}
