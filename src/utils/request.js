import axios from 'axios'
import router from '../router/router.js'
const http = axios.create({
  baseURL: 'http://localhost:8888/api/private/v1/'
})
http.interceptors.request.use(function (config) {
  if (config.url !== '/login') {
    config.headers.Authorization = window.localStorage.getItem('token')
  }
  return config
}, function (error) {
  Promise.reject(error)
})
http.interceptors.response.use(function (response) {
  if (response.data.meta.status === 401) {
    return router.replace('/login')
  }
  return response
}, function (error) {
  Promise.reject(error)
})
export default http
