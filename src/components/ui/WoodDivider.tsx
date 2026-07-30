import { Flame } from 'lucide-react'
import { cn } from '@/utils/cn'

interface WoodDividerProps {
  className?: string
}

function WoodDivider({ className }: WoodDividerProps) {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)}>
      <span className="via-wood-600 h-px w-16 bg-gradient-to-r from-transparent to-transparent" />
      <Flame className="text-flame-500 h-4 w-4" aria-hidden />
      <span className="via-wood-600 h-px w-16 bg-gradient-to-l from-transparent to-transparent" />
    </div>
  )
}

export default WoodDivider
