import { Game } from '@/types/games'

export const getRandomGames = (data: Game[], count: number): Game[] => {
  const randomIndices = new Set<number>()
  while (randomIndices.size < count) {
    randomIndices.add(Math.floor(Math.random() * data.length))
  }
  return Array.from(randomIndices).map((index) => data[index as number])
}
