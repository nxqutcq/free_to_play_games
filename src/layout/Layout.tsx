import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import MobileTabBar from './MobileTabBar'

import ScrollToTopBtn from '@/components/ScrollToTopBtn'
import Loader from '@/components/shared/Loader'

const Layout: React.FC = () => {
  return (
    <div className="flex items-center overflow-hidden flex-col">
      <div className="min-h-screen w-full max-w-[1140px] px-[1rem]">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollToTopBtn />
      </div>
      <MobileTabBar />
    </div>
  )
}

export default React.memo(Layout)
