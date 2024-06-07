import React from 'react'
import { Link, generatePath } from 'react-router-dom'

import LazyImage from './shared/LazyImage'

import { ROUTES } from '@/routes'
import { useSortedGames } from '@/services/queries'

const MostPlayedToday: React.FC = () => {
  const { data } = useSortedGames('popularity', 4)

  return (
    <section>
      <h3 className="ml-2 scroll-m-20 mb-5 text-3xl font-semibold tracking-tight first:mt-0">
        Most Played Today
      </h3>
      <div className="flex flex-col min-h-[700px] min-w-1/2 items-center gap-y-3 pb-3">
        {data?.map((game) => (
          <article
            key={game?.id}
            className="h-full first-line:transition-transform rounded-md duration-300 transform hover:scale-95 game-link shadow-lg dark:shadow-soft-dark"
          >
            <Link
              className="relative h-full"
              to={generatePath(ROUTES.GAME_ID, { id: game.id })}
              draggable="false"
            >
              <LazyImage alt={game?.title} src={game?.thumbnail} />
              <div className="game-title">{game?.title}</div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MostPlayedToday
