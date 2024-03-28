import React from 'react'
import { NavLink } from 'react-router-dom'

import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'

const Header: React.FC = () => (
  <header className="flex h-20 w-full mx-auto items-center flex-col mb-5">
    <div className="flex items-center w-[1200px] justify-between h-full flex-row">
      <nav className="flex flex-row items-center justify-between w-full">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <NavLink draggable={false} to="/" role="link">
            FreeToGame
          </NavLink>
        </h1>
        <ul className="flex items-center mr-10 w-[200px] justify-between">
          <li>
            <NavLink draggable={false} to="/" role="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex gap-2 items-center flex-row"
              draggable={false}
              to="/games"
              role="link"
            >
              Games
            </NavLink>
          </li>
        </ul>
      </nav>
      <ModeToggle />
    </div>
    <Separator />
  </header>
)

export default Header
