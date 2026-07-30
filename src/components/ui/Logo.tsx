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
}

function Logo({ size = 'md', className }: LogoProps) {
  return (
    <img
      src={restaurantConfig.logo}
      alt={restaurantConfig.name}
      className={cn(
        'rounded-full object-cover ring-2 ring-wood-600 shadow-lg',
        sizeMap[size],
        className,
      )}
    />
  )
}

export default Logo
