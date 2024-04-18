import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import Screenshots from './Screenshots'
import GameImage from './shared/GameImage'
import SystemRequirements from './SystemRequirements'

import { Button } from '@/components/ui/button'
import { GameInfoProps } from '@/types/games'
import { genreStyle, getGenreUrl } from '@/utils'

const GameDescription: React.FC<GameInfoProps> = ({ data, goBack }) => (
  <div className="flex flex-col">
    <div className="flex flex-row items-center justify-between">
      <ArrowLeft
        className="p-[10px] border rounded-lg cursor-pointer"
        onClick={goBack}
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
          to={getGenreUrl(data.genre)}
          role="link"
          style={genreStyle(data.genre)}
        >
          {data.genre}
        </NavLink>
      )}
    </div>
    <p className="mb-5 leading-7 items-start [&:not(:first-child)]:mt-5 sm:flex">
      {data?.short_description}
    </p>
    <div className="flex gap-5 between flex-row">
      <div className="max-w-[350px] min-w-[350px] min-h-[500px]">
        <div className="flex max-w-[350px] hover:brightness-110 transition-all xs:min-h-[190px]">
          <GameImage alt={data?.title} src={data?.thumbnail} />
        </div>
        <Link
          to={data.game_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[300px]"
        >
          <Button className="mt-5 xs:w-full select-none">PLAY NOW</Button>
        </Link>
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

export default GameDescription
