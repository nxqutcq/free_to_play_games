import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { GAME_TYPES } from '@/constants'

const HeaderFreeGamesMenu: React.FC = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Free Games</NavigationMenuTrigger>
        <NavigationMenuContent>
          {GAME_TYPES.map((gameType, index) => (
            <React.Fragment key={index}>
              <NavigationMenuLink className="flex w-[220px]">
                <NavLink
                  className="min-h-[35px] w-[220px] block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  draggable={false}
                  to={gameType.url}
                  role="link"
                >
                  {gameType.name}
                </NavLink>
              </NavigationMenuLink>
              {index === GAME_TYPES.length - 2 && <Separator />}
            </React.Fragment>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

export default HeaderFreeGamesMenu
