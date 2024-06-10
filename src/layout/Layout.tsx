import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => (
  <div className="flex items-center overflow-hidden flex-col">
    <div className="min-h-screen w-full max-w-[1140px] px-[1rem]">
      <Outlet />
    </div>
  </div>
)

export default Layout
