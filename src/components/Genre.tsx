import React from 'react'

import { GenreProps } from '@/types/games'
import { genreStyle } from '@/utils'

const Genre: React.FC<GenreProps> = ({ genre }) => {
  return (
    <div>
      {genre && (
        <div className="genre-style" style={genreStyle(genre)}>
          {genre}
        </div>
      )}
    </div>
  )
}

export default Genre
