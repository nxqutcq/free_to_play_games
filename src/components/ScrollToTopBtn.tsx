import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

import { scrollToTop } from '@/utils'

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div
      className="bg-background cursor-pointer z-10 p-3.5 border rounded-full hover:bg-accent transition-colors"
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.5s ease, visibility 0.5s ease',
      }}
    >
      <ArrowUp />
    </div>
  )
}

export default ScrollToTopBtn
