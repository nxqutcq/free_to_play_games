import { useQuery } from '@tanstack/react-query'

import { getGameDetails, getGamesList } from './api'

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
