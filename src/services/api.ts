import axios from 'axios'

import { Game, GameDetails } from '../types/games'

const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/'
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
})

export const getGamesList = async () => {
  try {
    const response = await axiosInstance.get<Game[]>('games')
    return response.data
  } catch (error) {
    console.error('Error fetching games list:', error)
    throw error
  }
}
export const getGameDetails = async (id: string) => {
  try {
    const response = await axiosInstance.get<GameDetails>(`game?id=${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching games list:', error)
    throw error
  }
}