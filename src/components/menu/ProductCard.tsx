import type { Product } from '@/types/product'
import { formatCurrency } from '@/utils/formatCurrency'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="border-wood-800/60 flex items-baseline justify-between gap-4 border-b py-3 last:border-b-0">
      <div className="min-w-0">
        <p className="text-cream text-sm font-medium sm:text-base">
          {product.name}
        </p>
        {product.description && (
          <p className="text-cream-dim mt-0.5 text-xs sm:text-sm">
            {product.description}
          </p>
        )}
      </div>
      <span className="text-flame-300 font-display shrink-0 text-sm sm:text-base">
        {formatCurrency(product.price)}
      </span>
    </li>
  )
}

export default ProductCard
