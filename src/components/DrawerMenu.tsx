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
import { DrawerType } from '@/types/games'

const DrawerMenu: React.FC<DrawerType> = ({ userLoggedIn, currentUser }) => (
  <Drawer direction="left">
    <DrawerTrigger className="md:hidden">
      <Menu />
    </DrawerTrigger>
    <DrawerContent className="flex flex-col items-center">
      <DrawerHeader className="w-full flex flex-col">
        <div className="w-full flex justify-end mb-5">
          <DrawerClose>
            <X />
          </DrawerClose>
        </div>
      </DrawerHeader>
      <UserMenu userLoggedIn={userLoggedIn} currentUser={currentUser} />
      <DrawerFooter></DrawerFooter>
    </DrawerContent>
  </Drawer>
)

export default React.memo(DrawerMenu)
