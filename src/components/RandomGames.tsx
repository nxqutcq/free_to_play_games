import React from 'react'
import { Link } from 'react-router-dom'

import GameImage from './shared/GameImage'

import { RandomGamesProps } from '@/types/games'

const RandomGames: React.FC<RandomGamesProps> = ({ data }) => {
  return (
    <div className="xl:px-0 flex lg:h-[200px] xs2:h-[750px] md:flex-row xs4:h-[800px] xs3:h-[860px] xs:h-[600px] xs1:h-[680px] sm:pl-5 sm:pr-5 sm:flex-row sm:flex-wrap sm:h-[320px] md:flex-wrap justify-between xs:flex-col md:pl-5 md:pr-5 md:h-[450px]">
      {data.map((game) => (
        <Link
          key={game.id}
          className="mb-5 sm:mb-0"
          to={`/games/game/${game.id}`}
        >
          <div className="flex min-h-[180px] md:w-[350px] sm:w-[250px] lg:w-[300px] sm:min-h-[160px]">
            <GameImage src={game.thumbnail} alt={game.title} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default RandomGames
