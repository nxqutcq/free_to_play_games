import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router-dom'

import Genre from './Genre'
import PlatformIcons from './PlatformIcons'

import LazyImage from '@/components/shared/LazyImage'
import { ROUTES } from '@/routes'
import { GamesBunchItemProps } from '@/types/games'
import { formatDate, truncateString } from '@/utils'

const GamesBunchItem: React.FC<GamesBunchItemProps> = ({ game }) => (
  <article className="transition-transform w-[17rem] duration-300 transform hover:scale-95 h-[max-content] rounded-xl border hover:shadow-soft hover:dark:shadow-soft-dark justify-center flex flex-col items-center overflow-x-hidden">
    {game?.id && (
      <Link
        draggable="false"
        className="flex h-full justify-center"
        to={generatePath(ROUTES.GAME_ID, { id: game.id })}
      >
        <div className="bg-hover-neutral-900 transition-all duration-400 flex flex-col w-full">
          <div className="relative h-[9rem] w-[full] items-center rounded-xl">
            <LazyImage alt={game?.title} src={game?.thumbnail} />
            {/* <AddGameButton /> */}
          </div>
          <div className="p-5 min-h-[11.5rem]">
            <div className="flex flex-row mt-2 items-center">
              <h3 className="xs3:mb-0 flex flex-wrap overflow-hidden items-start w-full scroll-m-20 text-xl font-semibold tracking-tight">
                {game?.title}
              </h3>
              <div className="flex flex-row items-center h-[min-content]">
                <PlatformIcons platform={game.platform} />
              </div>
            </div>
            <p className="xs3:mb-1 text-sm text-[#898989] dark:text-[#a0a0a0] [&:not(:first-child)]:mt-4">
              {truncateString(game?.short_description, 80)}
            </p>
            <div className="flex text-sm items-center gap-3 w-full justify-between">
              <div className="xs3:my-3 my-2 flex flex-col items-start">
                <p className="mb-1 text-[#898989] dark:text-[ #a0a0a0] italic flex flex-wrap">
                  {game?.publisher}
                </p>
                <p className="text-[#898989] dark:text-[ #a0a0a0]">
                  {formatDate(game?.release_date)}{' '}
                </p>
              </div>
              <div>{game?.genre && <Genre genre={game.genre} />}</div>
            </div>
          </div>
        </div>
      </Link>
    )}
  </article>
)

export default GamesBunchItem
