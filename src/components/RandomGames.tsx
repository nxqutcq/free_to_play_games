import React from 'react'
import { Link } from 'react-router-dom'

import GameImage from './shared/GameImage'

import { RandomGamesProps } from '@/types/games'

const RandomGames: React.FC<RandomGamesProps> = ({ data }) => {
  return (
    <div className="flex xs:h-[600px] justify-between xs:flex-col">
      {data.map((game) => (
        <Link
          key={game.id}
          className="mb-5 w-full"
          to={`/games/game/${game.id}`}
        >
          <GameImage src={game.thumbnail} alt={game.title} />
        </Link>
      ))}
    </div>
  )
}

export default RandomGames
