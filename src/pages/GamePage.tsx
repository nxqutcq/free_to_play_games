import React from 'react'
import { useParams } from 'react-router-dom'

import GameInfo from '@/components/GameInfo'
import { ErrorComponent } from '@/components/shared/ErrorComponent'
import Loader from '@/components/shared/Loader'
import { NoDataComponent } from '@/components/shared/NoDataComponent'
import { useGameDetails } from '@/services/queries'

const GamePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading, isError } = useGameDetails(id || '')

  if (isLoading) return <Loader />

  if (isError) return <ErrorComponent />

  if (!data) return <NoDataComponent />

  return <GameInfo data={data} />
}
export default GamePage
