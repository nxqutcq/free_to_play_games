import React from 'react'
import { NavLink } from 'react-router-dom'

import FreeGamesMenu from '@/components/FreeGamesMenu'
import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'

const Header: React.FC = () => {
  return (
    <header className="flex h-20 w-full mx-auto items-center flex-col mb-5 xs:mb-2">
      <div className="flex xs2:w-[400px] items-center xs:w-[320px] xl:w-[1200px] lg:w-[1024px] justify-between h-full flex-row sm:w-[640px] md:w-[768px] sm:pr-8 xs:pr-5 xs3:w-[480px]">
        <nav className="flex flex-row items-center justify-between w-full sm:pr-5">
          <h1 className="xs:hidden scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl sm:flex">
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
              <FreeGamesMenu />
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
      <Separator />
    </header>
  )
}
export default Header
