import { Menu } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import PageContainer from '@/components/ui/PageContainer'
import { restaurantConfig } from '@/constants/restaurant.config'
import { focusRingClasses } from '@/constants/a11y'
import { cn } from '@/utils/cn'

function Header() {
  return (
    <header className="border-wood-800/60 bg-background/90 sticky top-0 z-50 w-full border-b backdrop-blur">
      <PageContainer className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <span className="font-display text-cream text-sm tracking-wide uppercase sm:text-base">
            {restaurantConfig.shortName}
          </span>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          className={cn(
            'text-cream hover:text-flame-300 rounded-full transition-colors',
            focusRingClasses,
          )}
        >
          <Menu className="h-6 w-6" />
        </button>
      </PageContainer>
    </header>
  )
}

export default Header
