import React from 'react'
import { NavLink } from 'react-router-dom'

import HeaderFreeGamesMenu from '@/components/HeaderFreeGamesMenu'
import { ModeToggle } from '@/components/mode-toggle'

const Header: React.FC = () => {
  return (
    <header className="flex h-20 w-full mx-auto items-center flex-col mb-5">
      <div className="flex xs2:w-[400px] items-center xs:w-[320px] xl:w-[1280px] lg:w-[1024px] justify-between h-full flex-row sm:w-[640px] md:w-[768px] sm:pr-8 xs:pr-5 xs3:w-[480px]">
        <nav className="flex flex-row items-center justify-between w-full sm:pl-5 sm:pr-5 xs:pl-5">
          <h1 className="xs:hidden scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl sm:flex sm:pl-3">
            <NavLink draggable={false} to="/" role="link">
              FreeToGame
            </NavLink>
          </h1>
          <ul className="flex items-center mr-10 w-[200px] justify-between">
            <li className="">
              <NavLink draggable={false} to="/" role="link">
                Home
              </NavLink>
            </li>
            <li>
              <HeaderFreeGamesMenu />
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}
export default Header
