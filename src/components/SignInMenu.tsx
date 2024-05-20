import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import SignInIcon from '@/components/icons/SignInIcon'
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
  console.log(currentUser?.photoURL)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-stone-900 w-[2.5rem] h-[2.5rem] rounded-full hover:bg-stone-800"
          variant="outline"
        >
          <Avatar>
            <AvatarImage src={currentUser?.photoURL || undefined} />
            <AvatarFallback>
              <SignInIcon className="rounded-full absolute h-[0.8rem] w-[0.8rem] sign-in" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex" align="end">
        {userLoggedIn ? (
          <div>
            <div>
              {currentUser?.displayName
                ? currentUser.displayName
                : currentUser?.email}
            </div>
            <Button
              onClick={() => {
                doSignOut().then(() => {
                  navigate(ROUTES.LOGIN)
                })
              }}
            >
              SignOut
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
        <div className="ml-2 flex items-center justify-center">
          <ModeToggle />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default SignInMenu
