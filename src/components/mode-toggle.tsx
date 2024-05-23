import { Palette, Moon, Sun } from 'lucide-react'

import { useTheme } from '@/components/theme-provider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-full">
          <DropdownMenuItem>
            <Palette className="mr-[1rem] w-[1rem]" />
            Theme
          </DropdownMenuItem>
          <span className="sr-only">Toggle theme</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-[0.5rem] w-[1rem]" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-[0.5rem] w-[1rem]" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
