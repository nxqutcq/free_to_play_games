import { ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import FrequentlyAskedQuestions from '@/components/FAQ'
import MostPlayedToday from '@/components/MostPlayedToday'
import NewReleases from '@/components/NewReleases'
import Recommendations from '@/components/Recommendations'
import { ErrorComponent } from '@/components/shared/ErrorComponent'
import Loader from '@/components/shared/Loader'
import { NoDataComponent } from '@/components/shared/NoDataComponent'
import usePageTitle from '@/hooks/usePageTitle'
import { useSortedGames } from '@/services/queries'
import { Game } from '@/types/games'
import { getRandomGames } from '@/utils'

const Home: React.FC = () => {
  const [randomGames, setRandomGames] = useState<Game[] | undefined>(undefined)
  usePageTitle('Home')

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const { data, isLoading, isError } = useSortedGames('release-date', 30)
  const firstSevenGames = data?.slice(0, 7)

  useEffect(() => {
    if (data) {
      setRandomGames(getRandomGames(data, 3))
    }
  }, [data])

  if (isLoading) return <Loader />

  if (isError) return <ErrorComponent reload={() => window.location.reload()} />

  if (!data) return <NoDataComponent goBack={goBack} />

  return (
    <main className="mx-auto flex min-h-screen overflow-x-hidden w-full items-start mt-2">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full mb-2">
          <div className="min-h-[250px] mb-10">
            <Recommendations data={randomGames} />
          </div>
          <div className="flex min-h-[500px] justify-between mb-[80px]">
            <div className="w-[800px]">
              <NewReleases data={firstSevenGames || []} />
              <div className="flex justify-end mt-5">
                <NavLink
                  to={'/games'}
                  className="border w-[max-content] rounded-md p-3 leading-none transition-colors hover:bg-accent flex items-center justify-center gap-2"
                >
                  More Games
                  <ChevronRight />
                </NavLink>
              </div>
            </div>
            <div className="w-[370px]">
              <MostPlayedToday />
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </main>
  )
}

export default Home
