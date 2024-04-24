import React from 'react'
import { Link } from 'react-router-dom'

import LazyImage from './shared/LazyImage'

import { useSortedGames } from '@/services/queries'

const MostPlayedToday: React.FC = () => {
  const { data } = useSortedGames('popularity', 4)

  return (
    <section>
      <h3 className="ml-2 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Most Played Today
      </h3>
      <div className="flex min-h-[700px] w-[360px] flex-col items-center gap-3 pb-3">
        {data?.map((game) => (
          <article
            key={game?.id}
            className="flex transition-transform duration-300 transform hover:scale-95 game-link shadow-lg dark:shadow-soft-dark"
          >
            <Link
              className="relative w-[360px] rounded-md min-h-[200px]"
              to={`/games/game/${game.id}`}
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
