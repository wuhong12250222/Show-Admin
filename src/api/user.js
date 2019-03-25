import request from '../utils/request.js'
export const userlist = ({ pagenum = 1, pagesize = 5 }) => {
  return request({
    url: '/users',
    method: 'GET',
    params: {
      pagenum,
      pagesize
    }
  })
}
export const adduser = (data) => {
  return request({
    url: '/users',
    method: 'POST',
    data: {
      username: data.username,
      password: data.password,
      email: data.email,
      mobile: data.mobile
    }
  }).then(res => res.data)
}
// export const changeState = (id, state) => request({
//   url: ''
// })
