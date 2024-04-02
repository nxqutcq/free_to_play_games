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
  return (
    <div className="flex justify-between min-h-[70px] xs:flex-col xs:gap-5">
      <div className="flex flex-row justify-center">
        <div>
          <Select>
            <SelectTrigger className="max-w-[180px]">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" onClick={() => onPlatformChange('all')}>
                All
              </SelectItem>
              <SelectItem value="pc" onClick={() => onPlatformChange('pc')}>
                PC (Windows)
              </SelectItem>
              <SelectItem
                value="browser"
                onClick={() => onPlatformChange('browser')}
              >
                Browser (Web)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Select>
          <SelectTrigger className="max-w-[180px]">
            <SelectValue placeholder="Genre/Tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" onClick={() => onCategoryChange('browser')}>
              All
            </SelectItem>
            <SelectItem value="pc">PC</SelectItem>
            <SelectItem value="browser">Browser</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select>
          <SelectTrigger className="max-w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" onClick={() => onSortChange('browser')}>
              All
            </SelectItem>
            <SelectItem value="pc">PC</SelectItem>
            <SelectItem value="browser">Browser</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <a>Advanсed Filters</a>
    </div>
  )
}

export default SortingSelectors
