import axios from 'axios'
const http = axios.create({
  baseURL: 'http://some-domain.com/api/'
})
http.interceptors.request.use(function (config) {
  if (config.url !== '/login') {
    config.headers.Authorization = window.localStorage.getItem('token')
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
http.interceptors.response.use(function (response) {
  return response
})
export default http
