import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { focusRingClasses } from '@/constants/a11y'
import { cn } from '@/utils/cn'

const linkClasses =
  'text-cream-dim hover:text-cream inline-flex items-center gap-2 rounded-full text-sm transition-colors'

interface BackLinkProps {
  children: ReactNode
  to?: string
  onClick?: () => void
  className?: string
}

function BackLink({ children, to, onClick, className }: BackLinkProps) {
  if (to) {
    return (
      <Link to={to} className={cn(linkClasses, focusRingClasses, className)}>
        <ArrowLeft className="h-4 w-4" aria-hidden />
        {children}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(linkClasses, focusRingClasses, className)}
    >
      <ArrowLeft className="h-4 w-4" aria-hidden />
      {children}
    </button>
  )
}

export default BackLink
