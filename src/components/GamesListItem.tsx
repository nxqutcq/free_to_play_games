import React from 'react'
import { Link } from 'react-router-dom'

import GameImage from '@/components/shared/GameImage'
import { Button } from '@/components/ui/button'
import { GamesListItemProps } from '@/types/games'

const GamesListItem: React.FC<GamesListItemProps> = ({ game, isLoading }) => (
  <article
    className="flex flex-col w-60 p-5 items-center overflow-x-hidden"
    key={game?.id}
  >
    <div className="w-[220px]">
      <GameImage
        alt={game?.title}
        src={game?.thumbnail}
        isLoading={isLoading}
      />
    </div>
    <h3 className="mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
      {game?.title}
    </h3>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {game?.short_description}
    </p>
    {game.id && (
      <Link to={`/games/game/${game.id}`}>
        <Button className="mt-5">Click me</Button>
      </Link>
    )}
  </article>
)

export default GamesListItem
