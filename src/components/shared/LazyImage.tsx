import React, { lazy } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { GameImageType } from '@/types/games'

const LazyGameImage = lazy(() => import('./GameImage'))
const LazyImage = (props: GameImageType) => (
  <React.Suspense
    fallback={<Skeleton className="absolute inset-0 flex w-full" />}
  >
    <LazyGameImage {...props} />
  </React.Suspense>
)

export default LazyImage
