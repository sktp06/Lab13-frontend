import apiClient from '@/services/AxiosClient.js'
export default {
  login(user) {
    return apiClient
      .post('/auth', {
        username: user.username,
        password: user.password
      })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        return Promise.resolve(response.data)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  }
}
