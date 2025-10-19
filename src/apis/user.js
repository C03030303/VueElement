import request from './request.js'

/**
 * 登录
 * @param {Object} params
 * @param {string} params.username 账号
 * @param {string} params.password 密码
 * @returns {Promise<AxiosResponse<any>>} Promise
 */
export const loginApi = (params) => request('/api/user/login', {method: 'POST', data: params})
