import React from 'react'

import GameDescription from './GameDescription'

import usePageTitle from '@/hooks/usePageTitle'
import { GameInfoProps } from '@/types/games'

const GameInfo: React.FC<GameInfoProps> = ({ data, goBack }) => {
  usePageTitle(`${data?.title} Download and Play`)
  return (
    <article className="p-10 xs3:w-[480px] xs4:w-[425px] xs1:w-[375px] xs2:w-[400px] min-h-[max-content] mb-10 xl:w-[1200px] lg:w-[1024px] rounded-3xl overflow-hidden shadow-soft dark:shadow-soft-dark sm:flex sm:flex-col sm:items-start sm:w-[640px] md:w-[768px] xs:w-[320px]">
      <GameDescription data={data} goBack={goBack} />
    </article>
  )
}
export default GameInfo
