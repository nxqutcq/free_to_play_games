import React from 'react'

import GamesBunchItem from './GamesBunchItem'

import { GamesBunchProps } from '@/types/games'

const GamesBunch: React.FC<GamesBunchProps> = ({ data }) => (
  <div className="grid grid-cols-4 gap-3 xl:w-[1200px] flex-row">
    {data?.map((game) => <GamesBunchItem key={game.id} game={game} />)}
  </div>
)

export default GamesBunch
