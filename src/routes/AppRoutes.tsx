import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home, GamePage, GamesPage, NotFound } from './LazyComponents'

import Loader from '@/components/shared/Loader.tsx'
import ScrollToTopOnPageChange from '@/hooks/useScrollToTopOnPageChange'

export const AppRoutes: React.FC = () => (
  <div className="mb-5 flex items-start justify-center min-h-screen w-screen">
    <Suspense fallback={<Loader />}>
      <ScrollToTopOnPageChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/game/:id" element={<GamePage />} />
        <Route path="/games/:category" element={<GamesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </div>
)
