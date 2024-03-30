import React from 'react'
import { Link } from 'react-router-dom'

import GameImage from './shared/GameImage'

import { Separator } from '@/components/ui/separator'
import { SortingPanelProps } from '@/types/games'

const GamesSortingPanel: React.FC<SortingPanelProps> = ({
  data,
  isLoading,
}) => {
  if (!data) {
    return null
  }
  return (
    <div>
      <div>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Top Free Games for PC and Browser In {new Date().getFullYear()}!
        </h2>
      </div>
      <div>
        <p className="mb-5">397 free-to-play games found in our games list!</p>
      </div>
      <div className="flex mb-10 gap-5 justify-between">
        {data.map((game) => (
          <Link
            key={game.id}
            className="mb-5 w-full"
            to={`/games/game/${game.id}`}
          >
            <GameImage
              isLoading={isLoading}
              src={game.thumbnail}
              alt={game.title}
            />
          </Link>
        ))}
      </div>
      <Separator className="mb-10" />
    </div>
  )
}
export default GamesSortingPanel
