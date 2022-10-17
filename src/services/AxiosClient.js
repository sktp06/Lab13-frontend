import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://34.229.7.175:8999',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default apiClient
