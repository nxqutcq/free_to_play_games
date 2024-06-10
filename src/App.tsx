import './styles/global.scss'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { AppRoutes } from './routes/AppRoutes'

import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/contexts/authContext'

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AuthProvider>
      <Header />
      <AppRoutes />
      <Footer />
    </AuthProvider>
  </ThemeProvider>
)
export default App
