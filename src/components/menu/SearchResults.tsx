import { motion } from 'framer-motion'
import type { Product, ProductCategory } from '@/types/product'
import ProductCard from '@/components/menu/ProductCard'
import CategoryBadge from '@/components/menu/CategoryBadge'
import { fadeUp, staggerChildren } from '@/constants/animations'

interface SearchResultsProps {
  query: string
  results: Product[]
  categories: ProductCategory[]
}

function SearchResults({ query, results, categories }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <p className="text-cream-dim py-12 text-center text-sm sm:text-base">
        Nenhum item encontrado para{' '}
        <span className="text-cream">"{query}"</span>.
      </p>
    )
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="flex flex-col gap-6"
    >
      <motion.p variants={fadeUp} className="text-cream-dim text-sm">
        {results.length}{' '}
        {results.length === 1
          ? 'resultado encontrado'
          : 'resultados encontrados'}
      </motion.p>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {results.map((product) => {
          const category = categories.find((c) => c.id === product.categoryId)
          return (
            <motion.li
              key={product.id}
              variants={fadeUp}
              className="flex flex-col gap-1.5"
            >
              {category && (
                <CategoryBadge category={category} className="w-fit" />
              )}
              <ProductCard product={product} />
            </motion.li>
          )
        })}
      </ul>
    </motion.div>
  )
}

export default SearchResults
