import './App.css'
import { ThemeProvider } from './components/themes/theme-provider'
import Login from './pages/Login'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Login />
    </ThemeProvider>
  )
}

export default App
