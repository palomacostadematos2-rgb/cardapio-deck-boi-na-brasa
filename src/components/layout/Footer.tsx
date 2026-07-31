import { Link } from 'react-router-dom'
import Logo from '@/components/ui/Logo'
import PageContainer from '@/components/ui/PageContainer'
import WoodDivider from '@/components/ui/WoodDivider'
import { restaurantConfig } from '@/constants/restaurant.config'
import { focusRingClasses } from '@/constants/a11y'
import { cn } from '@/utils/cn'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-wood-800/60 mt-auto border-t">
      <PageContainer className="flex flex-col items-center gap-6 py-10 text-center">
        <Link
          to="/"
          className={cn('flex flex-col items-center gap-3', focusRingClasses)}
        >
          <Logo size="sm" />
          <span className="font-display text-cream text-lg tracking-wide uppercase">
            {restaurantConfig.shortName}
          </span>
        </Link>

        <WoodDivider />

        <div className="text-cream-dim space-y-1 text-sm">
          <p>
            {restaurantConfig.address.street} — {restaurantConfig.address.city}/
            {restaurantConfig.address.state}
          </p>
          {restaurantConfig.openingHours.map((item) => (
            <p key={item.days}>
              {item.days}: {item.hours}
            </p>
          ))}
        </div>

        <p className="text-cream-dim/70 text-xs">
          © {year} {restaurantConfig.name}. Todos os direitos reservados.
        </p>
      </PageContainer>
    </footer>
  )
}

export default Footer
