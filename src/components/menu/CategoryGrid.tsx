import { motion } from 'framer-motion'
import CategoryCard from '@/components/menu/CategoryCard'
import { staggerChildren } from '@/constants/animations'
import type { ProductCategory } from '@/types/product'

interface CategoryGridProps {
  categories: ProductCategory[]
  onSelect: (categoryId: string) => void
}

function CategoryGrid({ categories, onSelect }: CategoryGridProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="flex flex-col gap-5 sm:gap-6"
    >
      {categories.map((category, index) => (
        <CategoryCard
          key={category.id}
          category={category}
          index={index}
          onSelect={onSelect}
        />
      ))}
    </motion.div>
  )
}

export default CategoryGrid
