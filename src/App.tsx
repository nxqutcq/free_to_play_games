import './styles/global.scss'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { AppRoutes } from './routes/AppRoutes'

import { ThemeProvider } from '@/components/theme-provider'

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="flex items-center flex-col background-container">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  </ThemeProvider>
)
export default App
