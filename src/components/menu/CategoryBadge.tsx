import { memo } from 'react'
import { categoryIconMap } from '@/constants/categoryIcons'
import type { ProductCategory } from '@/types/product'
import { cn } from '@/utils/cn'

interface CategoryBadgeProps {
  category: ProductCategory
  className?: string
}

function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const Icon = categoryIconMap[category.icon]

  return (
    <span
      className={cn(
        'border-wood-800 text-cream-dim inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        className,
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden />}
      {category.name}
    </span>
  )
}

export default memo(CategoryBadge)
