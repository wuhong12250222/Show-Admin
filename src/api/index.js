import request from '../utils/request.js'
export const login = data => request({
  url: '/login',
  method: 'POST',
  data: {
    username: data.username,
    password: data.password
  }
})
