import React from 'react'

import GameDescription from './GameDescription'
import GameScreenshots from './GameScreenshots'
import MinimumSystemRequirements from './MinimumSystemRequirements'

import usePageTitle from '@/hooks/usePageTitle'
import { GameInfoProps } from '@/types/games'

const GameInfo: React.FC<GameInfoProps> = ({ data, goBack }) => {
  usePageTitle(`${data?.title} Download and Play`)
  return (
    <article className="xs3:w-[480px] xs4:w-[425px] xs1:w-[375px] xs2:w-[400px] min-h-screen mb-10 xl:w-[1280px] lg:w-[1024px] overflow-hidden shadow-lg sm:p-6 sm:flex sm:flex-col sm:items-start sm:w-[640px] md:w-[768px] xs:w-[320px] xs:p-2">
      <GameDescription data={data} goBack={goBack} />
      <MinimumSystemRequirements data={data} />
      <GameScreenshots data={data} />
    </article>
  )
}
export default GameInfo
