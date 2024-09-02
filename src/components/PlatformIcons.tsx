import React from 'react'

import { BrowserIcon, WindowsIcon } from './icons'

import { PlatformIconsProps } from '@/types/games'

const PlatformIcons: React.FC<PlatformIconsProps> = ({ platform }) => (
  <div className="flex flex-row aspect-square px-2 gap-2">
    {platform?.includes('PC (Windows)') && (
      <div title="Available on Windows" className="w-4 xxs:w-3 flex">
        <WindowsIcon className="windows-icon" />
      </div>
    )}
    {platform?.includes('Web Browser') && (
      <div title="Available on Browser" className="w-4 xxs:w-3 flex">
        <BrowserIcon className="browser-icon" />
      </div>
    )}
  </div>
)

export default PlatformIcons
