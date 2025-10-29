import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { IoCartOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
    const { getTotalItems } = useCart()
    const cartCount = getTotalItems()

    return (
        <nav className="bg-blue-600 text-white shadow-lg sticky top-0  z-50 w-full">
            <div className="max-w-7xl w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

                    <Link to="/" className="flex items-center space-x-1 sm:space-x-2 hover:opacity-80 transition-opacity">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">MyShop</span>
                    </Link>

                    <Link
                        to="/cart"
                        className="relative flex items-center space-x-1 sm:space-x-2 hover:opacity-80 transition-opacity"
                    >
                        <IoCartOutline className="text-white text-3xl" />
                        <span className="absolute -top-2 -right-2 bg-white text-blue-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {cartCount}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
