import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import GameDescription from './GameDescription'

import { GameInfoProps } from '@/types/games'

const GameInfo: React.FC<GameInfoProps> = ({ data }) => (
  <HelmetProvider>
    <article className="xxs:pt-[4rem] xs:pt-[4rem] md:mt-[5rem] xs:my-5 md:my-10 md:p-10 min-h-[max-content] w-[full] md:rounded-3xl overflow-hidden md:shadow-soft md:dark:shadow-soft-dark sm:flex sm:flex-col sm:items-start">
      <Helmet>
        <title>{`${data?.title} Download and Play`}</title>
        <meta name="description" content={data.short_description} />
      </Helmet>
      <GameDescription data={data} />
    </article>
  </HelmetProvider>
)
export default GameInfo
