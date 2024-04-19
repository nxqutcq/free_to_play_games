import { ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { NavLink, useNavigate } from 'react-router-dom'

import FrequentlyAskedQuestions from '@/components/FAQ'
import { Jumbotron } from '@/components/Jumbotron'
import MostPlayedToday from '@/components/MostPlayedToday'
import NewReleases from '@/components/NewReleases'
import Recommendations from '@/components/Recommendations'
import { ErrorComponent } from '@/components/shared/ErrorComponent'
import Loader from '@/components/shared/Loader'
import { NoDataComponent } from '@/components/shared/NoDataComponent'
import { useSortedGames } from '@/services/queries'
import { Game } from '@/types/games'
import { getRandomGames } from '@/utils'

const Home: React.FC = () => {
  const [randomGames, setRandomGames] = useState<Game[]>()
  const { data, isLoading, isError } = useSortedGames('release-date', 30)
  const firstSevenGames = data?.slice(0, 7)

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
    <HelmetProvider>
      <main className="justify-center flex min-h-screen items-start">
        <Helmet>
          <title>Discover the best free-to-play games!</title>
          <meta
            name="description"
            content="Track what you've played and search for what to play next!"
          />
          <meta
            property="og:title"
            content="Discover the best free-to-play games!"
          />
          <meta
            property="og:description"
            content="Track what you've played and search for what to play next!"
          />
          <meta
            property="og:image"
            content="https://psv4.userapi.com/c909618/u250373309/docs/d49/951cd3d248ca/games.png?extra=1hDPGpaBgpde0QRpFSGjRgrCvFiKOgtkwFA1Qmq37c2HlvpvO6RxcyhbMNPLlySSqC9zrFmEocAoQbfRzPf2iUP__cLAy5MisGXxb_pO_NyHzPsQs2yjqHf5jlV-qrSWP8AbePpJWiCJWJMT76ws-zk"
          />
        </Helmet>

        <div className="flex flex-col w-full items-center">
          <Jumbotron />
          <div className="w-[1200px] mt-5 flex flex-col mb-2">
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
            <div className="flex w-full">
              <FrequentlyAskedQuestions />
            </div>
          </div>
        </div>
      </main>
    </HelmetProvider>
  )
}

export default Home
