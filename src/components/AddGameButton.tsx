import { Plus } from 'lucide-react'
import React, { useState } from 'react'

import { Button } from './ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const AddGameButton: React.FC = () => {
  const [position, setPosition] = useState('')
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="absolute hover:bg-gray-300 rounded-lg px-3.5 rounded-t-none rounded-br-none top-0 right-0">
          <Plus />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="top-[-10rem] absolute left-[75px]"
        align="start"
      >
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            onClick={(event) => {
              if (event.target !== event.currentTarget) return
              event.stopPropagation()
            }}
            value="top"
          >
            Play later
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            onClick={(event) => {
              if (event.target !== event.currentTarget) return
              event.stopPropagation()
            }}
            value="bottom"
          >
            Current playing
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            onClick={(event) => {
              if (event.target !== event.currentTarget) return
              event.stopPropagation()
            }}
            value="right"
          >
            Played
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            onClick={(event) => {
              if (event.target !== event.currentTarget) return
              event.stopPropagation()
            }}
            value="left"
          >
            Completed
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AddGameButton
