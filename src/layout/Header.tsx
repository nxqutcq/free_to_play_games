import React from 'react'
import { NavLink } from 'react-router-dom'

import FreeGamesMenu from '@/components/FreeGamesMenu'
import SearchBar from '@/components/SearchBar'
import SignInMenu from '@/components/SignInMenu'
import { ROUTES } from '@/routes'

const Header: React.FC = () => (
  <header className="bg-stone-900 flex h-[60px] w-full mx-auto items-center flex-col z-40">
    <nav className="flex items-center w-[1140px] px-[10px] justify-between h-[60px] flex-row">
      <div className="flex gap-10 flex-row items-center">
        <NavLink draggable={false} to={ROUTES.HOME} role="link">
          <h1 className="xs:hidden select-none text-white font-extrabold tracking-tight text-4xl sm:flex">
            FreeToGame
          </h1>
        </NavLink>
        <FreeGamesMenu />
      </div>
      <div className="flex items-center gap-5 justify-end w-full flex-row">
        <SearchBar />
        <SignInMenu />
      </div>
    </nav>
  </header>
)

export default Header
