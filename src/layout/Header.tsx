import React from 'react'
import { NavLink } from 'react-router-dom'

import BrowserGamesMenu from '@/components/BrowserGamesMenu'
import FreeGamesMenu from '@/components/FreeGamesMenu'
import SearchBar from '@/components/SearchBar'
import SignInMenu from '@/components/SignInMenu'
import { useAuth } from '@/contexts/authContext'
import { ROUTES } from '@/routes'
import { useGamesList } from '@/services/queries'

const Header: React.FC = () => {
  const auth = useAuth()
  const { data: gamesData } = useGamesList()
  const { currentUser, userLoggedIn } = auth || {}

  return (
    <header className="bg-stone-900 z-[51] fixed flex top-0 h-[3.75rem] w-screen mx-auto items-center flex-col">
      <nav className="flex items-center max-w-[1140px] w-full px-[1rem] justify-between h-[3.75rem] xxs:items-center xxs:flex-wrap flex-row">
        <div className="flex gap-10 xs:gap-0 flex-row items-center">
          <NavLink
            className="xxs:hidden md:block xs:hidden md"
            draggable={false}
            to={ROUTES.HOME}
            role="link"
          >
            <h1 className="xs4:pr-5 xxs:pr-0 md:pr-10 select-none text-white font-extrabold tracking-tight text-3xl sm:flex logo">
              Free2Game
            </h1>
          </NavLink>
          <div className="flex flex-row gap-2 xxs:hidden xs:hidden md:flex">
            <FreeGamesMenu />
            <BrowserGamesMenu />
          </div>
        </div>
        <div className="flex items-center gap-5 md:justify-end xxs:justify-between xs:justify-between w-full xxs:w-fit flex-row">
          <div className="xs:w-full xxs:w-full md:w-fit">
            <SearchBar data={gamesData || []} />
          </div>
          <SignInMenu currentUser={currentUser} userLoggedIn={userLoggedIn} />
        </div>
      </nav>
    </header>
  )
}

export default React.memo(Header)
