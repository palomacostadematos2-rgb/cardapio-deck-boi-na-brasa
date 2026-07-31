import { motion } from 'framer-motion'
import { categoryIconMap } from '@/constants/categoryIcons'
import { focusRingClasses } from '@/constants/a11y'
import type { ProductCategory } from '@/types/product'
import { cn } from '@/utils/cn'

interface CategoryTabsProps {
  categories: ProductCategory[]
  activeId: string
  onChange: (id: string) => void
  panelId: string
}

function CategoryTabs({
  categories,
  activeId,
  onChange,
  panelId,
}: CategoryTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Categorias do cardápio"
      className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 py-3 sm:mx-0 sm:justify-center sm:px-0"
    >
      {categories.map((category) => {
        const Icon = categoryIconMap[category.icon]
        const isActive = category.id === activeId

        return (
          <button
            key={category.id}
            id={`tab-${category.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={panelId}
            onClick={() => onChange(category.id)}
            className={cn(
              'relative flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors',
              focusRingClasses,
              isActive
                ? 'border-brasa-500 text-cream'
                : 'border-wood-800 text-cream-dim hover:border-wood-600',
            )}
          >
            {isActive && (
              <motion.span
                layoutId="category-tab-pill"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                className="bg-brasa-500 absolute inset-0 -z-10 rounded-full"
              />
            )}
            {Icon && <Icon className="h-4 w-4" aria-hidden />}
            {category.name}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryTabs
