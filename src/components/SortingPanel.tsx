import React from 'react'

import SortingSelectors from './SortingSelectors'

import { Separator } from '@/components/ui/separator'
import { SortingPanelProps } from '@/types/games'

const SortingPanel: React.FC<SortingPanelProps> = ({
  onPlatformChange,
  onSortChange,
  onCategoryChange,
}) => (
  <div className="overflow-x-hidden xs:flex xs:flex-col p-1">
    <SortingSelectors
      onCategoryChange={onCategoryChange}
      onPlatformChange={onPlatformChange}
      onSortChange={onSortChange}
    />
    <Separator className="mb-5" />
  </div>
)

export default SortingPanel
