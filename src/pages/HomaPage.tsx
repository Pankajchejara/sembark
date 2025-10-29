"use client"

import React, { useEffect, useMemo, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import ErrorState from "../common/states/ErrorState"
import LoadingState from "../common/states/LoadingState"
import HomePageProductCard from "../components/HomePageProductCard"
import { useDebounce } from "../hooks/useDebounce"
import { useProducts } from "../hooks/useProducts"

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { products, categories, loading, error } = useProducts()

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortOrder, setSortOrder] = useState("")

  const debouncedSearch = useDebounce(searchQuery, 500)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const search = params.get("search") || ""
    const categoryParam = params.get("category") || ""
    const sort = params.get("sort") || ""

    setSearchQuery(search)
    setSortOrder(sort)
    setSelectedCategories(categoryParam ? categoryParam.split(",") : [])
  }, [location.search])


  useEffect(() => {
    const params = new URLSearchParams()
    if (debouncedSearch) params.set("search", debouncedSearch)
    if (selectedCategories.length > 0)
      params.set("category", selectedCategories.join(","))
    if (sortOrder) params.set("sort", sortOrder)

    navigate({ search: params.toString() }, { replace: true })
  }, [debouncedSearch, selectedCategories, sortOrder, navigate])

  // Filtering
  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (debouncedSearch.trim()) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          p.description.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category))
    }

    if (sortOrder === "price-asc") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortOrder === "price-desc") {
      filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [products, debouncedSearch, selectedCategories, sortOrder])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <LoadingState />
      </div>
    )
  }

  if (error) {
    return (
      <ErrorState />
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 p-4 md:p-6 lg:p-8 pt-24">
        <h1 className="mb-6 text-3xl md:text-4xl font-bold text-blue-900">
          Our Products
        </h1>

        {/* Filters Section */}
        <div className="mb-8 bg-blue-50 rounded-lg shadow-md p-4 border border-blue-200">
          <div className="flex flex-col md:flex-row md:justify-between gap-6">

            <div className="flex-1">
              <label className="block text-sm font-medium text-blue-900 mb-2">
                Search Products
              </label>
              <input
                type="text"
                placeholder="Search by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-blue-600"
              />
            </div>


            <div className="flex-1">
              <label className="block text-sm font-medium text-blue-900 mb-2">
                Filter by Categories
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-3 py-1 rounded-full text-sm border transition ${selectedCategories.includes(category)
                        ? "bg-blue-600 text-white border-blue-700"
                        : "bg-white text-blue-700 border-blue-300"
                      }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-blue-900 mb-2">
                Sort by Price
              </label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full px-3 py-2 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-sm text-blue-900"
              >
                <option value="">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <p className="text-sm text-blue-700 mt-3 font-medium">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="no-underline"
              >
                <HomePageProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[40vh]">
            <p className="text-blue-600 text-center px-4">
              No products found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
