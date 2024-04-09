import React from 'react'

import GamesBunchItem from './GamesBunchItem'

import { GamesBunchProps } from '@/types/games'

const GamesBunch: React.FC<GamesBunchProps> = ({ data }) => (
  <div className="xl:gap-0 xl:justify-between overflow-x-hidden flex flex-wrap items-start justify-center gap-2 md:gap-5 lg:gap-2 w-full flex-row">
    {data?.map((game) => <GamesBunchItem key={game.id} game={game} />)}
  </div>
)

export default GamesBunch
