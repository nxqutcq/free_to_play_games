import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/contexts/authContext'

interface RouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<RouteProps> = ({ children }) => {
  const auth = useAuth()
  const { userLoggedIn } = auth || {}

  return userLoggedIn ? <>{children}</> : <Navigate to="/login" />
}

export default PrivateRoute
