import React, { lazy, Suspense } from 'react'

import FetchingLoader from './shared/FetchingLoader'

import { GamesBunchProps } from '@/types/games'

const GamesBunchItem = lazy(() => import('./GamesBunchItem'))

const GamesBunch: React.FC<GamesBunchProps> = ({ data }) => (
  <section className="grid min-h-screen gap-x-2 items-start justify-items-center grid-cols-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 w-[full]">
    <Suspense fallback={<FetchingLoader />}>
      {data?.map((game) => <GamesBunchItem key={game.id} game={game} />)}
    </Suspense>
  </section>
)

export default GamesBunch
