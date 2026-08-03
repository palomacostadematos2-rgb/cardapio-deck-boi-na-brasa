import { motion, type Variants } from 'framer-motion'
import { categoryIconMap } from '@/constants/categoryIcons'
import CategoryImage from '@/components/menu/CategoryImage'
import { getCategoryImage } from '@/utils/categoryImages'
import { focusRingClasses } from '@/constants/a11y'
import { premiumEase } from '@/constants/animations'
import type { ProductCategory } from '@/types/product'
import { cn } from '@/utils/cn'

const cardVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -32 : 32,
    y: 16,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: premiumEase },
  },
}

interface CategoryCardProps {
  category: ProductCategory
  index: number
  onSelect: (categoryId: string) => void
}

function CategoryCard({ category, index, onSelect }: CategoryCardProps) {
  const Icon = categoryIconMap[category.icon]
  const image = getCategoryImage(category.id)
  const isEven = index % 2 === 0

  return (
    <motion.button
      type="button"
      custom={index}
      variants={cardVariants}
      whileHover={{ scale: 1.02, y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: premiumEase }}
      onClick={() => onSelect(category.id)}
      className={cn(
        'group border-wood-800/60 relative aspect-[4/3] w-[92%] overflow-hidden rounded-3xl border shadow-[0_20px_40px_-16px_rgba(0,0,0,0.6)] sm:aspect-[16/9] sm:w-[85%]',
        focusRingClasses,
        isEven ? 'self-start' : 'self-end',
      )}
    >
      <CategoryImage
        image={image}
        name={category.name}
        icon={category.icon}
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"
        aria-hidden
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        {Icon && (
          <Icon
            className="text-flame-300 h-9 w-9 sm:h-10 sm:w-10"
            aria-hidden
          />
        )}
        <h2 className="font-display text-cream text-2xl tracking-wide uppercase drop-shadow-lg sm:text-3xl">
          {category.name}
        </h2>
      </div>
    </motion.button>
  )
}

export default CategoryCard
