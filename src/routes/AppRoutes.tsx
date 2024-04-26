import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home, GamePage, GamesPage, NotFound } from './LazyComponents'

import Loader from '@/components/shared/Loader.tsx'
import ScrollToTopOnPageChange from '@/hooks/useScrollToTopOnPageChange'
import Layout from '@/layout/Layout'

export const AppRoutes: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <ScrollToTopOnPageChange />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="games" element={<GamesPage />} />
        <Route path="games/game/:id" element={<GamePage />} />
        <Route path="games/:category" element={<GamesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Suspense>
)
