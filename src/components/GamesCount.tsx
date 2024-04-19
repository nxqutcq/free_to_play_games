import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { GamesCountProps } from '@/types/games'

const GamesCount: React.FC<GamesCountProps> = ({ gamesCount, category }) => (
  <HelmetProvider>
    <div className="mt-10 sm:px-5 xl:px-0 xl:w-[1200px]">
      <Helmet>
        <title>{`${gamesCount} Free-to-play ${category} games found in our games list!`}</title>
      </Helmet>
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
  </HelmetProvider>
)
export default GamesCount
