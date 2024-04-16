import React, { useState, useRef } from 'react'

import { GalleryProps } from '@/types/games'

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [isFullscreen, setIsFullscreen] = useState(false)

  const touchStartXRef = useRef<number>(0)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const handleClick = (image: string) => {
    setSelectedImage(image)
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = event.changedTouches[0].clientX
    const touchStartX = touchStartXRef.current
    const threshold = 100

    if (touchEndX - touchStartX > threshold) {
      const currentIndex = images.indexOf(selectedImage)
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
      setSelectedImage(images[newIndex])
    } else if (touchStartX - touchEndX > threshold) {
      const currentIndex = images.indexOf(selectedImage)
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
      setSelectedImage(images[newIndex])
    }
  }

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(selectedImage)
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setSelectedImage(images[newIndex])
  }

  const handleNextImage = () => {
    const currentIndex = images.indexOf(selectedImage)
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(images[newIndex])
  }

  return (
    <div
      className="flex flex-col min-w-[800px] min-h-[450px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      <div className="relative min-w-[600px] min-h-[300px]">
        <img
          src={selectedImage}
          draggable="false"
          className={`rounded-sm cursor-pointer ${
            isFullscreen ? 'fullscreen-image' : ''
          }`}
          alt="Selected"
          onClick={toggleFullscreen}
        />
        <div
          draggable="false"
          className="prev-arrow transition hover:bg-stone-700"
          onClick={handlePrevImage}
        >
          ←
        </div>
        <div
          draggable="false"
          className="next-arrow transition hover:bg-stone-700"
          onClick={handleNextImage}
        >
          →
        </div>
      </div>
      <div className="min-w-[600px] flex flex-row mt-3 flex-wrap">
        {images.map((image, index) => (
          <img
            draggable="false"
            className={`hover:brightness-75 transition-all rounded-sm cursor-pointer ${selectedImage === image ? 'border-2 border-violet-900' : 'border-2 border-transparent'}`}
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleClick(image)}
            style={{ width: '100px', height: 'auto', margin: '5px' }}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
