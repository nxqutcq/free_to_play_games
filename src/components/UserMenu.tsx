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

import CupIcon from './icons/CupIcon'
import UserFallbackIcon from './icons/UserFallbackIcon'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

import { doSignOut } from '@/firebase/auth'
import { ROUTES } from '@/routes'
import { UserType } from '@/types/games'

const UserMenu: React.FC<UserType> = ({ userLoggedIn, currentUser }) => {
  const navigate = useNavigate()
  return userLoggedIn ? (
    <>
      <div className="flex items-center gap-2">
        <Button
          className="bg-stone-900 h-[0.8rem] w-[0.8rem] flex rounded-full hover:bg-stone-800"
          variant="outline"
        >
          <Avatar>
            <AvatarImage src={currentUser?.photoURL || undefined} />
            <AvatarFallback>
              <UserFallbackIcon className="rounded-full absolute h-[0.8rem] w-[0.8rem] sign-in" />
            </AvatarFallback>
          </Avatar>
        </Button>
        {userLoggedIn ? (
          <div className="cursor-pointer text-white xs:hidden">
            {currentUser?.displayName
              ? currentUser.displayName
              : currentUser?.email}
          </div>
        ) : null}
      </div>
      <div className="items-center flex flex-col">
        <div className="cursor-pointer w-full flex">
          <List className="mr-[1rem] w-[1rem]" />
          <span>All My Games</span>
        </div>
        <div className="cursor-pointer w-full">
          <Clock className="mr-[1rem] w-[1rem]" />
          Play later
        </div>
        <div className="cursor-pointer w-full">
          <Gamepad2 className="mr-[1rem] w-[1rem]" />
          Current playing
        </div>
        <div className="cursor-pointer w-full">
          <Check className="mr-[1rem] w-[1rem]" />
          Played
        </div>
        <div className="cursor-pointer w-full">
          <div className="h-[1rem] mr-[1rem]">
            <CupIcon />
          </div>
          Completed
        </div>
        <hr className="w-full mt-[1rem] mb-[1rem]" />
        <Button
          variant={'destructive'}
          className="w-full"
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
    </>
  ) : (
    <div className="flex flex-col items-center mt-5 w-full">
      <NavLink to={ROUTES.LOGIN}>
        <div className="cursor-pointer flex my-[0.5rem]">
          <KeyRound className="mr-[0.5rem] w-[1rem]" />
          <div className="ml-[0.5rem]">Login</div>
        </div>
      </NavLink>
      <NavLink to={ROUTES.REGISTER}>
        <div className="cursor-pointer flex my-[0.5rem]">
          <UserRoundPlus className="mr-[0.5rem] w-[1rem]" />
          <span className="ml-[0.5rem]">Register</span>
        </div>
      </NavLink>
    </div>
  )
}

export default UserMenu
