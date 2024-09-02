import React from 'react'
import { Outlet } from 'react-router-dom'

import MobileTabBar from '@/components/MobileTabBar'
import ScrollToTopBtn from '@/components/ScrollToTopBtn'

const Layout: React.FC = () => {
  return (
    <div className="flex items-center overflow-hidden flex-col">
      <div className="min-h-screen w-full max-w-[1140px] px-[1rem]">
        <Outlet />
        <ScrollToTopBtn />
      </div>
      <MobileTabBar />
    </div>
  )
}

export default React.memo(Layout)
