import { memo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '@/types/product'
import ProductImage from '@/components/menu/ProductImage'
import { focusRingClasses } from '@/constants/a11y'
import { getCategoryById } from '@/utils/menuData'
import { formatCurrency } from '@/utils/formatCurrency'
import { cn } from '@/utils/cn'

interface ProductCardProps {
  product: Product
}

const MotionLink = motion.create(Link)

function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryById(product.categoryId)

  return (
    <MotionLink
      to={`/cardapio/${product.id}`}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'border-wood-800/60 bg-surface hover:border-wood-600/80 group flex h-full flex-col overflow-hidden rounded-2xl border transition-colors hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]',
        focusRingClasses,
      )}
    >
      <ProductImage
        image={product.image}
        name={product.name}
        categoryIcon={category?.icon}
        className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col justify-between gap-3 p-4">
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
      </div>
    </MotionLink>
  )
}

export default memo(ProductCard)
