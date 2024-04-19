import React from 'react'
import { NavLink } from 'react-router-dom'

import FreeGamesMenu from '@/components/FreeGamesMenu'
import { ModeToggle } from '@/components/mode-toggle'

const Header: React.FC = () => {
  return (
    <header className="bg-stone-900 flex h-[4rem] w-full mx-auto items-center flex-col">
      <div className="flex xs2:w-[400px] items-center xs:w-[300px] xl:w-[1200px] lg:w-[1024px] justify-between h-full flex-row sm:w-[640px] md:w-[768px] xs3:w-[480px]">
        <nav className="flex flex-row items-center justify-between w-full sm:pr-5">
          <h1 className="xs:hidden select-none text-white scroll-m-20 font-extrabold tracking-tight text-4xl sm:flex">
            <NavLink draggable={false} to="/" role="link">
              FreeToGame
            </NavLink>
          </h1>
          <ul className="flex items-center gap-3 mr-10 justify-between">
            <li>
              <NavLink
                className="border text-white px-5 hover:text-black dark:hover:bg-white flex rounded-lg p-3 leading-none transition-colors hover:bg-accent"
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
    </header>
  )
}
export default Header
