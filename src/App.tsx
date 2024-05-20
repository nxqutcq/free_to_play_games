import './styles/global.scss'
import { AppRoutes } from './routes/AppRoutes'

import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/contexts/authContext'

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </ThemeProvider>
)
export default App
