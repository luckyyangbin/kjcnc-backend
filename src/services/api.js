//跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
const BASE_URL = process.env.VUE_APP_API_BASE_URL
module.exports = {
  LOGIN: `${BASE_URL}/login`,
  ROUTES: `${BASE_URL}/routes`,
  GET_TEST: "https://ytkjcnc-3gpkm1l22fe42211-1255597613.ap-shanghai.service.tcloudbase.com/api/v1.0/d_latheTypeAll",
}
