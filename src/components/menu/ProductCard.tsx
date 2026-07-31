import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '@/types/product'
import { formatCurrency } from '@/utils/formatCurrency'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Link
        to={`/cardapio/${product.id}`}
        className="border-wood-800/60 bg-surface hover:border-wood-600 hover:shadow-brasa-600/10 flex h-full flex-col justify-between gap-3 rounded-2xl border p-4 transition-colors hover:shadow-lg"
      >
        <div>
          <p className="text-cream text-sm font-medium sm:text-base">
            {product.name}
          </p>
          {product.description && (
            <p className="text-cream-dim mt-1 line-clamp-2 text-xs sm:text-sm">
              {product.description}
            </p>
          )}
        </div>
        <span className="text-flame-300 font-display text-sm sm:text-base">
          {formatCurrency(product.price)}
        </span>
      </Link>
    </motion.div>
  )
}

export default ProductCard
