import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home.tsx'))
const GamePage = lazy(() => import('../pages/GamePage.tsx'))
const GamesList = lazy(() => import('../pages/GamesList.tsx'))
const NotFound = lazy(() => import('../pages/NotFound.tsx'))

export const AppRoutes: React.FC = () => (
  <Suspense fallback={<div>loader</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<GamesList />} />
      <Route path="/games/:id" element={<GamePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
)
