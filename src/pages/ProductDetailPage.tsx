"use client"

import React from "react"
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"
import CustomButton from "../common/CustomButton"
import { renderStars } from "../common/renderStars"
import ErrorState from "../common/states/ErrorState"
import LoadingState from "../common/states/LoadingState"
import { useCart } from "../context/CartContext"
import { useProductById } from "../hooks/useProductById"

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addItem, getItems } = useCart()
  const { product, loading, error } = useProductById(id)
  const [added, setAdded] = React.useState(false)

  const items = getItems()
  const isInCart = product && items.some((item) => item.id === product.id)

  const handleAddToCart = () => {
    if (!product) return
    if (isInCart) {
      navigate("/cart")
    } else {
      addItem(product)
      setAdded(true)
      setTimeout(() => setAdded(false), 2000)
    }
  }

  if (loading)
    return <div className="flex justify-center items-center w-full h-screen">
      <LoadingState />
    </div>
  if (error)
    return <ErrorState />
  if (!product)
    return <p className="text-center p-10">Product not found</p>

  return (
    <div className="p-5 mx-auto">
      <CustomButton icon={<FaArrowLeft />} text="Back" clickHandle={() => navigate("/")} />
      <div className="flex flex-col md:flex-row gap-6  rounded-2xl p-6 shadow-md">
        <div className="flex justify-center items-center w-full md:w-1/2 bg-blue-50 rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-[200px] max-h-[200px] object-contain p-4"
          />
        </div>
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h2 className="text-xl font-semibold text-blue-500 mb-2">
              {product.title}
            </h2>
            <p className="text-sm text-gray-400 mb-1 capitalize">
              {product.category}
            </p>
            <p className="text-sm mb-3">{product.description}</p>

            {/* Rating section */}
            <div className="flex items-center gap-2 mb-2">
              {renderStars(product.rating?.rate ?? 0)}
              <span className="text-sm text-gray-600">
                ({product.rating?.rate ?? 0})
              </span>
            </div>

            <h3 className="text-lg font-bold text-blue-500 mb-3">
              ${product.price}
            </h3>
          </div>

          <button
            onClick={handleAddToCart}
            className={`px-5 py-2 rounded-lg text-white transition ${isInCart
                ? "bg-green-600 hover:bg-green-700"
                : added
                  ? "bg-green-600"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {isInCart
              ? "Go to Cart"
              : added
                ? "Added to Cart"
                : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
