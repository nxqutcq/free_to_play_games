import { useQuery } from '@tanstack/react-query'

import { getGamesList } from './api'

export function useGamesList() {
  return useQuery({
    queryKey: ['games'],
    queryFn: getGamesList,
  })
}
