import React from 'react'

import RandomGames from './RandomGames'

import { RandomGamesProps } from '@/types/games'

const Recommendations: React.FC<RandomGamesProps> = ({ data }) => {
  return (
    <div>
      <h3 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Personalized Recommendations
      </h3>
      <div className="flex h-[200px] justify-between items-center">
        <RandomGames data={data} />
      </div>
    </div>
  )
}

export default Recommendations
