import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home, GamePage, GamesPage, NotFound } from './LazyComponents'

import Loader from '@/components/shared/Loader.tsx'
import ScrollToTopOnPageChange from '@/hooks/useScrollToTopOnPageChange'

export const AppRoutes: React.FC = () => (
  <div className="mb-5 xs1:w-[375px] xs4:w-[425px] xs3:w-[480px] flex min-h-screen xs2:w-[400px] xs:w-[320px] justify-center items-center xl:w-[1200px] sm:w-[640px] lg:w-[1024px] md:w-[768px]">
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
