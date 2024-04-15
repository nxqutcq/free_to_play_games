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

export const getGamesByCategoryOrTag = async (category: string) => {
  try {
    const response = await axiosInstance.get<Game[]>(`games`, {
      params: {
        category: category,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching games list:', error)
    throw error
  }
}

export const getGamesByPlatform = async (platform: string) => {
  try {
    const response = await axiosInstance.get<Game[]>('games', {
      params: {
        platform: platform,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching games by platform:', error)
    throw error
  }
}

export const getSortedGames = async (sortBy: string, count: number) => {
  try {
    const response = await axiosInstance.get<Game[]>('games', {
      params: {
        'sort-by': sortBy,
      },
    })
    return response.data.slice(0, count)
  } catch (error) {
    console.error('Error fetching sorted games:', error)
    throw error
  }
}

export const getFilteredGames = async (
  platform: string,
  category: string,
  sortBy: string
) => {
  try {
    const response = await axiosInstance.get<Game[]>('games', {
      params: {
        platform: platform,
        category: category,
        'sort-by': sortBy,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching filtered games:', error)
    throw error
  }
}

export const getGamesByTags = async (tag: string, platform: string) => {
  try {
    const response = await axiosInstance.get<Game[]>('filter', {
      params: {
        tag: tag,
        platform: platform,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching games by tags:', error)
    throw error
  }
}
