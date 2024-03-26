import React from 'react'

import { ModeToggle } from '@/components/mode-toggle'

const Header: React.FC = () => (
  <header className="flex h-20 bg-[rgb(23,23,23)] w-full justify-center items-center;">
    <ModeToggle />
  </header>
)

export default Header
