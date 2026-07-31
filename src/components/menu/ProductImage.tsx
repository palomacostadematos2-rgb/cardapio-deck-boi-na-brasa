import { Flame } from 'lucide-react'
import { categoryIconMap } from '@/constants/categoryIcons'
import { cn } from '@/utils/cn'

interface ProductImageProps {
  image?: string
  name: string
  categoryIcon?: string
  className?: string
  iconClassName?: string
}

function ProductImage({
  image,
  name,
  categoryIcon,
  className,
  iconClassName,
}: ProductImageProps) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={cn('h-full w-full object-cover', className)}
        loading="lazy"
      />
    )
  }

  const Icon = categoryIcon ? categoryIconMap[categoryIcon] : undefined

  return (
    <div
      className={cn(
        'via-surface to-wood-800/40 relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-black/20',
        className,
      )}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, var(--color-wood-800) 0px, var(--color-wood-800) 2px, transparent 2px, transparent 18px)',
        }}
      />
      {Icon ? (
        <Icon
          className={cn('text-wood-300/70 relative h-8 w-8', iconClassName)}
          strokeWidth={1.5}
        />
      ) : (
        <Flame
          className={cn('text-wood-300/70 relative h-8 w-8', iconClassName)}
          strokeWidth={1.5}
        />
      )}
    </div>
  )
}

export default ProductImage
