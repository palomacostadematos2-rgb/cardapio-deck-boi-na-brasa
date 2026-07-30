import { cn } from '@/utils/cn'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  className?: string
}

function SectionTitle({ eyebrow, title, className }: SectionTitleProps) {
  return (
    <div className={cn('text-center', className)}>
      {eyebrow && (
        <p className="font-script text-flame-300 mb-1 text-lg">{eyebrow}</p>
      )}
      <h2 className="font-display text-cream text-2xl tracking-wide uppercase sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
