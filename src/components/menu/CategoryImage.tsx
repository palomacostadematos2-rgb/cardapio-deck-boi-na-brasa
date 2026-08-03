import { categoryIconMap } from '@/constants/categoryIcons'
import { cn } from '@/utils/cn'

interface CategoryImageProps {
  image?: string
  name: string
  icon: string
  className?: string
}

function CategoryImage({ image, name, icon, className }: CategoryImageProps) {
  const Icon = categoryIconMap[icon]

  if (image) {
    return (
      <img
        src={image}
        alt=""
        className={cn('h-full w-full object-cover', className)}
        loading="lazy"
      />
    )
  }

  return (
    <div
      className={cn(
        'via-surface to-wood-800/60 relative flex items-center justify-center bg-gradient-to-br from-black/30',
        className,
      )}
      aria-label={name}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, var(--color-wood-800) 0px, var(--color-wood-800) 3px, transparent 3px, transparent 22px)',
        }}
      />
      {Icon && (
        <Icon
          className="text-wood-300/50 relative h-24 w-24 sm:h-32 sm:w-32"
          strokeWidth={1}
        />
      )}
    </div>
  )
}

export default CategoryImage
