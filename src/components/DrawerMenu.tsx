import { Menu } from 'lucide-react'
import { X } from 'lucide-react'
import React from 'react'

import SearchBar from './SearchBar'
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

const DrawerMenu: React.FC<DrawerType> = ({
  userLoggedIn,
  currentUser,
  gamesData,
}) => (
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
      <div className="xs:block xs4:hidden">
        <SearchBar data={gamesData || []} />
      </div>
      <DrawerFooter></DrawerFooter>
    </DrawerContent>
  </Drawer>
)

export default React.memo(DrawerMenu)
