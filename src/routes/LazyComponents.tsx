import { lazy } from 'react'

export const Home = lazy(() => import('../pages/Home.tsx'))
export const GamePage = lazy(() => import('../pages/GamePage.tsx'))
export const GamesPage = lazy(() => import('../pages/GamesPage.tsx'))
export const NotFound = lazy(() => import('../pages/NotFound.tsx'))
export const Register = lazy(() => import('../auth/register/Register.tsx'))
export const Login = lazy(() => import('../auth/login/Login.tsx'))
export const Library = lazy(() => import('../pages/Library.tsx'))
export const Filters = lazy(() => import('../pages/Filters.tsx'))
