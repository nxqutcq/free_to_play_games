import React from 'react'
import { Link } from 'react-router-dom'

import LazyImage from './shared/LazyImage'

import { ROUTES } from '@/routes'
import { RandomGamesProps } from '@/types/games'

const RandomGames: React.FC<RandomGamesProps> = ({ data }) => (
  <section className="flex lg:h-[200px] items-center xs2:h-[750px] md:flex-row xs4:h-[800px] xs3:h-[860px] xs:h-[600px] xs1:h-[680px] sm:flex-row sm:flex-wrap md:flex-wrap justify-between w-[full] xs:flex-col md:h-[450px]">
    {data?.map((game) => (
      <article key={game.id}>
        <div className="transition-transform duration-300 transform hover:scale-105 shadow-lg dark:shadow-soft-dark game-link rounded-md flex game-container">
          <Link
            to={ROUTES.GAME_ID.replace(':id', game.id.toString())}
            className="relative h-[168px] w-[300px]"
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
