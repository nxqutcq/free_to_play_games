import React from 'react'
import { Link } from 'react-router-dom'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { GAME_TYPES } from '@/constants'

const FreeGamesMenu: React.FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm text-white bg-stone-900 border">
            Free Games
          </NavigationMenuTrigger>
          <NavigationMenuContent className="overflow-y-auto max-h-[450px]">
            {GAME_TYPES.map((gameType, index) => (
              <React.Fragment key={index}>
                <Link
                  draggable={false}
                  to={gameType.url}
                  className="m-2 cursor-pointer text-sm min-h-[35px] xs:min-w-[fit-content] md:w-[200px] block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  {gameType.name}
                </Link>
                {index === GAME_TYPES.length - 2 && <Separator />}
              </React.Fragment>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default FreeGamesMenu
