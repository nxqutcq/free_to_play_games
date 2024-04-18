import React from 'react'

import EmblaCarousel from './ui/EmblaCarousel'

import { ScreenshotsProps } from '@/types/games'

const Screenshots: React.FC<ScreenshotsProps> = ({ data }) => (
  <div>
    <div className="min-h-[440px] w-[max-content] justify-center flex xs:flex-col sm:flex sm:flex-col lg:flex-row flex-wrap">
      {data?.screenshots && data.screenshots.length > 0 ? (
        <EmblaCarousel
          images={data.screenshots.map((screenshot) => screenshot.image)}
        />
      ) : (
        <p className="w-[700px] min-h-[440px] flex justify-center items-center leading-7 [&:not(:first-child)]:mt-6">
          No screenshots available
        </p>
      )}
    </div>
  </div>
)

export default Screenshots
