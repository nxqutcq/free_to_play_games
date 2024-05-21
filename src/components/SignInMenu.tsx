import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import SignOutIcon from './icons/SignOutIcon'

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
            className="bg-stone-900 w-[2.5rem] h-[2.5rem] rounded-full hover:bg-stone-800"
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
            <div className="cursor-pointer">
              {currentUser?.displayName
                ? currentUser.displayName
                : currentUser?.email}
            </div>
          ) : null}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="flex flex-col" align="end">
        <div className="ml-2 flex items-center justify-center">
          <ModeToggle />
        </div>
        {userLoggedIn ? (
          <div className="w-[500px] items-center flex flex-col">
            <div>All My Games</div>
            <div>Play later</div>
            <div>Current playing</div>
            <div>Played</div>
            <div>Completed</div>
            <hr className="w-full" />
            <Button
              className="gap-3"
              onClick={() => {
                doSignOut().then(() => {
                  navigate(ROUTES.LOGIN)
                })
              }}
            >
              <SignOutIcon />
              <span>SignOut</span>
            </Button>
          </div>
        ) : (
          <div>
            <NavLink to={ROUTES.LOGIN}>
              <DropdownMenuItem>Login</DropdownMenuItem>
            </NavLink>
            <NavLink to={ROUTES.REGISTER}>
              <DropdownMenuItem>Register</DropdownMenuItem>
            </NavLink>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default SignInMenu
