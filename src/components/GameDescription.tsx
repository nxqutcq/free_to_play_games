import { ArrowLeft, Plus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Screenshots from './Screenshots'
import LazyImage from './shared/LazyImage'
import SystemRequirements from './SystemRequirements'

import { Button } from '@/components/ui/button'
import { ROUTES } from '@/routes'
import { GameInfoProps } from '@/types/games'
import { genreStyle, getGenreUrl } from '@/utils'

const GameDescription: React.FC<GameInfoProps> = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col xs:w-[full]">
      <div className="flex items-center justify-between gap-5 flex-wrap w-full">
        <ArrowLeft
          className="border flex-shrink-0 p-1 rounded-lg cursor-pointer"
          onClick={() => navigate(ROUTES.HOME)}
          size={40}
          strokeWidth={1.75}
        />
        <h2 className="scroll-m-20 md:text-3xl xs:text-2xl font-semibold tracking-tight first:mb-0 text-center flex-grow">
          {data?.title}
        </h2>
        {data?.genre && (
          <NavLink
            className="genre-style flex-shrink-0"
            draggable={false}
            to={getGenreUrl(data.genre.trim())}
            role="link"
            style={genreStyle(data.genre.trim())}
          >
            {data.genre}
          </NavLink>
        )}
      </div>
      <p className="mb-5 leading-7 text-base items-start [&:not(:first-child)]:mt-5 sm:flex">
        {data?.short_description}
      </p>
      <div className="flex gap-5 between flex-row xs:flex-col md:flex-row">
        <div className="md:min-w-[320px] xs:miw-w-[280px]">
          <div className="relative hover:brightness-110 transition-all md:min-h-[160px] xs:min-h-[190px]">
            <LazyImage alt={data?.title} src={data?.thumbnail} />
          </div>
          <div className="flex gap-2 mt-5">
            <Link
              to={data.game_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex"
            >
              <Button className="w-full select-none">PLAY NOW</Button>
            </Link>
            <Button className="w-0.5/3 select-none">
              <Plus />
            </Button>
          </div>
          <div className="">
            <h4 className="pt-5 scroll-m-20 text-lg font-semibold tracking-tight sm:flex">
              Minimum System Requirements:
            </h4>
            {data.minimum_system_requirements &&
            data.minimum_system_requirements ? (
              <SystemRequirements data={data} />
            ) : (
              <div className="flex justify-center min-h-[210px] items-center">
                <div>Not specified</div>
              </div>
            )}
          </div>
        </div>
        <Screenshots data={data} />
      </div>
      <p className="pt-5 sm:text-justify text-sm xs:text-start flex leading-7 sm:flex sm:w-[full]">
        {data?.description}
      </p>
    </div>
  )
}
export default GameDescription
