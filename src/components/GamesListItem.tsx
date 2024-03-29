import React from 'react'
import { Link } from 'react-router-dom'

import GameImage from '@/components/shared/GameImage'
import { Button } from '@/components/ui/button'
import { GamesListItemProps } from '@/types/games'

const GamesListItem: React.FC<GamesListItemProps> = ({ game, isLoading }) => (
  <article className="xl:p-0 lg:w-[320px] xl:w-[360px] md:w-[350px] md:flex-row flex flex-col p-5 items-center overflow-x-hidden sm:w-[300px] xs:w-[320px] xs2:w-[400px] xs3:w-[480px]">
    <div className="flex flex-col w-full xl:w-[360px] md:w-[300px]">
      <div className="xl:w-[360px] sm:w-[260px] md:w-[300px] min-h-[150px] xs3:w-[440px] xs:w-[full] items-center">
        <GameImage
          alt={game?.title}
          src={game?.thumbnail}
          isLoading={isLoading}
        />
      </div>
      <h3 className="xs3:mb-0 mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
        {game?.title}
      </h3>
      <p className="xs3:mb-3 mb-10 leading-7 [&:not(:first-child)]:mt-6">
        {game?.short_description}
      </p>
      {game.id && (
        <Link className="mb-5 w-full" to={`/games/game/${game.id}`}>
          <Button className="xs3:mt-2 xs:mt-5 xs:w-full">Details</Button>
        </Link>
      )}
    </div>
  </article>
)

export default GamesListItem
