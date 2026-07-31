import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import PageContainer from '@/components/ui/PageContainer'
import NavLinks from '@/components/layout/NavLinks'
import MobileMenu from '@/components/layout/MobileMenu'
import { restaurantConfig } from '@/constants/restaurant.config'
import { focusRingClasses } from '@/constants/a11y'
import { cn } from '@/utils/cn'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [lastPathname, setLastPathname] = useState(location.pathname)

  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname)
    setMenuOpen(false)
  }

  return (
    <header className="border-wood-800/60 bg-background/90 sticky top-0 z-50 w-full border-b backdrop-blur">
      <PageContainer className="flex h-16 items-center justify-between">
        <Link
          to="/"
          className={cn(
            'flex items-center gap-3 rounded-full',
            focusRingClasses,
          )}
        >
          <Logo size="sm" />
          <span className="font-display text-cream text-sm tracking-wide uppercase sm:text-base">
            {restaurantConfig.shortName}
          </span>
        </Link>

        <NavLinks className="hidden items-center gap-1 sm:flex" />

        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((value) => !value)}
          className={cn(
            'text-cream hover:text-flame-300 rounded-full transition-colors sm:hidden',
            focusRingClasses,
          )}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </PageContainer>

      <MobileMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </header>
  )
}

export default Header
