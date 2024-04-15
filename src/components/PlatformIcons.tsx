import React from 'react'

import { BrowserIcon, WindowsIcon } from './icons'

import { PlatformIconsProps } from '@/types/games'

const PlatformIcons: React.FC<PlatformIconsProps> = ({ platform }) => (
  <div className="flex flex-row">
    {platform?.includes('PC (Windows)') && (
      <div title="Available on Windows" className="px-2">
        <WindowsIcon className="windows-icon" />
      </div>
    )}
    {platform?.includes('Web Browser') && (
      <div title="Available on Browser" className="px-2">
        <BrowserIcon className="browser-icon" />
      </div>
    )}
  </div>
)

export default PlatformIcons
