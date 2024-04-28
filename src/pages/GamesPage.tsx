import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
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
  const [limit, setLimit] = useState(10)

  const [sortBy, setSortBy] = useState('alphabetical')
  const [platform, setPlatform] = useState('all')

  const { refetch, isLoading, isError, data } = useFilteredGames(
    platform,
    category || '',
    sortBy
  )

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const loadMoreGames = () => {
    setLimit((oldLimit) => oldLimit + 10)
  }

  useEffect(() => {
    refetch()
    console.log(category)
  }, [category, refetch])

  useEffect(() => {
    if (inView) {
      loadMoreGames()
    }
  }, [inView])

  useEffect(() => {
    if (data) {
      setRandomGames(getRandomGames(data, 3))
    }
  }, [data])

  if (isLoading) return <Loader />

  if (isError) return <ErrorComponent reload={() => window.location.reload()} />

  if (!data) return <NoDataComponent goBack={goBack} />

  return (
    <section className="mb-10 min-h-screen w-[full]">
      <div className="px-[10px]">
        <GamesCount category={category} gamesCount={data.length} />
        <RandomGames data={randomGames} />
        <SortingPanel
          onSortChange={setSortBy}
          onCategoryChange={(newCategory: string) => {
            console.log('Category changed:', newCategory)
          }}
          onPlatformChange={(newPlatform: string) => {
            setPlatform(newPlatform)
          }}
        />
        <GamesBunch data={data.slice(0, limit)} />
      </div>
      {limit < data.length && <div ref={ref} className="flex h-[80px]"></div>}
    </section>
  )
}

export default GamesPage
