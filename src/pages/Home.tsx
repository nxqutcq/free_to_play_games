import { ChevronRight } from 'lucide-react'
import React from 'react'
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

const Home: React.FC = () => {
  usePageTitle('Home')

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const { data, isLoading, isError } = useSortedGames('release-date')

  if (isLoading) return <Loader />

  if (isError) return <ErrorComponent reload={() => window.location.reload()} />

  if (!data) return <NoDataComponent goBack={goBack} />

  return (
    <main className="mx-auto flex min-h-screen overflow-x-hidden w-full items-start mt-2 p-5;">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full mb-2">
          <div className="min-h-[250px]">
            <Recommendations />
          </div>
          <div className="flex bg-slate-500 min-h-[500px]">
            <div className="w-[850px] bg-orange-400">
              <NewReleases />
            </div>
            <div>
              <MostPlayedToday />
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-[80px]">
          <NavLink
            to={'/games'}
            className="bg-background border w-[max-content] rounded-md p-3 leading-none transition-colors hover:bg-accent flex items-center justify-center gap-2"
          >
            More Games
            <ChevronRight />
          </NavLink>
        </div>
        <div className="flex w-full">
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </main>
  )
}

export default Home
