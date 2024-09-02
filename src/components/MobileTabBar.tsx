import { NavLink } from 'react-router-dom'

import DrawerMenu from '@/components/DrawerMenu'
import FiltersIcon from '@/components/icons/FiltersIcon'
import GamesIcon from '@/components/icons/GamesIcon'
import HomeIcon from '@/components/icons/HomeIcon'
import { useAuth } from '@/contexts/authContext'
import { ROUTES } from '@/routes'

const MobileTabBar = () => {
  const auth = useAuth()
  const { currentUser, userLoggedIn } = auth || {}
  return (
    <div className="md:hidden items-center fixed bottom-0 flex justify-between bg-black w-full h-[4rem]">
      <div className="h-full items-center flex">
        <NavLink
          className="h-[1.6rem] justify-center flex items-center px-6"
          draggable={false}
          to={ROUTES.HOME}
          role="link"
        >
          <HomeIcon />
        </NavLink>
      </div>
      <div className="h-full items-center flex">
        <NavLink
          className="h-[1.4rem] justify-center flex items-center px-6"
          draggable={false}
          to={ROUTES.GAMES}
          role="link"
        >
          <GamesIcon />
        </NavLink>
      </div>
      <div className="h-full items-center flex">
        <NavLink
          className="h-[1.5rem] justify-center flex items-center px-6"
          draggable={false}
          to={ROUTES.FILTERS}
          role="link"
        >
          <FiltersIcon />
        </NavLink>
      </div>
      <div className="h-[2rem] justify-center flex items-center px-6">
        <DrawerMenu currentUser={currentUser} userLoggedIn={userLoggedIn} />
      </div>
    </div>
  )
}

export default MobileTabBar
