import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import GameInfo from '@/components/GameInfo'
import Loader from '@/components/shared/Loader'
import { Button } from '@/components/ui/button'
import { useGameDetails } from '@/services/queries'

const GamePage: React.FC = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  const { id } = useParams<{ id: string }>()

  const { data, isLoading, isError } = useGameDetails(id || '')

  if (isLoading)
    return (
      <div className="flex min-h-screen w-[1200px] justify-center items-center">
        <Loader />
      </div>
    )

  if (isError)
    return (
      <div className="min-h-screen w-[1200px]">
        <h3 className="mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
          Error fetching game
        </h3>
        <Button onClick={() => window.location.reload()} className="mt-10">
          Reload
        </Button>
      </div>
    )

  if (!data)
    return (
      <div className="min-h-screen w-[1200px]">
        <Button className="mb-10" onClick={goBack}>
          Back
        </Button>
        <h3 className="mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
          No data available
        </h3>
      </div>
    )

  return <GameInfo data={data} goBack={goBack} isLoading={isLoading} />
}
export default GamePage
