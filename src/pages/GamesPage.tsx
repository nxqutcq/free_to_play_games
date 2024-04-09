import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFilteredGames } from '../services/queries'

import GamesBunch from '@/components/GamesBunch'
import GamesCount from '@/components/GamesCount'
import RandomGames from '@/components/RandomGames'
import { ErrorComponent } from '@/components/shared/ErrorComponent'
import Loader from '@/components/shared/Loader'
import { NoDataComponent } from '@/components/shared/NoDataComponent'
import SortingPanel from '@/components/SortingPanel'
import { Game } from '@/types/games'
import { getRandomGames } from '@/utils'

const GamesPage: React.FC = () => {
  const [randomGames, setRandomGames] = useState<Game[] | undefined>(undefined)

  const [sortBy, setSortBy] = useState('relevance')
  const [category, setCategory] = useState('sci-fi')
  const [platform, setPlatform] = useState('all')

  const { isLoading, isError, data } = useFilteredGames(
    platform,
    category,
    sortBy
  )

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (data) {
      setRandomGames(getRandomGames(data, 3))
    }
  }, [data])

  if (isLoading) return <Loader />

  if (isError) return <ErrorComponent reload={() => window.location.reload()} />

  if (!data) return <NoDataComponent goBack={goBack} />

  return (
    <div className="mb-10 min-h-screen w-[1200px]">
      <GamesCount gamesCount={data.length} />
      <RandomGames data={randomGames} />
      <SortingPanel
        onSortChange={setSortBy}
        onCategoryChange={setCategory}
        onPlatformChange={setPlatform}
      />
      <GamesBunch data={data} />
    </div>
  )
}

export default GamesPage
