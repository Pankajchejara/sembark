import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import OrderSummary from "../components/OrderSummary"
import { IoCartOutline } from "react-icons/io5"
import { FaPlus, FaMinus } from "react-icons/fa6"
import CustomButton from "../common/CustomButton"
import { FaArrowLeft } from "react-icons/fa"

const CartPage: React.FC = () => {
  const {
    getItems,
    getTotalItems,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart()

  const cartItems = getItems()
  const totalItems = getTotalItems()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-6 lg:px-8 pt-20 md:pt-14 w-full">
      <div className="max-w-6xl mx-auto w-full">
        <CustomButton icon={<FaArrowLeft />} text="Back" clickHandle={() => navigate("/")} />
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-sm sm:text-base text-blue-600 font-medium">
            {totalItems === 0
              ? "Your cart is empty"
              : `${totalItems} item${totalItems !== 1 ? "s" : ""} in cart`}
          </p>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="bg-blue-50 rounded-lg shadow p-6 sm:p-8 md:p-10 text-center border border-blue-200 w-full">
            <IoCartOutline className="text-blue-700 text-6xl mx-auto mb-4" />
            <p className="text-blue-700 mb-4 sm:mb-6 text-sm sm:text-base">
              Your cart is empty. Start shopping!
            </p>
            <Link
              to="/"
              className="inline-block bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 text-white text-sm font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Cart Items */}
            <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-blue-50 rounded-lg shadow p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow border border-blue-200"
                >
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                    <div className="shrink-0 w-full sm:w-24 md:w-28 h-28 sm:h-24 md:h-28 bg-white rounded-lg overflow-hidden border border-blue-200">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-blue-900 mb-1 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-700 mb-3 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="bg-blue-200 hover:bg-blue-300 text-blue-800 px-2 py-1 rounded"
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="font-semibold text-blue-900 text-sm sm:text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="bg-blue-200 hover:bg-blue-300 text-blue-800 px-2 py-1 rounded"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>

                        <div className="flex items-center space-x-2">
                          <span className="text-xs sm:text-sm text-blue-600 font-medium">
                            Price:
                          </span>
                          <span className="text-base sm:text-lg md:text-xl font-bold text-blue-600">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-800 font-semibold text-xs sm:text-sm  cursor-pointer"
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <OrderSummary />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage
