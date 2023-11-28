import { AppProps } from 'next/app'
import '../styles/index.css'
import "../styles/Home.module.css"
import { useRouter } from 'next/router'
import { AuthProvider } from '../context/auth'
import Axios from 'axios'
import Navbar from '../components/layout/navbar'


// Axios.defaults.baseURL = 'https://nestjs-api.fly.dev'
Axios.defaults.baseURL = 'http://localhost:3000'
Axios.defaults.withCredentials = true
function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const authRoutes = ['/register', '/login']
  const authRoute = authRoutes.includes(pathname)

  return (
      <AuthProvider>
        {!authRoute && <Navbar />}
        <Component {...pageProps} />
      </AuthProvider>
  )
}

export default App
