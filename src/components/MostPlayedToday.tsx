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
      <div className="flex items-center flex-col w-full">
        <div className="flex xxs:flex-col justify-center xs:flex-col flex-wrap xs3:flex-row xs3:gap-x-5 md:flex-col w-full items-center gap-y-3 pb-3">
          {mostPlayedGames?.map((game) => (
            <article
              key={game?.id}
              className="w-full xs3:max-w-[200px] md:max-w-[350px] aspect-video first-line:transition-transform rounded-md duration-300 transform hover:scale-95 game-link shadow-lg dark:shadow-soft-dark"
            >
              <Link
                className="relative w-full"
                to={generatePath(ROUTES.GAME_ID, { id: game.id })}
                draggable="false"
              >
                <div className="w-full">
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
