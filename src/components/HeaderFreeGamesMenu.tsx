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

const HeaderFreeGamesMenu: React.FC = () => {
  const gameTypes = [
    { name: 'MMORPG', url: '/games/mmorpg' },
    { name: 'Shooter', url: '/games/shooter' },
    { name: 'MOBA', url: '/games/moba' },
    { name: 'Anime', url: '/games/anime' },
    { name: 'Battle Royale', url: '/games/battle-royale' },
    { name: 'Strategy', url: '/games/strategy' },
    { name: 'Fantasy', url: '/games/fantasy' },
    { name: 'Sci-Fi', url: '/games/sci-fi' },
    { name: 'Card Games', url: '/games/card' },
    { name: 'Racing', url: '/games/racing' },
    { name: 'Fighting', url: '/games/fighting' },
    { name: 'Social', url: '/games/social' },
    { name: 'Sports', url: '/games/sports' },
    { name: 'Free To PlayGames Games', url: '/games' },
  ]
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Free Games</NavigationMenuTrigger>
          <NavigationMenuContent>
            {gameTypes.map((gameType, index) => (
              <React.Fragment key={index}>
                <NavigationMenuLink className="flex w-[250px]">
                  <NavLink
                    className="p-5 flex w-[full] justify-center h-[38px] items-center flex-row"
                    draggable={false}
                    to={gameType.url}
                    role="link"
                  >
                    {gameType.name}
                  </NavLink>
                </NavigationMenuLink>
                {index === gameTypes.length - 2 && <Separator />}
              </React.Fragment>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default HeaderFreeGamesMenu
