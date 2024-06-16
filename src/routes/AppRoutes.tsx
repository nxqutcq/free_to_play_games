import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import {
  Home,
  GamePage,
  GamesPage,
  NotFound,
  Login,
  Register,
  Filters,
  Library,
} from './LazyComponents'
import PrivateRoute from './PrivateRoute'
import { ROUTES } from '../routes/index'

import Loader from '@/components/shared/Loader.tsx'
import ScrollToTopOnPageChange from '@/hooks/useScrollToTopOnPageChange'
import Layout from '@/layout/Layout'

export const AppRoutes: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <ScrollToTopOnPageChange />
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.GAMES} element={<GamesPage />} />
        <Route
          path={ROUTES.LIBRARY}
          element={
            <PrivateRoute>
              <Library />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.FILTERS} element={<Filters />} />
        <Route path={ROUTES.GAME_ID} element={<GamePage />} />
        <Route path={ROUTES.GAMES_CATEGORY} element={<GamesPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  </Suspense>
)
