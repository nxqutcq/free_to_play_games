import React from 'react'
import { NavLink } from 'react-router-dom'

import SignInIcon from '@/components/icons/SignInIcon'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const SignInMenu: React.FC = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        className="bg-stone-900 w-[2.5rem] h-[2.5rem] rounded-full hover:bg-stone-800"
        variant="outline"
      >
        <SignInIcon className="rounded-full absolute h-[0.8rem] w-[0.8rem] sign-in" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="flex" align="end">
      <div>
        <NavLink to={'/login'}>
          <DropdownMenuItem>Login</DropdownMenuItem>
        </NavLink>
        <NavLink to={'/register'}>
          <DropdownMenuItem>Register</DropdownMenuItem>
        </NavLink>
      </div>
      <div className="ml-2 flex items-center justify-center">
        <ModeToggle />
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
)

export default SignInMenu
