import {LOGIN, ROUTES} from '@/services/api'
import {request, METHOD, removeAuthorization} from '@/utils/request'

/**
 * 登录服务
 * @param name 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
// export async function login(name, password) {
//   return request(LOGIN, METHOD.POST, {
//     name: name,
//     password: password
//   })
// }
const u = "https://ytkjcnc-3gpkm1l22fe42211-1255597613.ap-shanghai.service.tcloudbase.com/api/v1.0/";
export async function login(phone,password) {
  return request(u + "b_user/find", METHOD.POST,
    {
      "query": {
        "phone": { "$eq": phone },
        "password":{"$eq": password }
      }
    }, {
      params: {
        fields: { 
          name: true,
          role: true
        },
      }
  })
}

export async function getRoutesConfig() {
  return request(ROUTES, METHOD.GET)
}

/**
 * 退出登录
 */
export function logout() {
  localStorage.removeItem(process.env.VUE_APP_ROUTES_KEY)
  localStorage.removeItem(process.env.VUE_APP_PERMISSIONS_KEY)
  localStorage.removeItem(process.env.VUE_APP_ROLES_KEY)
  //removeAuthorization()
}
export default {
  login,
  logout,
  getRoutesConfig
}
