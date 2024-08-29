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
      <div className="flex flex-row items-center justify-between">
        <ArrowLeft
          className="p-[10px] border rounded-lg cursor-pointer"
          onClick={() => navigate(ROUTES.HOME)}
          size={50}
          strokeWidth={1.75}
        />
        <h2 className="ml-10 scroll-m-20 text-4xl font-semibold tracking-tight mb-1 first:mb-0">
          {data?.title}
        </h2>
        {data?.genre && (
          <NavLink
            className="genre-style"
            draggable={false}
            to={getGenreUrl(data.genre.trim())}
            role="link"
            style={genreStyle(data.genre.trim())}
          >
            {data.genre}
          </NavLink>
        )}
      </div>
      <p className="mb-5 leading-7 items-start [&:not(:first-child)]:mt-5 sm:flex">
        {data?.short_description}
      </p>
      <div className="flex gap-5 between flex-row xs:flex-col md:flex-row">
        <div className="xl:max-w-[350px] w-full min-h-[500px]">
          <div className="flex relative hover:brightness-110 transition-all xs:min-h-[190px]">
            <LazyImage alt={data?.title} src={data?.thumbnail} />
          </div>
          <div className="flex gap-2 max-w-[350px]">
            <Link
              to={data.game_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex"
            >
              <Button className="mt-5 w-full select-none">PLAY NOW</Button>
            </Link>
            <Button className="mt-5 w-0.5/3 select-none">
              <Plus />
            </Button>
          </div>
          <div className="min-h-[250px]">
            <h4 className="pt-5 scroll-m-20 text-xl font-semibold tracking-tight sm:flex">
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
      <p className="pt-5 sm:text-justify xs:text-start flex leading-7 sm:flex sm:w-[full]">
        {data?.description}
      </p>
    </div>
  )
}
export default GameDescription
