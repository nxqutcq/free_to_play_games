import React from 'react'
import { Link } from 'react-router-dom'

import Genre from './Genre'
import PlatformIcons from './PlatformIcons'

import GameImage from '@/components/shared/GameImage'
import { GamesBunchItemProps } from '@/types/games'
import { formatDate, truncateString } from '@/utils'

const GamesListItem: React.FC<GamesBunchItemProps> = ({ game }) => (
  <article className="hover:-translate-y-1 transition h-[max-content] rounded-xl border hover:shadow-soft hover:dark:shadow-soft-dark justify-center flex flex-col items-center overflow-x-hidden">
    {game?.id && (
      <Link
        draggable="false"
        className="flex h-full justify-center xl:w-[290px]"
        to={`/games/game/${game.id}`}
      >
        <div className="bg-hover-neutral-900 transition-all duration-400 flex flex-col w-full xl:w-[290px]">
          <div className="xl:w-[290px] min-h-[150px] items-center rounded-xl">
            <GameImage alt={game?.title} src={game?.thumbnail} />
          </div>
          <div className="p-5 min-h-[180px]">
            <div className="flex flex-row items-center">
              <h3 className="xs3:mb-0 mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
                {game?.title}
              </h3>
              <div className="flex flex-row items-center h-[min-content]">
                <PlatformIcons platform={game.platform} />
              </div>
            </div>
            <p className="xs3:mb-1 leading-7 [&:not(:first-child)]:mt-4">
              {truncateString(game?.short_description, 80)}
            </p>
            <div className="flex items-center w-full justify-between">
              <div className="xs3:my-3 my-2 flex flex-col items-start">
                <p className="mb-1 italic">{game?.publisher}</p>
                <p>{formatDate(game?.release_date)} </p>
              </div>
              <div>{game?.genre && <Genre genre={game.genre} />}</div>
            </div>
          </div>
        </div>
      </Link>
    )}
  </article>
)

export default GamesListItem
