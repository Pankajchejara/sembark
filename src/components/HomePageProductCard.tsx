import { renderStars } from "../common/renderStars"
import type { Product } from "../types"

export default function HomePageProductCard({ product }: { product: Product }) {
  return (
    <div
      className="
        flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg
        transition-all duration-300 cursor-pointer border border-blue-100 hover:border-blue-300
        w-[250px] sm:w-[200px] md:w-[220px] lg:w-60 xl:w-[260px] 
      "
    >
      <div className="h-36 sm:h-40 md:h-44 lg:h-48 flex items-center justify-center bg-blue-50">
        <img
          src={product.image || '/placeholder.svg'}
          alt={product.title}
          className="max-w-full max-h-full object-contain p-3"
        />
      </div>

      <div className="p-3 flex flex-col justify-between flex-grow">
        <h3
          className="
            text-sm sm:text-base md:text-lg font-medium text-blue-900
            line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]
          "
        >
          {product.title}
        </h3>

        <div className="mt-3 space-y-1">
          <p className="text-base sm:text-lg font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>

          {product.rating && (
            <div className="flex items-center gap-2 mb-1">
              {renderStars(product.rating?.rate ?? 0)}
              <span className="text-xs sm:text-sm text-gray-600">
                ({product.rating?.rate ?? 0})
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
