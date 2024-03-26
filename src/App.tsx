import './styles/global.scss'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Home from './pages/Home'

import { ThemeProvider } from '@/components/theme-provider'

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="flex items-center flex-col w-full">
      <Header />
      <Home />
      <Footer />
    </div>
  </ThemeProvider>
)
export default App
