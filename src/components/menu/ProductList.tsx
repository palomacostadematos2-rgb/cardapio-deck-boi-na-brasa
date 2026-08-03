import { motion } from 'framer-motion'
import type { Product } from '@/types/product'
import ProductGroup from '@/components/menu/ProductGroup'
import { fadeUp, staggerChildren } from '@/constants/animations'
import { groupProducts } from '@/utils/groupProducts'

interface ProductListProps {
  products: Product[]
  emptyMessage?: string
}

function ProductList({
  products,
  emptyMessage = 'Nenhum produto disponível nesta categoria.',
}: ProductListProps) {
  const groups = groupProducts(products)

  if (products.length === 0) {
    return (
      <p className="text-cream-dim py-12 text-center text-sm sm:text-base">
        {emptyMessage}
      </p>
    )
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="flex flex-col gap-8"
    >
      {groups.map(([title, items]) => (
        <motion.div key={title || items[0]?.id} variants={fadeUp}>
          <ProductGroup title={title} products={items} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProductList
