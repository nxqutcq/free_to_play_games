import React from 'react'

import LazyImage from '../shared/LazyImage'

type ThumbProps = {
  selected: boolean
  image: string
  onClick: () => void
}

export const Thumb: React.FC<ThumbProps> = (props) => {
  const { selected, image, onClick } = props

  return (
    <article
      className={'hover:scale-105 transition embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number z-20 rounded-md relative xl:min-h-[60px]"
      >
        <LazyImage src={image} alt={`Thumbnail ${image}`} />
      </button>
    </article>
  )
}
