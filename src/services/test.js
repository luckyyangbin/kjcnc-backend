import { LOGIN, ROUTES, GET_TEST } from '@/services/api'
import { request, METHOD, removeAuthorization } from '@/utils/request'

const u = "https://ytkjcnc-3gpkm1l22fe42211-1255597613.ap-shanghai.service.tcloudbase.com/api/v1.0/";

export async function testAxio(phone,password) {
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
export default {
  testAxio
}
