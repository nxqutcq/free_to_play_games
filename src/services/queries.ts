import { useQuery } from '@tanstack/react-query'

import { getGameDetails, getGamesByCategoryOrTag, getGamesList } from './api'

export function useGamesList() {
  return useQuery({
    queryKey: ['games'],
    queryFn: getGamesList,
  })
}
export function useGameDetails(id: string) {
  return useQuery({
    queryKey: ['game', id],
    queryFn: () => getGameDetails(id),
  })
}
export function useGamesByCategoryOrTag(category: string) {
  return useQuery({
    queryKey: [`games/${category}`, category],
    queryFn: () => getGamesByCategoryOrTag(category),
  })
}
