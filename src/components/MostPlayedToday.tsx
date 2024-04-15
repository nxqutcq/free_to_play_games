import React from 'react'

import GameImage from './shared/GameImage'

import { useSortedGames } from '@/services/queries'

const MostPlayedToday: React.FC = () => {
  const { data } = useSortedGames('popularity', 4)

  return (
    <div>
      <h3 className="ml-2 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Most Played Today
      </h3>
      <div className="flex flex-col items-center gap-3 pb-3">
        {data?.map((game) => (
          <div
            key={game?.id}
            className="w-[360px] rounded-md h-[200px] game-link"
          >
            <GameImage alt={game?.title} src={game?.thumbnail} />
            <div className="game-title">{game?.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MostPlayedToday
