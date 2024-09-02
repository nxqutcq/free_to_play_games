import React from 'react'
import { Link, generatePath } from 'react-router-dom'

import Genre from './Genre'
import PlatformIcons from './PlatformIcons'
import LazyImage from './shared/LazyImage'

import { ROUTES } from '@/routes'
import { GamesBunchProps } from '@/types/games'

const NewReleases: React.FC<GamesBunchProps> = ({ data }) => (
  <section>
    <h3 className="scroll-m-20 mb-5 text-2xl font-semibold tracking-tight first:mt-0">
      New Releases
    </h3>
    <div className="flex flex-col md:max-w-[800px] gap-y-3 ">
      {data?.map((game) => (
        <Link
          draggable="false"
          className="md:hover:-translate-y-2 transition"
          to={generatePath(ROUTES.GAME_ID, { id: game.id })}
          key={game?.id}
        >
          <article className="rounded-2xl bg-accent md:justify-start xxs:flex-col xs:flex-col xs3:flex-row overflow-hidden justify-between items-center flex">
            <div className="overflow-hidden aspect-video w-full xs:w-[full] sm:max-w-[12rem] md:max-w-[12rem] relative items-center justify-center">
              <LazyImage alt={game?.title} src={game?.thumbnail} />
            </div>
            <div className="flex flex-row xxs:flex-col w-full items-center xxs:p-3 xs:p-3">
              <div className="flex flex-col w-full">
                <div className="xs:w-[full]">
                  <h4 className="text-xl tracking-tight flex">{game?.title}</h4>
                </div>
                <div className="text-sm flex pr-3 flex-wrap flex-grow text-[#898989] dark:text-[#a0a0a0]">
                  {game?.short_description}
                </div>
              </div>
              <div className="flex flex-col xs:h-[fit-content] w-[max-content] items-center justify-between">
                <div className="">
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
