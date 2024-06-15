import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { scrollToTop } from '@/utils'

const useScrollToTopOnPageChange: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollToTop()
  }, [pathname])

  return null
}

export default useScrollToTopOnPageChange
