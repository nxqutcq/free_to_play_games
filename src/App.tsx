import './styles/main.module.scss'
import Footer from './layout/Footer'
import Header from './layout/Header'
import MainPage from './pages/MainPage'

const App = () => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}
  >
    <Header />
    <MainPage />
    <Footer />
  </div>
)
export default App
