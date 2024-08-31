import React from 'react'

import EmblaCarousel from './ui/EmblaCarousel'

import { ScreenshotsProps } from '@/types/games'

const Screenshots: React.FC<ScreenshotsProps> = ({ data }) => (
  <section className="flex w-full">
    <div className="md:min-h-[440px] w-full xs4:min-h-[350px] justify-center flex">
      {data?.screenshots && data.screenshots.length > 0 ? (
        <EmblaCarousel
          images={data.screenshots.map((screenshot) => screenshot.image)}
        />
      ) : (
        <p className="w-full min-h-[440px] flex justify-center items-center leading-7 [&:not(:first-child)]:mt-6">
          No screenshots available
        </p>
      )}
    </div>
  </section>
)

export default Screenshots
