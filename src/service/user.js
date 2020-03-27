import Http from '@/plugins/axios'

// 获取用户信息
export const getUserDetail = (id, req) => Http.axios('get', `/api/v1/users/users/base/${id}`, {}, req)