import React from 'react'

import GameImage from '@/components/shared/GameImage'
import { Button } from '@/components/ui/button'
import { GameInfoProps } from '@/types/games'

const GameInfo: React.FC<GameInfoProps> = ({ data, isLoading, goBack }) => (
  <article className="min-h-screen mb-10 w-[1200px] overflow-hidden shadow-lg p-6">
    <Button className="mb-10" onClick={goBack}>
      Back
    </Button>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {data?.title}
    </h2>
    <p className="mb-5 leading-7 [&:not(:first-child)]:mt-6">
      {data?.short_description}
    </p>
    <div className="w-[450px]">
      <GameImage
        alt={data?.title}
        src={data?.thumbnail}
        isLoading={isLoading}
      />
    </div>
    <p className="mb-5 leading-7 [&:not(:first-child)]:mt-6">
      {data?.description}
    </p>
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      Minimum System Requirements:
    </h4>
    <ul className="mb-5 my-6 ml-6 list-disc [&>li]:mt-2">
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
    <div className="flex gap-1">
      {data?.screenshots && data.screenshots.length > 0 ? (
        data.screenshots.map((screenshot) => (
          <div key={screenshot.id} className="w-[360px]">
            <GameImage
              alt={`screenshot ${screenshot.id}`}
              src={screenshot.image}
              isLoading={isLoading}
            />
          </div>
        ))
      ) : (
        <p>No screenshots available</p>
      )}
    </div>
  </article>
)

export default GameInfo
