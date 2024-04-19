import React, { lazy, Suspense } from 'react'

import FetchingLoader from './shared/FetchingLoader'

import { GamesBunchProps } from '@/types/games'

const GamesBunchItem = lazy(() => import('./GamesBunchItem'))

const GamesBunch: React.FC<GamesBunchProps> = ({ data }) => (
  <div className="grid min-h-screen grid-cols-4 gap-3 xl:w-[1200px] flex-row">
    <Suspense fallback={<FetchingLoader />}>
      {data?.map((game) => <GamesBunchItem key={game.id} game={game} />)}
    </Suspense>
  </div>
)

export default GamesBunch
