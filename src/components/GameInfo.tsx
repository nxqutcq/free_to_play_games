import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import GameDescription from './GameDescription'

import { GameInfoProps } from '@/types/games'

const GameInfo: React.FC<GameInfoProps> = ({ data, goBack }) => (
  <HelmetProvider>
    <article className="mt-10 p-10 min-h-[max-content] mb-10 w-[full] rounded-3xl overflow-hidden shadow-soft dark:shadow-soft-dark sm:flex sm:flex-col sm:items-start">
      <Helmet>
        <title>{`${data?.title} Download and Play`}</title>
        <meta name="description" content={data.short_description} />
        <meta
          property="og:title"
          content={`${data?.title} Download and Play`}
        />
        <meta property="og:description" content={data.short_description} />
        <meta property="og:image" content={data.thumbnail} />
      </Helmet>
      <GameDescription data={data} goBack={goBack} />
    </article>
  </HelmetProvider>
)
export default GameInfo
