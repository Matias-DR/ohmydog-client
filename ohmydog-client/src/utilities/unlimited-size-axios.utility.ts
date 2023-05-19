import axios from 'axios'

export const axiosInstance = axios.create({
    maxContentLength: 50 * 1024 * 1024 * 1024 * 1024
})