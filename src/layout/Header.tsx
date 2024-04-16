import React from 'react'
import { NavLink } from 'react-router-dom'

import FreeGamesMenu from '@/components/FreeGamesMenu'
import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-950 flex h-[4rem] w-full mx-auto items-center flex-col mb-5">
      <div className="flex xs2:w-[400px] items-center xs:w-[300px] xl:w-[1200px] lg:w-[1024px] justify-between h-full flex-row sm:w-[640px] md:w-[768px] xs3:w-[480px]">
        <nav className="flex flex-row items-center justify-between w-full sm:pr-5">
          <h1 className="xs:hidden text-white scroll-m-20 font-extrabold tracking-tight text-4xl sm:flex">
            <NavLink draggable={false} to="/" role="link">
              FreeToGame
            </NavLink>
          </h1>
          <ul className="flex items-center mr-10 w-[200px] justify-between">
            <li>
              <NavLink
                className=" bg-background flex rounded-md p-3 leading-none transition-colors hover:bg-accent"
                draggable={false}
                to="/"
                role="link"
              >
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
