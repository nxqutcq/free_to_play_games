import useEmblaCarousel from 'embla-carousel-react'
import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import { Thumb } from './EmblaCarouselThumbsButton'
import LazyImage from '../shared/LazyImage'

import { CarouselProps } from '@/types/games'

interface ModalContainerProps {
  children: React.ReactNode
}

const modalRoot = document.getElementById('modal-root')

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
  return createPortal(children, modalRoot!)
}

const EmblaCarousel: React.FC<CarouselProps> = (props) => {
  const { images } = props
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    loop: true,
  })
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    loop: true,
  })
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaMainApi)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )
  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (image: string) => {
    setSelectedImage(image)
    document.body.classList.add('modal-open')
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.classList.remove('modal-open')
  }

  return (
    <div className="embla xl:max-w-[43rem] xs:max-w-[17rem] xs4:max-w-[21rem]">
      <div className="embla__viewport max-w-[full]" ref={emblaMainRef}>
        <div className="embla__container">
          {images.map((image: string, index: number) => (
            <article
              onClick={() => openModal(image)}
              className="hover:cursor-zoom-in embla__slide xl:min-h-[380px] xs:min-h-[200px] max-w-[full] relative"
              key={index}
            >
              <LazyImage src={image} alt={`Screenshot ${index + 1}`} />
            </article>
          ))}
          {selectedImage && (
            <ModalContainer>
              <div onClick={closeModal} className="modal-overlay">
                <button className="close-button" onClick={closeModal}>
                  &times;
                </button>
                <div className="modal-content">
                  <img src={selectedImage} alt="Modal Image" />
                </div>
              </div>
            </ModalContainer>
          )}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons mt-3 h-[50px] w-[max-content]">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {images.map((image: string, index: number) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                image={image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
