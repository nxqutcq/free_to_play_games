import React from 'react'

import { IconProps } from '@/types/games'

export const BrowserIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={`${className} text-black dark:text-white`}
    width="100%"
    height="100%"
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <circle cx="96" cy="96" r="74" stroke="currentColor" strokeWidth="12" />
    <ellipse
      cx="96"
      cy="96"
      stroke="currentColor"
      strokeWidth="12"
      rx="30"
      ry="74"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
      d="M28 72h136M28 120h136"
    />
  </svg>
)
