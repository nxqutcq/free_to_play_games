import React from 'react'
import { Link } from 'react-router-dom'

import { BrowserIcon, WindowsIcon } from '@/components/icons/index'
import GameImage from '@/components/shared/GameImage'
import { GamesBunchItemProps } from '@/types/games'

const GamesBunchItem: React.FC<GamesBunchItemProps> = ({ game }) => (
  <article className="rounded-xl border m-3 shadow-soft dark:shadow-soft-dark xs1:w-[375px] xs4:w-[425px] xl:p-0 lg:w-[320px] xl:w-[360px] md:w-[350px] justify-center flex flex-col items-center overflow-x-hidden sm:w-[300px] xs:w-[310px] xs2:w-[400px] xs3:w-[480px]">
    {game.id && (
      <Link
        draggable="false"
        className="rounded-xl lg:w-[320px] md:w-[350px] justify-center xl:w-[360px]"
        to={`/games/game/${game.id}`}
      >
        <div className="bg-hover-neutral-900 transition-all duration-400 flex rounded-xl flex-col w-full xl:w-[360px]">
          <div className="xl:w-[360px] lg:w-[320px] sm:w-[full] md:w-[350px] min-h-[150px] xs3:w-[full] xs:w-[full] items-center rounded-xl">
            <GameImage alt={game?.title} src={game?.thumbnail} />
          </div>
          <div className="p-3 min-h-[180px]">
            <h3 className="xs3:mb-0 mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight">
              {game?.title}
            </h3>
            <div className="flex flex-row pt-3">
              {game.genre}&nbsp;
              {game.platform === 'PC (Windows)' && (
                <div
                  title="Available on Windows"
                  className="xs3:leading-7 [&:not(:first-child)]:mt-6"
                >
                  <WindowsIcon className="windows-icon" />
                </div>
              )}
              &nbsp;
              {game.platform === 'Web Browser' && (
                <div
                  title="Available on Browser"
                  className="xs3:leading-7 [&:not(:first-child)]:mt-6"
                >
                  <BrowserIcon className="browser-icon" />
                </div>
              )}
            </div>
            <p className="xs3:mb-3 mb-2 leading-7 [&:not(:first-child)]:mt-4">
              {game?.short_description}
            </p>
            <p className="xs3:mb-3 mb-2 leading-7 [&:not(:first-child)]:mt-6">
              {game?.publisher}, {game?.release_date}
            </p>
          </div>
        </div>
      </Link>
    )}
  </article>
)

export default GamesBunchItem
