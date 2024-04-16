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
      <div className="flex flex-col gap-3">
        {data?.map((game) => (
          <Link
            draggable="false"
            className="hover:-translate-y-2 transition"
            to={`/games/game/${game?.id}`}
          >
            <article
              className="rounded-xl border h-[120px] justify-between items-center flex"
              key={game?.id}
            >
              <div className="w-[180px] min-h-[90px] flex ml-1 items-center justify-center">
                <GameImage alt={game?.title} src={game?.thumbnail} />
              </div>
              <div className="flex flex-col min-h-[90px] w-[400px] ">
                <h4 className=" text-2xl tracking-tight flex">{game?.title}</h4>
                <div className=" flex">{game?.short_description}</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex flex-col min-h-[90px] w-[150px] items-center justify-between ">
                  <div className="flex flex-row pt-3 items-center h-[min-content]">
                    <PlatformIcons platform={game?.platform} />
                  </div>
                  <div>{game?.genre && <Genre genre={game?.genre} />}</div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NewReleases
