import './styles/main.module.scss'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Home from './pages/Home'

import { ThemeProvider } from '@/components/theme-provider'

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Header />
      <Home />
      <Footer />
    </div>
  </ThemeProvider>
)
export default App
