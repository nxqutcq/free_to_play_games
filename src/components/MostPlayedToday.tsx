import React from 'react'
import { Link, generatePath } from 'react-router-dom'

import LazyImage from './shared/LazyImage'

import { ROUTES } from '@/routes'
import { MostPlayedGamesProps } from '@/types/games'

const MostPlayedToday: React.FC<MostPlayedGamesProps> = ({
  mostPlayedGames,
}) => {
  if (!mostPlayedGames || mostPlayedGames.length === 0) return null
  return (
    <section>
      <h3 className="ml-2 scroll-m-20 mb-5 text-2xl font-semibold tracking-tight first:mt-0">
        Most Played Today
      </h3>
      <div className="flex min-h-[800px] items-center flex-col w-full">
        <div className="flex flex-col w-full min-h-[160px] items-center gap-y-3 pb-3">
          {mostPlayedGames?.map((game) => (
            <article
              key={game?.id}
              className="w-full min-h-[160px] flex max-w-[350px] first-line:transition-transform rounded-md duration-300 transform hover:scale-95 game-link shadow-lg dark:shadow-soft-dark"
            >
              <Link
                className="relative flex w-full"
                to={generatePath(ROUTES.GAME_ID, { id: game.id })}
                draggable="false"
              >
                <div className="flex w-full">
                  <LazyImage alt={game?.title} src={game?.thumbnail} />
                </div>
                <div className="game-title">{game?.title}</div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(MostPlayedToday)
