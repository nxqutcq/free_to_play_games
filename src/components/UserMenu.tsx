import {
  List,
  Clock,
  Gamepad2,
  Check,
  LogOut,
  KeyRound,
  UserRoundPlus,
} from 'lucide-react'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import BrowserGamesMenu from './BrowserGamesMenu'
import FreeGamesMenu from './FreeGamesMenu'
import CupIcon from './icons/CupIcon'
import UserFallbackIcon from './icons/UserFallbackIcon'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

import { doSignOut } from '@/firebase/auth'
import { ROUTES } from '@/routes'
import { UserType } from '@/types/games'

const UserMenu: React.FC<UserType> = ({ userLoggedIn, currentUser }) => {
  const navigate = useNavigate()

  const handleMenuClick = (listName: string) => {
    navigate(`/${ROUTES.LIBRARY}?selectedList=${listName}`)
  }

  return (
    <div className="flex w-full flex-col items-center text-sm">
      <div className="flex w-full justify-center items-center flex-row">
        <div className="flex flex-col w-full gap-y-4 items-center">
          <div className="flex w-full items-center md:hidden mt-5 flex-row gap-2">
            <FreeGamesMenu />
            <BrowserGamesMenu />
          </div>
        </div>
      </div>
      {userLoggedIn ? (
        <div className="w-full items-center flex flex-col">
          <div className="flex items-center flex-col justify-center gap-2">
            <div className="my-3 flex flex-col items-center">
              <Avatar className="mb-5 h-[3.5rem] w-[3.5rem]">
                <AvatarImage src={currentUser?.photoURL || undefined} />
                <AvatarFallback>
                  <UserFallbackIcon className="rounded-full absolute h-[0.8rem] w-[0.8rem] sign-in" />
                </AvatarFallback>
              </Avatar>
              {currentUser?.displayName
                ? currentUser.displayName
                : currentUser?.email}
            </div>
            <div className="w-full items-center flex flex-col">
              <div className="w-full">
                <div
                  onClick={() => handleMenuClick('all')}
                  className="cursor-pointer hover:bg-accent flex-shrink-0 transition-colors rounded-sm py-2 px-3 w-full flex"
                >
                  <List className="mr-[1rem] w-[1rem]" />
                  <span>All My Games</span>
                </div>
              </div>
              <div
                onClick={() => handleMenuClick('playLater')}
                className="cursor-pointer flex w-full hover:bg-accent transition-colors rounded-sm py-2 px-3"
              >
                <Clock className="mr-[1rem] flex-shrink-0 w-[1rem]" />
                <span>Play later</span>
              </div>
              <div
                onClick={() => handleMenuClick('currentPlaying')}
                className="cursor-pointer flex w-full hover:bg-accent transition-colors rounded-sm py-2 px-3"
              >
                <Gamepad2 className="mr-[1rem] flex-shrink-0 w-[1rem]" />
                <span>Current playing</span>
              </div>
              <div
                onClick={() => handleMenuClick('played')}
                className="cursor-pointer flex-shrink-0 flex w-full hover:bg-accent transition-colors rounded-sm py-2 px-3"
              >
                <Check className="mr-[1rem] w-[1rem]" />
                <span>Played</span>
              </div>
              <div
                onClick={() => handleMenuClick('completed')}
                className="cursor-pointer items-center flex w-full hover:bg-accent transition-colors rounded-sm py-2 px-3"
              >
                <div className="h-[1rem] flex-shrink-0 mr-[1rem]">
                  <CupIcon />
                </div>
                <span>Completed</span>
              </div>
              <hr className="w-full mt-[1rem] mb-[1rem]" />
              <Button
                variant={'destructive'}
                className="w-4/5 mb-2"
                onClick={() => {
                  doSignOut().then(() => {
                    navigate(ROUTES.LOGIN)
                  })
                }}
              >
                <div className="h-[1.5rem] cursor-pointer items-center gap-2 flex">
                  <LogOut />
                  <span>Sign Out</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-fit xs:px-5 md:px-0 flex flex-row">
          <NavLink to={ROUTES.LOGIN}>
            <div className="cursor-pointer items-center flex w-full hover:bg-accent transition-colors rounded-sm py-2 px-3">
              <KeyRound className="mr-[0.5rem] w-[1rem]" />
              <div className="ml-[0.5rem]">Login</div>
            </div>
          </NavLink>
          <NavLink to={ROUTES.REGISTER}>
            <div className="cursor-pointer items-center flex w-full hover:bg-accent transition-colors rounded-sm py-2 px-3">
              <UserRoundPlus className="mr-[0.5rem] w-[1rem]" />
              <span className="ml-[0.5rem]">Register</span>
            </div>
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default UserMenu
