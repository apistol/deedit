import Loader from './loader'
import Footer from './footer'
import Meta from './meta'
import Navbar from "./navbar";

type Props = {
  preview?: boolean
  children: React.ReactNode,
}


const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/*<Loader preview={preview} />*/}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
