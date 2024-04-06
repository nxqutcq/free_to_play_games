import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

import GameImage from './shared/GameImage'

import { Button } from '@/components/ui/button'
import { GameInfoProps } from '@/types/games'

const GameDescription: React.FC<GameInfoProps> = ({ data, goBack }) => (
  <div className="flex flex-col ">
    <ArrowLeft
      className="float-left p-[10px] border rounded-lg cursor-pointer"
      onClick={goBack}
      size={50}
      strokeWidth={1.75}
    />
    <h2 className="w-full scroll-m-20 text-3xl font-semibold tracking-tight mb-1 first:mb-0">
      {data?.title}
    </h2>
    <p className="mb-3 leading-7 items-start [&:not(:first-child)]:mt-2 sm:flex ">
      {data?.short_description}
    </p>
    <div className="lg:flex lg:justify-between lg:w-full md:w-[360px]">
      <div className="lg:w-[450px] xs:mb-5">
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
    </div>
    <div className="lg:flex lg:flex-col lg:max-w-[500px] xl:max-w-[750px]">
      <p className="sm:text-justify xs:text-start flex mb-5 leading-7 [&:not(:first-child)]:mt-6 sm:flex sm:w-[full]">
        {data?.description}
      </p>
    </div>
    <p className="mb-5 leading-7 [&:not(:first-child)]:mt-6">{data?.genre}</p>
  </div>
)

export default GameDescription
