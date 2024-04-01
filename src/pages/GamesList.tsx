import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFilteredGames } from '../services/queries'

import GamesListItem from '@/components/GamesListItem'
import GamesSortingPanel from '@/components/GamesSortingPanel'
import Loader from '@/components/shared/Loader'
import { Button } from '@/components/ui/button'
import { Game } from '@/types/games'
import { getRandomGames } from '@/utils'

let randomGames: Game[] | undefined

const GamesList: React.FC = () => {
  const [sortBy, setSortBy] = useState('relevance')
  const [category, setCategory] = useState('shooter')
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
  if (data) {
    randomGames = getRandomGames(data, 3)
  }
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
          Error fetching games
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

  return (
    <div className="mb-10 min-h-screen w-[1200px]">
      <GamesSortingPanel
        gamesCount={data.length}
        data={randomGames}
        isLoading={isLoading}
        onSortChange={setSortBy}
        onCategoryChange={setCategory}
        onPlatformChange={setPlatform}
      />
      <div className="xl:gap-0 xl:justify-between overflow-x-hidden flex flex-wrap items-start justify-center gap-2 md:gap-0 lg:gap-2 w-full flex-row">
        {data?.map((game) => (
          <GamesListItem key={game.id} game={game} isLoading={isLoading} />
        ))}
      </div>
    </div>
  )
}

export default GamesList
