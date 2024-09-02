import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router-dom'

import LazyImage from './shared/LazyImage'

import { ROUTES } from '@/routes'
import { RandomGamesProps } from '@/types/games'

const RandomGames: React.FC<RandomGamesProps> = ({ data }) => (
  <section className="flex min-h-[fit-content] items-center xxs:flex-col xs:flex-col xs:w-full justify-between xs3:flex-row gap-5">
    {data?.map((game) => (
      <article
        key={game.id}
        className="xs:w-full aspect-video xs3:max-w-[350px]"
      >
        <div className="items-center justify-center transition-transform duration-300 transform hover:scale-105 shadow-lg dark:shadow-soft-dark game-link rounded-md flex game-container">
          <Link
            to={generatePath(ROUTES.GAME_ID, { id: game.id })}
            className="relative w-full"
            draggable="false"
          >
            <LazyImage src={game.thumbnail} alt={game.title} />
            <div className="game-title">{game.title}</div>
          </Link>
        </div>
      </article>
    ))}
  </section>
)

export default React.memo(RandomGames)
