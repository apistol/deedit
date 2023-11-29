import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/Home.module.css";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/auth";
import Axios from "axios";
import Navbar from "../components/layout/navbar";
import { SWRConfig } from "swr";

const fetcher = async (url: string) => {
  try {
    const res = await Axios.get(url);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

// Axios.defaults.baseURL = 'https://nestjs-api.fly.dev'
Axios.defaults.baseURL = "http://localhost:3000";
Axios.defaults.withCredentials = true;
function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const authRoute = authRoutes.includes(pathname);

  return (
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 10000,
      }}
    >
      <AuthProvider>
        {!authRoute && <Navbar />}
        <Component {...pageProps} />
      </AuthProvider>
    </SWRConfig>
  );
}

export default App;
