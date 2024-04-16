import React from 'react'

import Gallery from './Gallery'

import { ScreenshotsProps } from '@/types/games'

const Screenshots: React.FC<ScreenshotsProps> = ({ data }) => (
  <div>
    <div className="min-h-[500px] flex xs:flex-col xl:gap-5 gap-1 sm:flex sm:flex-col lg:flex-row flex-wrap">
      {data?.screenshots && data.screenshots.length > 0 ? (
        <Gallery
          images={data.screenshots.map((screenshot) => screenshot.image)}
        />
      ) : (
        <p className="mb-5 leading-7 [&:not(:first-child)]:mt-6">
          No screenshots available
        </p>
      )}
    </div>
  </div>
)

export default Screenshots
