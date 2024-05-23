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

import UserFallbackIcon from '@/components/icons/UserFallbackIcon'
import { ModeToggle } from '@/components/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/contexts/authContext'
import { doSignOut } from '@/firebase/auth'
import { ROUTES } from '@/routes'

const SignInMenu: React.FC = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const { currentUser, userLoggedIn } = auth || {}

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
          <Button
            className="bg-stone-900 aspect-square rounded-full hover:bg-stone-800"
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
            <div className="cursor-pointer text-white">
              {currentUser?.displayName
                ? currentUser.displayName
                : currentUser?.email}
            </div>
          ) : null}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="flex px-2 py-2 flex-col w-[200px]"
        align="end"
      >
        {userLoggedIn ? (
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
        ) : null}
        <div className="flex items-center justify-start">
          <ModeToggle />
        </div>
        {userLoggedIn ? (
          <div className=" items-center flex flex-col">
            <DropdownMenuItem className="cursor-pointer w-full flex">
              <List className="mr-[1rem] w-[1rem]" />
              <span>All My Games</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer w-full">
              <Clock className="mr-[1rem] w-[1rem]" />
              Play later
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer w-full">
              <Gamepad2 className="mr-[1rem] w-[1rem]" />
              Current playing
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer w-full">
              <Check className="mr-[1rem] w-[1rem]" />
              Played
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer w-full">
              <div className="h-[1rem] mr-[1rem]">
                <CupIcon />
              </div>
              Completed
            </DropdownMenuItem>
            <hr className="w-full mt-[1rem] mb-[1rem]" />
            <Button
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
        ) : (
          <div>
            <NavLink to={ROUTES.LOGIN}>
              <DropdownMenuItem className="cursor-pointer">
                <KeyRound className="mr-[1rem] w-[1rem]" />
                Login
              </DropdownMenuItem>
            </NavLink>
            <NavLink to={ROUTES.REGISTER}>
              <DropdownMenuItem className="cursor-pointer">
                <UserRoundPlus className="mr-[1rem] w-[1rem]" />
                Register
              </DropdownMenuItem>
            </NavLink>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default SignInMenu
