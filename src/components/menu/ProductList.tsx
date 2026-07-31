import { motion } from 'framer-motion'
import type { Product } from '@/types/product'
import ProductGroup from '@/components/menu/ProductGroup'
import { fadeUp, staggerChildren } from '@/constants/animations'
import { groupProducts } from '@/utils/groupProducts'

interface ProductListProps {
  products: Product[]
  id?: string
  labelledBy?: string
}

function ProductList({ products, id, labelledBy }: ProductListProps) {
  const groups = groupProducts(products)

  if (products.length === 0) {
    return (
      <div
        id={id}
        role="tabpanel"
        aria-labelledby={labelledBy}
        className="text-cream-dim py-12 text-center text-sm sm:text-base"
      >
        Nenhum produto disponível nesta categoria.
      </div>
    )
  }

  return (
    <motion.div
      id={id}
      role="tabpanel"
      aria-labelledby={labelledBy}
      key={products[0]?.categoryId}
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
