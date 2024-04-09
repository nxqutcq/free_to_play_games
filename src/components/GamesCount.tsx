import React from 'react'

import usePageTitle from '@/hooks/usePageTitle'
import { GamesCountProps } from '@/types/games'

const GamesCount: React.FC<GamesCountProps> = ({ gamesCount, category }) => {
  usePageTitle(
    `${gamesCount} Free-to-play ${category} games found in our games list!`
  )
  return (
    <div className="sm:px-5 xl:px-0">
      <div>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Top Free Games for PC and Browser In {new Date().getFullYear()}!
        </h2>
      </div>
      <div>
        <p className="mb-5 flex gap-2">
          {gamesCount} {category?.toLocaleUpperCase()} games found in our games
          list!
        </p>
      </div>
    </div>
  )
}
export default GamesCount
