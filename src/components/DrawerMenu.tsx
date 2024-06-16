import { Menu } from 'lucide-react'
import { X } from 'lucide-react'
import React from 'react'

import UserMenu from './UserMenu'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
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
      <UserMenu userLoggedIn={userLoggedIn} currentUser={currentUser} />
      <DrawerFooter></DrawerFooter>
    </DrawerContent>
  </Drawer>
)

export default DrawerMenu
