import { Flame, UtensilsCrossed } from 'lucide-react'
import Banner from '@/components/layout/Banner'
import AnimatedSection from '@/components/common/AnimatedSection'
import PageContainer from '@/components/ui/PageContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import { restaurantConfig } from '@/constants/restaurant.config'

function Home() {
  return (
    <main>
      <Banner />

      <AnimatedSection id="sobre">
        <PageContainer className="flex flex-col items-center gap-4 text-center">
          <SectionTitle eyebrow="Nossa história" title="Sobre a casa" />
          <p className="text-cream-dim max-w-xl text-sm sm:text-base">
            {restaurantConfig.description}
          </p>
        </PageContainer>
      </AnimatedSection>

      <AnimatedSection id="destaque" className="bg-surface">
        <PageContainer className="flex flex-col items-center gap-4 text-center">
          <div className="bg-brasa-500/10 text-brasa-400 flex h-14 w-14 items-center justify-center rounded-full">
            <UtensilsCrossed className="h-7 w-7" aria-hidden />
          </div>
          <SectionTitle title="Cardápio completo em breve" />
          <p className="text-cream-dim flex max-w-md items-center justify-center gap-2 text-sm sm:text-base">
            <Flame className="text-flame-500 h-4 w-4 shrink-0" aria-hidden />
            Estamos preparando tudo na brasa para você.
          </p>
        </PageContainer>
      </AnimatedSection>
    </main>
  )
}

export default Home
