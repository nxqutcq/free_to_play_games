import React from 'react'

import { GenreProps } from '@/types/games'
import { genreStyle } from '@/utils'

const Genre: React.FC<GenreProps> = ({ genre }) => (
  <div>
    {genre && (
      <div className="genre-style" style={genreStyle(genre)}>
        {genre}
      </div>
    )}
  </div>
)
export default Genre
