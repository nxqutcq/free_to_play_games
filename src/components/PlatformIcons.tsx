import React from 'react'

import { BrowserIcon, WindowsIcon } from './icons'

import { PlatformIconsProps } from '@/types/games'

const PlatformIcons: React.FC<PlatformIconsProps> = ({ platform }) => (
  <div className="flex flex-row w-4 aspect-square">
    {platform?.includes('PC (Windows)') && (
      <div title="Available on Windows" className="">
        <WindowsIcon className="windows-icon" />
      </div>
    )}
    {platform?.includes('Web Browser') && (
      <div title="Available on Browser" className="">
        <BrowserIcon className="browser-icon" />
      </div>
    )}
  </div>
)

export default PlatformIcons
