import { onAuthStateChanged } from 'firebase/auth'
import { User } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

import { auth } from '@/firebase/firebase'

const AuthContext = createContext<{
  currentUser: User | null
  userLoggedIn: boolean
  loading: boolean
} | null>(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser)
    return unsubscribe
  }, [])

  async function initializeUser(user: User | null) {
    if (user) {
      setCurrentUser({ ...user })
      setUserLoggedIn(true)
    } else {
      setCurrentUser(null)
      setUserLoggedIn(false)
    }
    setLoading(false)
  }
  const value = {
    currentUser,
    userLoggedIn,
    loading,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
