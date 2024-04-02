import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SortingSelectorsProps } from '@/types/games'

const SortingSelectors: React.FC<SortingSelectorsProps> = ({
  onCategoryChange,
  onPlatformChange,
  onSortChange,
}) => {
  const selects = [
    {
      placeholder: 'Platform',
      options: [
        { value: 'all', label: 'All' },
        { value: 'pc', label: 'PC (Windows)' },
        { value: 'browser', label: 'Browser (Web)' },
      ],
      onChange: onPlatformChange,
    },
    {
      placeholder: 'Genre/Tag',
      options: [
        { value: 'all', label: 'All' },
        { value: 'pc', label: 'PC' },
        { value: 'browser', label: 'Browser' },
      ],
      onChange: onCategoryChange,
    },
    {
      placeholder: 'Sort By',
      options: [
        { value: 'all', label: 'All' },
        { value: 'pc', label: 'PC' },
        { value: 'browser', label: 'Browser' },
      ],
      onChange: onSortChange,
    },
  ]

  return (
    <div className="flex justify-between min-h-[70px] xs:flex-row xs:flex-wrap xs:pb-5 xs:gap-2">
      {selects.map((select) => (
        <div key={select.placeholder}>
          <Select>
            <SelectTrigger className="max-w-[max-content]">
              <SelectValue placeholder={select.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {select.options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  onChange={() => select.onChange(option.value)}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
      <button
        type="button"
        role="link"
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 max-w-[max-content]"
      >
        Advanced Filters
      </button>
    </div>
  )
}

export default SortingSelectors
