import request from "./request.js";

/**
 * 登录
 * @param {Object} params
 * @param {string} params.username 账号
 * @param {string} params.password 密码
 * @returns {Promise<AxiosResponse<*>>} Promise
 */
export const loginApi = (params = {}) =>
  request("/user/login", { method: "POST", data: params });

/**
 * 获取路由
 * @returns {Promise<AxiosResponse<*>>} Promise
 */
export const getRouterApi = (params = {}) =>
  request("/user/get-router", { method: "POST", data: params });
