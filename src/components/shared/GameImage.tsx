import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { GameImageType } from '@/types/games'

const GameImage: React.FC<GameImageType> = ({ src, alt, isLoading }) => {
  return isLoading ? (
    <Skeleton className="w-full min-h-[180px]" />
  ) : (
    <img
      className="w-full h-full rounded-md"
      src={src}
      alt={alt}
      loading="lazy"
    />
  )
}

export default GameImage
