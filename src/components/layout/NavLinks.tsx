import { NavLink } from 'react-router-dom'
import { navItems } from '@/constants/navigation'
import { focusRingClasses } from '@/constants/a11y'
import { cn } from '@/utils/cn'

interface NavLinksProps {
  className?: string
  linkClassName?: string
  onNavigate?: () => void
}

function NavLinks({ className, linkClassName, onNavigate }: NavLinksProps) {
  return (
    <nav aria-label="Navegação principal" className={className}>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              'rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
              focusRingClasses,
              isActive ? 'text-flame-300' : 'text-cream-dim hover:text-cream',
              linkClassName,
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default NavLinks
