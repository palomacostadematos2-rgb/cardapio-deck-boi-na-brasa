import { cn } from '@/utils/cn'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  as?: 'h1' | 'h2'
  className?: string
}

function SectionTitle({
  eyebrow,
  title,
  as: Heading = 'h2',
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('text-center', className)}>
      {eyebrow && (
        <p className="font-script text-flame-300 mb-1 text-lg">{eyebrow}</p>
      )}
      <Heading className="font-display text-cream text-2xl tracking-wide uppercase sm:text-3xl">
        {title}
      </Heading>
    </div>
  )
}

export default SectionTitle
