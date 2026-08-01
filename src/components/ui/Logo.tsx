import logoWebp from '@/assets/images/logo-optimized.webp'
import { restaurantConfig } from '@/constants/restaurant.config'
import { cn } from '@/utils/cn'

const sizeMap = {
  sm: 'h-10 w-10',
  md: 'h-16 w-16',
  lg: 'h-28 w-28',
  xl: 'h-40 w-40 sm:h-52 sm:w-52',
} as const

interface LogoProps {
  size?: keyof typeof sizeMap
  className?: string
  priority?: boolean
}

function Logo({ size = 'md', className, priority = false }: LogoProps) {
  return (
    <picture>
      <source srcSet={logoWebp} type="image/webp" />
      <img
        src={restaurantConfig.logo}
        alt={restaurantConfig.name}
        width={480}
        height={480}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={cn(
          'rounded-full object-cover ring-2 ring-wood-600 shadow-lg',
          sizeMap[size],
          className,
        )}
      />
    </picture>
  )
}

export default Logo
