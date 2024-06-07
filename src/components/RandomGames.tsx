import React from 'react'
import { Link } from 'react-router-dom'
import { generatePath } from 'react-router-dom'

import LazyImage from './shared/LazyImage'

import { ROUTES } from '@/routes'
import { RandomGamesProps } from '@/types/games'

const RandomGames: React.FC<RandomGamesProps> = ({ data }) => (
  <section className="flex xs:min-h-[520px] items-center xs:flex-col xs:w-full justify-between md:flex-row gap-5">
    {data?.map((game) => (
      <article key={game.id} className="xs:w-full xs:min-h-[160px]">
        <div className="items-center justify-center transition-transform duration-300 transform hover:scale-105 shadow-lg dark:shadow-soft-dark game-link rounded-md flex game-container">
          <Link
            to={generatePath(ROUTES.GAME_ID, { id: game.id })}
            className="relative h-[fit-content] md:max-w-[300px] xs:max-w-[full]"
            draggable="false"
          >
            <LazyImage src={game.thumbnail} alt={game.title} />
            <div className="game-title">{game.title}</div>
          </Link>
        </div>
      </article>
    ))}
    {!data && (
      <div className="xs:min-[620px] min-h-[380px] overflow-x-hidden"></div>
    )}
  </section>
)

export default RandomGames
