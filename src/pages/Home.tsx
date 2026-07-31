import { Link } from 'react-router-dom'
import { UtensilsCrossed } from 'lucide-react'
import Banner from '@/components/layout/Banner'
import AnimatedSection from '@/components/common/AnimatedSection'
import PageContainer from '@/components/ui/PageContainer'
import SectionTitle from '@/components/ui/SectionTitle'
import {
  buttonBaseClasses,
  buttonVariantClasses,
} from '@/constants/buttonStyles'
import { restaurantConfig } from '@/constants/restaurant.config'
import { cn } from '@/utils/cn'

function Home() {
  return (
    <main id="conteudo">
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
          <SectionTitle title="Conheça nosso cardápio" />
          <p className="text-cream-dim max-w-md text-sm sm:text-base">
            Cervejas artesanais, drinks autorais, petiscos e porções — tudo na
            brasa.
          </p>
          <Link
            to="/cardapio"
            className={cn(buttonBaseClasses, buttonVariantClasses.outline)}
          >
            Ver cardápio completo
          </Link>
        </PageContainer>
      </AnimatedSection>
    </main>
  )
}

export default Home
