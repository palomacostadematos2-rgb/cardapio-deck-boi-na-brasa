import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-5xl px-4 sm:px-6', className)}>
      {children}
    </div>
  )
}

export default PageContainer
