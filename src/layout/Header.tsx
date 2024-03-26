import React from 'react'

import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'

const Header: React.FC = () => (
  <header className="flex h-20 w-full mx-auto items-center flex-col mb-5">
    <div className="flex items-center w-[1200px] justify-between h-full flex-row">
      <nav>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          FreeToGame
        </h1>
      </nav>
      <ModeToggle />
    </div>
    <Separator />
  </header>
)

export default Header
