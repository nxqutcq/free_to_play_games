import React from 'react'

import { GameImageType } from '@/types/games'

const GameImage: React.FC<GameImageType> = ({ src, alt }) => (
  <img
    className="w-full h-full rounded-md"
    src={src}
    alt={alt}
    loading="lazy"
  />
)

export default GameImage
