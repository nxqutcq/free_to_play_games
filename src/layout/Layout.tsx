import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = () => (
  <div className="flex w-screen items-center flex-col background-container">
    <Header />
    <div className="min-h-screen">
      <Outlet />
    </div>
    <Footer />
  </div>
)

export default Layout
