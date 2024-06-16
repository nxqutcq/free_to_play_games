import React from 'react'

import UserMenu from './UserMenu'

import UserFallbackIcon from '@/components/icons/UserFallbackIcon'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { UserType } from '@/types/games'

const SignInMenu: React.FC<UserType> = ({ currentUser, userLoggedIn }) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="xs:hidden md:block" asChild>
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
    </DropdownMenuTrigger>

    <DropdownMenuContent
      className="flex px-2 items-center py-2 flex-col w-[200px]"
      align="end"
    >
      <UserMenu userLoggedIn={userLoggedIn} currentUser={currentUser} />
    </DropdownMenuContent>
  </DropdownMenu>
)

export default SignInMenu
