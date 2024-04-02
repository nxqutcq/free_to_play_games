import React from 'react'
import { Link } from 'react-router-dom'

import GameImage from './shared/GameImage'

import { RandomGamesProps } from '@/types/games'

const RandomGames: React.FC<RandomGamesProps> = ({ data }) => {
  return (
    <div className="flex h-[230px] gap-5 justify-between xs:flex-col overflow-hidden">
      {data.map((game) => (
        <Link
          key={game.id}
          className="mb-10 w-full flex"
          to={`/games/game/${game.id}`}
        >
          <GameImage src={game.thumbnail} alt={game.title} />
        </Link>
      ))}
    </div>
  )
}

export default RandomGames
