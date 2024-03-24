import axios from 'axios'

const BASE_URL = 'https://www.freetogame.com/api/'
const axiosInstance = axios.create({ baseURL: BASE_URL })

export const getGamesList = async () => {
  return await axiosInstance.get<>
}
