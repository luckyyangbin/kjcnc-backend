import {LOGIN, ROUTES,GET_TEST} from '@/services/api'
import {request, METHOD, removeAuthorization} from '@/utils/request'


export async function testAxio() {
  return request("https://ytkjcnc-3gpkm1l22fe42211-1255597613.ap-shanghai.service.tcloudbase.com/api/v1.0/d_latheTypeAll", METHOD.GET, 
  {
	  limit:1
  })
}
export default {
  testAxio
}
