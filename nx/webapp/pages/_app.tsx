import { AppProps } from 'next/app'
import '../styles/index.css'
import "../styles/Home.module.css"

import Axios from 'axios'
// Axios.defaults.baseURL = 'https://nestjs-api.fly.dev'
Axios.defaults.baseURL = 'http://localhost:3000'
Axios.defaults.withCredentials = true
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
