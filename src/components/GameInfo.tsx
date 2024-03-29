import React from 'react'

import GameImage from '@/components/shared/GameImage'
import { Button } from '@/components/ui/button'
import { GameInfoProps } from '@/types/games'

const GameInfo: React.FC<GameInfoProps> = ({ data, isLoading, goBack }) => (
  <article className="min-h-screen mb-10 xl:w-[1280px] lg:w-[1024px] overflow-hidden shadow-lg sm:p-6 sm:flex sm:flex-col sm:items-start sm:w-[640px] md:w-[768px]">
    <Button className="mb-10" onClick={goBack}>
      Back
    </Button>
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
      {data?.title}
    </h2>
    <p className="mb-5 leading-7 [&:not(:first-child)]:mt-6 sm:flex ">
      {data?.short_description}
    </p>
    <div className="lg:flex lg:justify-between lg:w-full">
      <div className="lg:w-[450px]">
        <div className="flex sm:w-[600px] md:w-[720px] lg:w-full">
          <GameImage
            alt={data?.title}
            src={data?.thumbnail}
            isLoading={isLoading}
          />
        </div>
      </div>
      <div className="lg:flex lg:flex-col lg:max-w-[500px] xl:max-w-[750px]">
        <p className="flex sm:text-justify flex mb-5 leading-7 [&:not(:first-child)]:mt-6 sm:flex sm:w-[full]">
          {data?.description}
        </p>
      </div>
    </div>
    <p className="mb-5 leading-7 [&:not(:first-child)]:mt-6">{data?.genre}</p>
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight sm:flex">
      Minimum System Requirements:
    </h4>
    <ul className="mb-5 my-6 ml-6 list-disc [&>li]:mt-2  sm:flex sm:flex-col">
      <li>OS: {data.minimum_system_requirements?.os || 'Not specified'}</li>
      <li>
        Processor:{' '}
        {data.minimum_system_requirements?.processor || 'Not specified'}
      </li>
      <li>
        Memory: {data.minimum_system_requirements?.memory || 'Not specified'}
      </li>
      <li>
        Graphics:{' '}
        {data.minimum_system_requirements?.graphics || 'Not specified'}
      </li>
      <li>
        Storage: {data.minimum_system_requirements?.storage || 'Not specified'}
      </li>
    </ul>
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      Screenshots:
    </h4>
    <div className="flex xl:gap-5 gap-1 sm:flex sm:flex-col lg:flex-row xl:flex-wrap">
      {data?.screenshots && data.screenshots.length > 0 ? (
        data.screenshots.map((screenshot) => (
          <div key={screenshot.id}>
            <div className="flex sm:w-[600px] sm:min-h-[300px] md:min-h-[400px] pt-5 md:w-[720px] lg:w-[300px] xl:w-[500px]">
              <GameImage
                alt={`screenshot ${screenshot.id}`}
                src={screenshot.image}
                isLoading={isLoading}
              />
            </div>
          </div>
        ))
      ) : (
        <p>No screenshots available</p>
      )}
    </div>
  </article>
)

export default GameInfo
