import React from 'react'

import GameImage from './shared/GameImage'

import { ScreenshotsProps } from '@/types/games'

const Screenshots: React.FC<ScreenshotsProps> = ({ data }) => (
  <div>
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      Screenshots:
    </h4>
    <div className="min-h-[500px] flex xs:flex-col xl:gap-5 gap-1 sm:flex sm:flex-col lg:flex-row flex-wrap">
      {data?.screenshots && data.screenshots.length > 0 ? (
        data.screenshots.map((screenshot) => (
          <div
            className="sm:min-h-[300px] md:min-h-[400px]"
            key={screenshot.id}
          >
            <div className="flex sm:w-[600px] pt-5 md:w-[720px] lg:w-[300px] xl:w-[500px] xs:w-[full] xs:min-h-[180px]">
              <GameImage
                alt={`screenshot ${screenshot.id}`}
                src={screenshot.image}
              />
            </div>
          </div>
        ))
      ) : (
        <p className="mb-5 leading-7 [&:not(:first-child)]:mt-6">
          No screenshots available
        </p>
      )}
    </div>
  </div>
)

export default Screenshots
