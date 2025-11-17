import axios from "axios";
import { ElNotification } from "element-plus";
import { AXIOS_SUCCESS } from "@/utils/code.js";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

//ElNotification实例
let notification = null;
/**
 * 弹出消息通知
 * @param {string} msg 消息内容
 */
const openNotification = (msg = "系统异常,请稍后重试") => {
  if (notification) {
    notification.close();
  }
  notification = ElNotification({
    title: msg,
    type: "error",
  });
};

/**
 * 错误状态码
 * @param {number} code 状态码
 */
const errStatus = (code) => {
  let msg;
  switch (code) {
    case 401: {
      msg = "未授权,请联系管理员";
      break;
    }
    case 403: {
      msg = "权限不足,请联系管理员";
      break;
    }
    default: {
      msg = "系统异常,请稍后重试";
      break;
    }
  }
  return msg;
};

//请求拦截器
axiosInstance.interceptors.request.use((config) => {
  console.log("请求URL", config.url);
  console.log("请求参数", config.data);
  return config;
});

//响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("响应URL", response.config.url);
    console.log("响应结果", response.data);
    if (response.data.code === AXIOS_SUCCESS) {
      return Promise.resolve(response.data.data);
    } else {
      openNotification(response?.data?.message);
      return Promise.reject(response);
    }
  },
  (error) => {
    const errMsg = errStatus(error.status);
    openNotification(errMsg);
    console.log(error);
  },
);

/**
 * 发送请求
 * @param {string} url 请求url
 * @param {AxiosRequestConfig} options 请求config
 * @returns {Promise<AxiosResponse<any>>} Promise
 */
const request = (url, options) => {
  return new Promise((resolve, reject) => {
    axiosInstance({ url, ...options })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export default request;
