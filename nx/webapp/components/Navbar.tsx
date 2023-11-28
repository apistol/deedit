import Link from 'next/link'
import deeditLogo from "@assets/deedit.png"

const Navbar: React.FC = () => (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 px-5 bg-white">
        {/* Logo and title */}
        <div className="flex items-center">
            <Link href="/">
                <div
                    style={{ backgroundImage: "url('/assets/deedit.png')", backgroundSize:"contain" }}
                    className="w-8 h-8 mr-2 bg-red-100"
                />
            </Link>
            <span className="text-2xl font-semibold">
        <Link href="/">deedit</Link>
      </span>
        </div>
        {/* Serach Input */}
        <div className="flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white">
            <i className="pl-4 pr-3 text-gray-500 fas fa-search "></i>
            <input
                type="text"
                className="py-1 pr-3 bg-transparent rounded w-160 focus:outline-none"
                placeholder="Search"
            />
        </div>
        {/* Auth buttons */}
        <div className="flex">
            <Link href="/login">
                <span className="w-32 py-1 mr-4 leading-5 hollow blue button">log in</span>
            </Link>
            <Link href="/register">
                <span className="w-32 py-1 leading-5 blue button">sign up</span>
            </Link>
        </div>
    </div>
)

export default Navbar