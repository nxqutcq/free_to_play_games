import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

import { useFilteredGames } from '../services/queries'

import GamesBunch from '@/components/GamesBunch'
import GamesCount from '@/components/GamesCount'
import RandomGames from '@/components/RandomGames'
import { ErrorComponent } from '@/components/shared/ErrorComponent'
import Loader from '@/components/shared/Loader'
import { NoDataComponent } from '@/components/shared/NoDataComponent'
import SortingSelectors from '@/components/SortingSelectors'
import { Game } from '@/types/games'
import { getRandomGames } from '@/utils'

const GamesPage: React.FC = () => {
  const [randomGames, setRandomGames] = useState<Game[] | undefined>(undefined)
  const { category } = useParams<{ category: string }>()
  const [limit, setLimit] = useState(10)
  const [sortBy, setSortBy] = useState('alphabetical')
  const [platform, setPlatform] = useState('all')

  const navigate = useNavigate()
  const location = useLocation()

  const { refetch, isLoading, isError, data } = useFilteredGames(
    platform,
    category || '',
    sortBy
  )

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (platform !== 'all') params.set('platform', platform)
    if (category) params.set('category', category)
    params.set('sort-by', sortBy)

    navigate({ pathname: location.pathname, search: params.toString() })
  }, [platform, category, sortBy, navigate, location.pathname, location.search])

  useEffect(() => {
    if (
      category !== undefined &&
      platform !== undefined &&
      sortBy !== undefined
    ) {
      refetch()
    }
  }, [category, platform, sortBy, refetch])

  useEffect(() => {
    if (inView && data && limit < data.length) {
      setLimit((prevLimit) => prevLimit + 10)
    }
  }, [inView, data, limit])

  useEffect(() => {
    if (data && data.length > 0) {
      setRandomGames(getRandomGames(data, 3))
    }
  }, [data])

  if (isLoading) return <Loader />
  if (isError) return <ErrorComponent />
  if (!data || data.length === 0) return <NoDataComponent />

  return (
    <section className="mb-10 min-h-screen w-full">
      <div className="px-[10px]">
        <GamesCount category={category} gamesCount={data.length} />
        {randomGames && <RandomGames data={randomGames} />}
        <SortingSelectors
          onSortChange={setSortBy}
          onCategoryChange={(newCategory: string) => {
            navigate(`/games/${newCategory}`)
          }}
          onPlatformChange={setPlatform}
        />
        <GamesBunch data={data.slice(0, limit)} />
      </div>
      {limit < data.length && <div ref={ref} className="flex h-[80px]"></div>}
    </section>
  )
}

export default GamesPage
