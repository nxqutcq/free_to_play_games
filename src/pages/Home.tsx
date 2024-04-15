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
          <div className="min-h-[250px] bg-gray-700">
            <Recommendations />
          </div>
          <div className="flex min-h-[500px] bg-neutral-600 justify-between mb-[80px]">
            <div className="w-[800px] bg-orange-400 ">
              <NewReleases data={data} />
              <div className="flex justify-end mt-5">
                <NavLink
                  to={'/games'}
                  className="bg-background border w-[max-content] rounded-md p-3 leading-none transition-colors hover:bg-accent flex items-center justify-center gap-2"
                >
                  More Games
                  <ChevronRight />
                </NavLink>
              </div>
            </div>
            <div className="bg-slate-500 w-[370px]">
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
