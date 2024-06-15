import { Menu } from 'lucide-react'
import { X } from 'lucide-react'
import React from 'react'

import UserMenu from './UserMenu'

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

const DrawerMenu: React.FC<UserType> = ({ userLoggedIn, currentUser }) => (
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
      <DrawerTitle className="my-5">Name Surname</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
      <UserMenu userLoggedIn={userLoggedIn} currentUser={currentUser} />
      <DrawerFooter></DrawerFooter>
    </DrawerContent>
  </Drawer>
)

export default DrawerMenu
