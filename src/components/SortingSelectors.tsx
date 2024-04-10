import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { selectOptions } from '@/constants'
import { SortingSelectorsProps } from '@/types/games'

const SortingSelectors: React.FC<SortingSelectorsProps> = ({
  onPlatformChange,
  onSortChange,
  onCategoryChange,
}) => (
  <div className="sm:px-5 xl:px-0 md:px-5 flex justify-between min-h-[70px] xs:flex-row xs:flex-wrap xs:pb-5 xs:gap-2">
    {selectOptions.map((select) => (
      <div key={select.placeholder}>
        <Select>
          <SelectTrigger className="max-w-[max-content] hover:bg-accent transition-colors">
            <SelectValue placeholder={select.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {select.options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                onClick={(event) => {
                  if (event.target !== event.currentTarget) return
                  event.stopPropagation()
                  switch (select.placeholder) {
                    case 'Platform':
                      onPlatformChange(option.value)
                      break
                    case 'Genre/Tag':
                      onCategoryChange(option.value)
                      break
                    case 'Sort By':
                      onSortChange(option.value)
                      break
                    default:
                      break
                  }
                }}
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
      className="hover:bg-accent transition-colors flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 max-w-[max-content]"
    >
      Advanced Filters
    </button>
  </div>
)
export default SortingSelectors
