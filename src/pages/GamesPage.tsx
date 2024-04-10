import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
  const { category } = useParams<{ category: string }>()

  const [sortBy, setSortBy] = useState('alphabetical')
  const [platform, setPlatform] = useState('all')

  const { refetch, isLoading, isError, data } = useFilteredGames(
    platform,
    category || '',
    sortBy
  )
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  useEffect(() => {
    refetch()
  }, [category, refetch])

  const handleCategoryChange = (newCategory: string) => {
    navigate(`/games/${newCategory}`)
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
      <GamesCount category={category} gamesCount={data.length} />
      <RandomGames data={randomGames} />
      <SortingPanel
        onSortChange={setSortBy}
        onCategoryChange={handleCategoryChange}
        onPlatformChange={setPlatform}
      />
      <GamesBunch data={data} />
    </div>
  )
}

export default GamesPage
