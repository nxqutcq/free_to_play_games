import React from 'react'
import { NavLink } from 'react-router-dom'

import BrowserGamesMenu from '@/components/BrowserGamesMenu'
import DrawerMenu from '@/components/DrawerMenu'
import FreeGamesMenu from '@/components/FreeGamesMenu'
import SignInMenu from '@/components/SignInMenu'
import { useAuth } from '@/contexts/authContext'
import { ROUTES } from '@/routes'

const Header: React.FC = () => {
  const auth = useAuth()

  const { currentUser, userLoggedIn } = auth || {}

  return (
    <header className="bg-stone-900 flex h-[60px] w-full mx-auto items-center flex-col z-40">
      <nav className="flex items-center max-w-[1140px] w-full px-[1rem] justify-between h-[60px] flex-row">
        <div className="flex gap-10 xs:gap-0 flex-row items-center">
          <NavLink draggable={false} to={ROUTES.HOME} role="link">
            <h1 className="xs4:pr-5 md:pr-10 select-none text-white font-extrabold tracking-tight text-4xl sm:flex logo">
              FreeToGame
            </h1>
          </NavLink>
          <div className="flex flex-row gap-2 xs:hidden md:flex">
            <FreeGamesMenu />
            <BrowserGamesMenu />
          </div>
        </div>
        <div className="flex items-center gap-5 justify-end w-full flex-row">
          <SignInMenu currentUser={currentUser} userLoggedIn={userLoggedIn} />
          <DrawerMenu currentUser={currentUser} userLoggedIn={userLoggedIn} />
        </div>
      </nav>
    </header>
  )
}
export default Header
