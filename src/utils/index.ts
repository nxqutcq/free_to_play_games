import { allGenres } from '@/constants'
import { Game } from '@/types/games'

export const getRandomGames = (data: Game[], count: number): Game[] => {
  const randomIndices = new Set<number>()
  while (randomIndices.size < count) {
    randomIndices.add(Math.floor(Math.random() * data.length))
  }
  return Array.from(randomIndices).map((index) => data[index as number])
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}

export const truncateString = (str: string, num: number): string => {
  return str.length > num ? str.substring(0, num) + '...' : str
}

export const getGenreUrl = (genreLabel: string) => {
  const genreObject = allGenres.find((genre) => genre.label === genreLabel)
  return `/games/${genreObject?.value}`
}
