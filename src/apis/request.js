import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  timeout: 5000,
})

//请求拦截器
instance.interceptors.request.use(config => {
  return config;
})

//响应拦截器
instance.interceptors.response.use(response => {
  //TODO 错误状态码拦截
  return response;
})

/**
 * 发送请求
 * @param {string} url 请求url
 * @param {AxiosRequestConfig} options 请求config
 * @returns {Promise<AxiosResponse<any>>} Promise
 */
const request = (url, options) => {
  return new Promise((resolve, reject) => {
    instance({url, ...options}).then(res => resolve(res)).catch(err => reject(err));
  })
}

export default request;
