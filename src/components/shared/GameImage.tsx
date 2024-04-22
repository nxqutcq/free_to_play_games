import React, { useState } from 'react'

import { GameImageType } from '@/types/games'

const GameImage: React.FC<GameImageType> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false)

  const handleImageLoad = () => {
    setLoaded(true)
  }

  return (
    <img
      className={`w-full h-full rounded-md transition-opacity duration-300 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      src={src}
      alt={alt}
      onLoad={handleImageLoad}
    />
  )
}

export default GameImage
