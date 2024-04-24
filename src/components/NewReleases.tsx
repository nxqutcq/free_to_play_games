import React from 'react'
import { Link } from 'react-router-dom'

import Genre from './Genre'
import PlatformIcons from './PlatformIcons'
import LazyImage from './shared/LazyImage'

import { GamesBunchProps } from '@/types/games'

const NewReleases: React.FC<GamesBunchProps> = ({ data }) => (
  <section>
    <h3 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      New Releases
    </h3>
    <div className="flex flex-col gap-3">
      {data?.map((game) => (
        <Link
          draggable="false"
          className="hover:-translate-y-2 transition"
          to={`/games/game/${game?.id}`}
          key={game?.id}
        >
          <article className="rounded-2xl border h-[120px] justify-between items-center flex">
            <div className="overflow-hidden w-[150px] rounded-lg h-[84px] ml-3 relative flex items-center justify-center">
              <LazyImage alt={game?.title} src={game?.thumbnail} />
            </div>
            <div className="flex flex-col h-[90px] w-[400px] ">
              <h4 className=" text-2xl tracking-tight flex">{game?.title}</h4>
              <div>{game?.short_description}</div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex flex-col h-[90px] w-[150px] items-center justify-between ">
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
  </section>
)
export default NewReleases
