import React from 'react'
import { Link } from 'react-router-dom'

import Genre from './Genre'
import PlatformIcons from './PlatformIcons'

import GameImage from '@/components/shared/GameImage'
import { GamesBunchItemProps } from '@/types/games'
import { formatDate, truncateString } from '@/utils'

const GamesListItem: React.FC<GamesBunchItemProps> = ({ game }) => (
  <article className="hover:bg-accent transition-colors rounded-xl border m-3 shadow-soft dark:shadow-soft-dark xs1:w-[375px] xs4:w-[425px] xl:p-0 lg:w-[320px] xl:w-[360px] md:w-[350px] justify-center flex flex-col items-center overflow-x-hidden sm:w-[300px] xs:w-[310px] xs2:w-[400px] xs3:w-[480px]">
    {game?.id && (
      <Link
        draggable="false"
        className="rounded-xl lg:w-[320px] md:w-[350px] justify-center xl:w-[360px]"
        to={`/games/game/${game.id}`}
      >
        <div className="bg-hover-neutral-900 transition-all duration-400 flex rounded-xl flex-col w-full xl:w-[360px]">
          <div className="xl:w-[360px] lg:w-[320px] sm:w-[full] md:w-[350px] min-h-[150px] xs3:w-[full] xs:w-[full] items-center rounded-xl">
            <GameImage alt={game?.title} src={game?.thumbnail} />
          </div>
          <div className="p-5 min-h-[180px]">
            <div className="flex flex-row">
              <h3 className="xs3:mb-0 mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
                {game?.title}
              </h3>
              <div className="flex flex-row pt-3 items-center h-[min-content]">
                <PlatformIcons platform={game.platform} />
              </div>
            </div>
            <p className="xs3:mb-1 leading-7 [&:not(:first-child)]:mt-4">
              {truncateString(game?.short_description, 80)}
            </p>
            <div className="flex items-center w-full justify-between">
              <div className="xs3:my-3 my-2 flex flex-col items-start">
                <p className="mb-1">{game?.publisher}</p>
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
