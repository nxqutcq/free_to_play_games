import React from 'react'
import { Helmet } from 'react-helmet'

import GameDescription from './GameDescription'

import { GameInfoProps } from '@/types/games'

const GameInfo: React.FC<GameInfoProps> = ({ data, goBack }) => (
  <article className="mt-10 p-10 xs3:w-[480px] xs4:w-[425px] xs1:w-[375px] xs2:w-[400px] min-h-[max-content] mb-10 xl:w-[1200px] lg:w-[1024px] rounded-3xl overflow-hidden shadow-soft dark:shadow-soft-dark sm:flex sm:flex-col sm:items-start sm:w-[640px] md:w-[768px] xs:w-[320px]">
    <Helmet>
      <title>{`${data?.title} Download and Play`}</title>
      <meta name="description" content={data.short_description} />
      <meta property="og:title" content={`${data?.title} Download and Play`} />
      <meta property="og:description" content={data.short_description} />
      <meta property="og:image" content={data.thumbnail} />
    </Helmet>
    <GameDescription data={data} goBack={goBack} />
  </article>
)
export default GameInfo
