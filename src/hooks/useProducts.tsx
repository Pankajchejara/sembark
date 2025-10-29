import { useEffect, useState } from "react"
import type { Product } from "../types"

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [productRes, categoryRes] = await Promise.all([
          fetch("https://fakestoreapi.com/products"),
          fetch("https://fakestoreapi.com/products/categories"),
        ])
        if (!productRes.ok || !categoryRes.ok) throw new Error("Failed to fetch data")

        const productData: Product[] = await productRes.json()
        const categoryData: string[] = await categoryRes.json()
        setProducts(productData)
        setCategories(categoryData)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { products, categories, loading, error }
}
