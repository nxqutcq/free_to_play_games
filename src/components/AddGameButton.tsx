import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from './ui/button'

import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/contexts/authContext'
import { ROUTES } from '@/routes'

const AddGameButton: React.FC = () => {
  const [position, setPosition] = useState('')
  const auth = useAuth()
  const userLoggedIn = auth ? auth.userLoggedIn : false
  const navigate = useNavigate()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="absolute hover:bg-gray-300 rounded-lg px-3.5 rounded-t-none rounded-br-none top-0 right-0">
          <Plus />
        </Button>
      </DropdownMenuTrigger>
      {userLoggedIn ? (
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
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[320px]">
            <DialogHeader>
              <DialogTitle>Please log in first</DialogTitle>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => navigate(ROUTES.LOGIN)}>Log in</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </DropdownMenu>
  )
}

export default AddGameButton
