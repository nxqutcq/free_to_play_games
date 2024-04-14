import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import GameImage from './shared/GameImage'

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
    <p className="mb-10 leading-7 items-start [&:not(:first-child)]:mt-10 sm:flex">
      {data?.short_description}
    </p>
    <div className="lg:flex lg:justify-between lg:w-full md:w-[360px]">
      <div className="lg:min-w-[450px] xs:mb-5">
        <div className="flex xs:min-h-[150px] sm:w-[600px] md:w-[360px] lg:w-full">
          <GameImage alt={data?.title} src={data?.thumbnail} />
        </div>
        <Link
          to={data.game_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[300px]"
        >
          <Button className="mt-5 xs:w-full">PLAY NOW</Button>
        </Link>
      </div>
      <div className="ml-5 lg:flex lg:flex-col">
        <p className="sm:text-justify xs:text-start flex mb-5 leading-7 [&:not(:first-child)]:mt-6 sm:flex sm:w-[full]">
          {data?.description}
        </p>
      </div>
    </div>
  </div>
)

export default GameDescription
