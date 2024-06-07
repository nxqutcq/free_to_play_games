import { ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'

import FrequentlyAskedQuestions from '@/components/FAQ'
import { Jumbotron } from '@/components/Jumbotron'
import MostPlayedToday from '@/components/MostPlayedToday'
import NewReleases from '@/components/NewReleases'
import Recommendations from '@/components/Recommendations'
import { ErrorComponent } from '@/components/shared/ErrorComponent'
import Loader from '@/components/shared/Loader'
import { NoDataComponent } from '@/components/shared/NoDataComponent'
import { ROUTES } from '@/routes'
import { useSortedGames } from '@/services/queries'
import { Game } from '@/types/games'
import { getRandomGames } from '@/utils'

const Home: React.FC = () => {
  const [randomGames, setRandomGames] = useState<Game[]>()
  const { data, isLoading, isError } = useSortedGames('release-date', 30)
  const firstSevenGames = data?.slice(0, 7)

  useEffect(() => {
    if (data) {
      setRandomGames(getRandomGames(data, 3))
    }
  }, [data])

  if (isLoading) return <Loader />

  if (isError) return <ErrorComponent />

  if (!data) return <NoDataComponent />

  return (
    <HelmetProvider>
      <main className="w-[full] min-h-screen">
        <Helmet>
          <title>Discover the best free-to-play games!</title>
          <meta
            name="description"
            content="Track what you've played and search for what to play next!"
          />
        </Helmet>
        <div className="flex flex-col w-[full] items-center">
          <Jumbotron />
          <div className="max-w-[1140px] w-full mt-5 flex flex-col mb-2">
            <Recommendations data={randomGames} />
            <div className="flex justify-between xs:flex-col md:flex-row gap-5 flex-row w-[full] min-h-[500px]">
              <NewReleases data={firstSevenGames || []} />
              <MostPlayedToday />
            </div>
            <div className="flex justify-end mb-[5rem]">
              <NavLink
                to={ROUTES.GAMES}
                className="border w-[max-content] rounded-md p-3 leading-none transition-colors hover:bg-accent flex items-center justify-center gap-2"
              >
                More Games
                <ChevronRight />
              </NavLink>
            </div>
            <FrequentlyAskedQuestions />
          </div>
        </div>
      </main>
    </HelmetProvider>
  )
}

export default Home
