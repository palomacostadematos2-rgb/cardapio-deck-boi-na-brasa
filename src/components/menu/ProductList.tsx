import { motion } from 'framer-motion'
import type { Product } from '@/types/product'
import ProductGroup from '@/components/menu/ProductGroup'
import { fadeUp, staggerChildren } from '@/constants/animations'

interface ProductListProps {
  products: Product[]
}

function groupProducts(products: Product[]) {
  const groups = new Map<string, Product[]>()

  for (const product of products) {
    const key = product.group ?? ''
    const existing = groups.get(key)
    if (existing) {
      existing.push(product)
    } else {
      groups.set(key, [product])
    }
  }

  return Array.from(groups.entries())
}

function ProductList({ products }: ProductListProps) {
  const groups = groupProducts(products)

  return (
    <motion.div
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
