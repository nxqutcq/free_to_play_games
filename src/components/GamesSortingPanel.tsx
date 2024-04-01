import React from 'react'
import { Link } from 'react-router-dom'

import GameImage from './shared/GameImage'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import usePageTitle from '@/hooks/usePageTitle'
import { SortingPanelProps } from '@/types/games'

const GamesSortingPanel: React.FC<SortingPanelProps> = ({
  data,
  gamesCount,
  onPlatformChange,
}) => {
  usePageTitle(`${gamesCount} Free-to-play games found in our games list!`)

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
        <p className="mb-5">
          {gamesCount} free-to-play games found in our games list!
        </p>
      </div>
      <div className="flex h-[230px] gap-5 justify-between">
        {data.map((game) => (
          <Link
            key={game.id}
            className="mb-10 w-full"
            to={`/games/game/${game.id}`}
          >
            <GameImage src={game.thumbnail} alt={game.title} />
          </Link>
        ))}
      </div>
      <div className="flex justify-between min-h-[70px]">
        <div className="flex flex-row justify-center">
          <div>
            <Select>
              <SelectTrigger className="max-w-[180px]">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" onClick={() => onPlatformChange('all')}>
                  All
                </SelectItem>
                <SelectItem value="pc" onClick={() => onPlatformChange('pc')}>
                  PC (Windows)
                </SelectItem>
                <SelectItem
                  value="browser"
                  onClick={() => onPlatformChange('browser')}
                >
                  Browser (Web)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Select>
            <SelectTrigger className="max-w-[180px]">
              <SelectValue placeholder="Genre/Tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pc">PC</SelectItem>
              <SelectItem value="browser">Browser</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger className="max-w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pc">PC</SelectItem>
              <SelectItem value="browser">Browser</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>Advanded Filters</div>
      </div>
      <Separator className="mb-5" />
    </div>
  )
}
export default GamesSortingPanel
