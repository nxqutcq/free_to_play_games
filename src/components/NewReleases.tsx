import React from 'react'
import { Link } from 'react-router-dom'

import Genre from './Genre'
import PlatformIcons from './PlatformIcons'
import GameImage from './shared/GameImage'

import { GamesBunchProps } from '@/types/games'

const NewReleases: React.FC<GamesBunchProps> = ({ data }) => {
  return (
    <div>
      <h3 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        New Releases
      </h3>
      <article className="flex flex-col gap-2">
        {data?.map((game) => (
          <Link draggable="false" className="" to={`/games/game/${game?.id}`}>
            <div
              className="h-[130px] bg-slate-900 justify-between items-center flex"
              key={game?.id}
            >
              <div className="w-[200px] h-[110px] mr-2 flex items-center justify-center">
                <GameImage alt={game?.title} src={game?.thumbnail} />
              </div>
              <div className="flex flex-col min-h-[110px] w-[400px] bg-slate-400">
                <h4 className="bg-orange-900 text-2xl tracking-tight flex">
                  {game?.title}
                </h4>
                <div className="bg-emerald-800 flex">
                  {game?.short_description}
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex flex-col min-h-[110px] w-[150px] items-center justify-between bg-lime-900">
                  <div className="flex flex-row pt-3 items-center h-[min-content]">
                    <PlatformIcons platform={game?.platform} />
                  </div>
                  <div>{game?.genre && <Genre genre={game.genre} />}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </article>
    </div>
  )
}

export default NewReleases
