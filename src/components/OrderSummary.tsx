
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
export default function OrderSummary() {
  const { getTotalPrice } = useCart()
  const totalPrice = getTotalPrice()
  return (
    <div className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start">
      <div className="bg-blue-50 rounded-lg shadow p-4 sm:p-6 border border-blue-200">
        <h2 className="text-lg sm:text-xl font-bold text-blue-900 mb-4 sm:mb-6">
          Order Summary
        </h2>

        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b-2 border-blue-200">
          <div className="flex justify-between text-sm sm:text-base text-blue-700">
            <span>Subtotal</span>
            <span className="font-semibold">${totalPrice}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base text-blue-700">
            <span>Shipping</span>
            <span className="font-semibold">Free</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base text-blue-700">
            <span>Tax</span>
            <span className="font-semibold">Calculated at checkout</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <span className="text-base sm:text-lg font-bold text-blue-900">
            Total
          </span>
          <span className="text-xl sm:text-2xl font-bold text-blue-600">
            ${totalPrice}
          </span>
        </div>

        <button onClick={() => {
          alert('Thanks for purchasing..')
        }} className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700  mb-2 sm:mb-3 text-sm sm:text-base">
          Proceed to Checkout
        </button>

        <Link
          to="/"
          className="block w-full text-center bg-white text-blue-600 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-100  border-2 border-blue-600 text-sm sm:text-base"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
