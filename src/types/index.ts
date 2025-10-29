export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating?: {
      rate: number
      count: number
    }
  }
  
  export interface CartItem extends Product {
    quantity: number
  }
  
  export interface CartContextType {
    items: CartItem[]
    addItem: (product: Product) => void
    removeItem: (productId: number) => void
    increaseQuantity: (productId: number) => void
    decreaseQuantity: (productId: number) => void
    getTotalItems: () => number
    getTotalPrice: () => string
    getItems: () => CartItem[]
    clearCart: () => void
  }
  
  