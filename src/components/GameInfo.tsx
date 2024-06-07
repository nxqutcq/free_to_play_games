import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import GameDescription from './GameDescription'

import { GameInfoProps } from '@/types/games'

const GameInfo: React.FC<GameInfoProps> = ({ data }) => (
  <HelmetProvider>
    <article className="my-10 p-10 min-h-[max-content] w-[full] rounded-3xl overflow-hidden shadow-soft dark:shadow-soft-dark sm:flex sm:flex-col sm:items-start">
      <Helmet>
        <title>{`${data?.title} Download and Play`}</title>
        <meta name="description" content={data.short_description} />
      </Helmet>
      <GameDescription data={data} />
    </article>
  </HelmetProvider>
)
export default GameInfo
