import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = () => (
  <div className="flex items-center overflow-hidden flex-col">
    <Header />
    <div className="min-h-screen w-full max-w-[1140px] px-[1rem]">
      <Outlet />
    </div>
    <Footer />
  </div>
)

export default Layout
