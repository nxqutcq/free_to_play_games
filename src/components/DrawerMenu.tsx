import { Menu } from 'lucide-react'
import { X } from 'lucide-react'
import React from 'react'

import UserMenu from './UserMenu'

import UserFallbackIcon from '@/components/icons/UserFallbackIcon'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { UserType } from '@/types/games'

const DrawerMenu: React.FC<UserType> = ({ userLoggedIn }) => (
  <Drawer direction="left">
    <DrawerTrigger className="md:hidden">
      <Menu />
    </DrawerTrigger>
    <DrawerContent className="flex flex-col items-center">
      <DrawerHeader className="w-full justify-end">
        <DrawerClose>
          <X />
        </DrawerClose>
      </DrawerHeader>
      <Avatar className="mt-5">
        <AvatarImage />
        <AvatarFallback>
          <UserFallbackIcon className="rounded-full absolute h-[0.8rem] w-[0.8rem] sign-in" />
        </AvatarFallback>
      </Avatar>
      <DrawerTitle className="my-5">Name Surname</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
      <UserMenu userLoggedIn={userLoggedIn} />
      <DrawerFooter></DrawerFooter>
    </DrawerContent>
  </Drawer>
)

export default DrawerMenu
