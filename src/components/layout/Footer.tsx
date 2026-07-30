import Logo from '@/components/ui/Logo'
import PageContainer from '@/components/ui/PageContainer'
import WoodDivider from '@/components/ui/WoodDivider'
import { restaurantConfig } from '@/constants/restaurant.config'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-wood-800/60 mt-auto border-t">
      <PageContainer className="flex flex-col items-center gap-6 py-10 text-center">
        <Logo size="sm" />

        <div>
          <p className="font-display text-cream text-lg tracking-wide uppercase">
            {restaurantConfig.shortName}
          </p>
          <p className="text-cream-dim mt-1 text-sm">
            {restaurantConfig.tagline}
          </p>
        </div>

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
