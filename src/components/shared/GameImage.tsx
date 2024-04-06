import React, { useState } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { GameImageType } from '@/types/games'

const GameImage: React.FC<GameImageType> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false)

  const handleImageLoaded = () => {
    setLoaded(true)
  }
  return (
    <div className="relative w-full min-h-[min-content]">
      {!loaded && (
        <Skeleton className="absolute inset-0 flex w-full min-h-[min-content]" />
      )}
      <div className="image-container" style={{ opacity: loaded ? 1 : 0 }}>
        <img
          className="w-full h-full rounded-md"
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  )
}

export default GameImage
