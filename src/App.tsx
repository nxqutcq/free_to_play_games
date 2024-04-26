import './styles/global.scss'
import { AppRoutes } from './routes/AppRoutes'

import { ThemeProvider } from '@/components/theme-provider'

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AppRoutes />
  </ThemeProvider>
)
export default App
