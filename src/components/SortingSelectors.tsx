import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from './ui/button'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { genreOptions, platformOptions, sortOptions } from '@/constants'
import { ROUTES } from '@/routes'
import { SortingSelectorsProps } from '@/types/games'

const SortingSelectors: React.FC<SortingSelectorsProps> = ({
  onPlatformChange,
  onSortChange,
  onCategoryChange,
}) => {
  const navigate = useNavigate()

  return (
    <div className="items-center mt-5 sm:px-5 xl:px-0 md:px-5 flex justify-between min-h-[70px] xs:flex-row xs:flex-wrap xs:pb-5 w-full">
      <Select onValueChange={(value) => onPlatformChange(value)}>
        <SelectTrigger className="xl:w-[150px] xs:w-[200px] hover:bg-accent transition-colors">
          <SelectValue placeholder="Platform" />
        </SelectTrigger>
        <SelectContent>
          {platformOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onCategoryChange(value)}>
        <SelectTrigger className="xl:w-[150px] xs:w-[200px] hover:bg-accent transition-colors">
          <SelectValue placeholder="Genre/Tag" />
        </SelectTrigger>
        <SelectContent>
          {genreOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onSortChange(value)}>
        <SelectTrigger className="xl:w-[150px] xs:w-[200px] hover:bg-accent transition-colors">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        onClick={() => navigate(`/${ROUTES.FILTERS}`)}
        aria-label="Advanced Filters"
        id="FiltersButton"
        type="button"
        role="button"
        className="flex h-10 w-full bg-background text-white hover:text-black items-center justify-between rounded-md border px-3 py-2 text-sm max-w-[max-content]"
      >
        Advanced Filters
      </Button>
    </div>
  )
}

export default SortingSelectors
